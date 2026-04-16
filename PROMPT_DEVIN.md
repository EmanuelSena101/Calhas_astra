# Prompt para Devin — Modernização do Simulador de Calhas Astra

## Contexto

Você vai reescrever um simulador legado de quantidade de peças de calha (da fabricante brasileira Astra) que hoje está em **ASP Clássico (VBScript) + SQL Server + IIS**. O código-fonte atual está na pasta `calhas antigo/` deste repositório e contém três arquivos: `calhas.asp` (formulário), `calhas-ok.asp` (cálculo + resultado) e `calhas-ok-imprimir.asp` (versão para impressão).

O novo sistema será **standalone** — rodando em outro container, outro domínio, sem dependência do site atual. Não há banco de dados: a única "persistência" são tabelas estáticas de cidades × precipitação pluviométrica.

Seu objetivo é **preservar 100% da lógica de negócio** (fórmulas, códigos de peças, links de loja) e entregar um produto moderno, testável e fácil de manter.

## Stack obrigatória

- **Next.js 15** (App Router) + **TypeScript strict**
- **Tailwind CSS** + **shadcn/ui** para componentes
- **Zod** para validação dos inputs
- **Vitest** para testes unitários da lógica de cálculo
- **Docker** (multi-stage, imagem final baseada em `node:20-alpine`)
- Sem backend/API — tudo client-side (é cálculo puro)
- Sem banco de dados — tabelas em TypeScript/JSON tipados

## Estrutura de pastas esperada

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # formulário
│   │   ├── resultado/page.tsx    # resultado do cálculo
│   │   └── globals.css
│   ├── components/                # UI (Formulário, CardResultado, etc.)
│   ├── lib/
│   │   ├── calcular-calhas.ts    # função pura de cálculo
│   │   ├── precipitacao.ts       # tabela cidade×tipo→precipitação
│   │   ├── pecas.ts              # catálogo de peças (código, nome, link da loja)
│   │   └── schemas.ts            # schemas Zod
│   └── types/
├── tests/
│   └── calcular-calhas.test.ts   # cobrir todos os 4 tipos + casos de borda
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Domínio e regras de negócio

### Inputs do formulário (todos obrigatórios)

| Campo | Tipo | Descrição |
|---|---|---|
| `largura` | número (m, > 0) | Largura do telhado (A no croqui) |
| `comprimento` | número (m, > 0) | Comprimento do beiral (B no croqui) |
| `alturaDoTelhado` | número (m, > 0) | Altura do telhado (C no croqui) |
| `alturaDoBeiral` | número (m, > 0) | Altura da calha até o chão (D no croqui) |
| `cidade` | enum 1–98 | Cidade (veja `precipitacao.ts`) |
| `tipo` | enum 1–4 | Kit de material disponível |

Aceitar vírgula como separador decimal (padrão BR). Validar com Zod.

### Tipos de kit

| tipo | Barras | Bocal |
|---|---|---|
| 1 | apenas 3m | 75mm (retangular) |
| 2 | 3m + 1m | 75mm |
| 3 | apenas 3m | 100mm (redondo) |
| 4 | 3m + 1m | 100mm |

### Tabela de cidades × precipitação

Há 98 cidades agrupadas por estado. Cada cidade tem **4 valores de precipitação** (um para cada tipo de kit). Extraia a lista completa direto do arquivo `calhas antigo/calhas-ok.asp`:

- Nomes das cidades: linhas 562–1049 (são também os `<option>` do `select` em `calhas antigo/calhas.asp`, linhas 631–754)
- Precipitação para **tipo 1**: linhas 1090–1577
- Precipitação para **tipo 2**: linhas 1763–2250
- Precipitação para **tipo 3**: linhas 2439–~2925
- Precipitação para **tipo 4**: bloco final, começa por volta da linha ~3100

Formato alvo em `src/lib/precipitacao.ts`:

```ts
export type Cidade = {
  id: number;
  nome: string;
  uf: string;
  precipitacao: { 1: number; 2: number; 3: number; 4: number };
};

export const CIDADES: Cidade[] = [ /* 98 entradas */ ];
```

### Fórmulas de cálculo

Dado o input, calcular:

```
area = (largura + alturaDoTelhado / 2) * comprimento
precipitacao = CIDADES[cidade-1].precipitacao[tipo]
resto = alturaDoBeiral - Math.floor(alturaDoBeiral / 3) * 3
```

**Para tipo 1 (3m + 75mm)** e **tipo 3 (3m + 100mm)** — mesmas fórmulas, só muda a precipitação:

```
A = ceil(comprimento / 3)              // barras 3m
B = ceil(area / precipitacao)          // bocais
D = (ceil(alturaDoBeiral / 3) - 1) * B // conectores
E = ceil(alturaDoBeiral / 1.5) * B     // abraçadeiras

// C (condutores 3m) — usa `resto`:
if (resto === 0)       C = (alturaDoBeiral / 3) * B
else if (resto > 1.5)  C = ceil(round(alturaDoBeiral / 3) * B)
else if (resto > 1)    C = ceil((round(alturaDoBeiral / 3) + 0.5) * B)
else if (resto > 0.5)  C = ceil((round(alturaDoBeiral / 3) + 1/3) * B)
else                   C = ceil(((alturaDoBeiral / 3) + 0.17) * B)

// outras peças
antiFolha       = B
emenda          = A - 1
suporteFixador  = A * 5
cabeceira       = 1
```

**Para tipo 2 (3m + 1m + 75mm)** e **tipo 4 (3m + 1m + 100mm)**:

```
A = floor(comprimento / 3)           // barras 3m
B = ceil(comprimento - A * 3)        // barras 1m (resto do comprimento)
C = ceil(area / precipitacao)        // bocais
E = (ceil(alturaDoBeiral / 3) - 1) * C  // conectores
F = ceil(alturaDoBeiral / 1.5) * C      // abraçadeiras

// D (condutores 3m) — mesma lógica de `resto` do tipo 1/3, mas multiplicando por C:
if (resto === 0)       D = (alturaDoBeiral / 3) * C
else if (resto > 1.5)  D = ceil(round(alturaDoBeiral / 3) * C)
else if (resto > 1)    D = ceil((round(alturaDoBeiral / 3) + 0.5) * C)
else if (resto > 0.5)  D = ceil((round(alturaDoBeiral / 3) + 1/3) * C)
else                   D = ceil(((alturaDoBeiral / 3) + 0.17) * C)

antiFolha       = C
emenda          = (A + B) - 1
suporteFixador  = A * 5 + B * 2
cabeceira       = 1
```

**Observações importantes**:
- `ceil` = `Math.ceil` (roundUp do VBScript)
- `round` = `Math.round` (arredondamento padrão)
- Todas as quantidades finais são inteiras ≥ 0 (use `Math.max(0, ...)` em `emenda` quando `A=1`).
- A função de cálculo deve ser **pura** e receber/retornar tipos explícitos (sem acesso a DOM/Request).

### Catálogo de peças

| Código | Nome | Link loja (campo `url`) |
|---|---|---|
| CAL/CK | Barra da calha 3m | `https://loja.astra-sa.com/barra-da-calha-3m-branca-astra-cal-ck/p?idsku=2056` |
| CAL/CK1 | Barra da calha 1m | `https://loja.astra-sa.com/barra-da-calha-1m-branca-astra-cal-ck1/p?idsku=2057` |
| CAL/BOC | Bocal de saída (75mm ou 100mm conforme tipo) | `https://loja.astra-sa.com/bocal-de-saida-da-calha-de-75mm-branco-astra/p?idsku=2053` |
| CAL/AF | Anti-folha | `https://loja.astra-sa.com/anti-folha-para-bocal-de-saida-de-calha-120x135mm-astra/p?idsku=2051` |
| CAL/EMC | Emenda com vedação | `https://loja.astra-sa.com/Emenda%20da%20Calha` |
| CAL/SU | Suporte fixador | `https://loja.astra-sa.com/suporte-de-fixacao-de-calha-branco-astra/p?idsku=2065` |
| CAL/CDT | Tubo condutor 3m | `https://loja.astra-sa.com/tubo-condutor-de-calha-de-3m-branco-astra/p` |
| CAL/CN | Conector do condutor | `https://loja.astra-sa.com/conector-do-condutor-de-calha-branco-astra/p?idsku=2058` |
| CAL/ABC | Abraçadeira do condutor | `https://loja.astra-sa.com/abracadeira-para-condutor-de-calha-branco-astra/p?idsku=2049` |
| CAL/CAB | Cabeceira (par) | `https://loja.astra-sa.com/cabeceira-para-calha--par--branco-astra/p?idsku=2054` |

Quando for bocal de 100mm (tipos 3 e 4), confira no ASP original o link correto e atualize em `pecas.ts`.

## Requisitos de UI

- Layout responsivo (mobile-first)
- Identidade visual limpa e moderna — **não replicar o visual antigo**. Use paleta da Astra (azul `#0094D2` e laranja `#FF6600` como acentos).
- Tela 1 (formulário): um campo por linha no mobile, grid 2 colunas no desktop. Cada dimensão acompanhada de uma imagem/ícone representando a letra (A, B, C, D) no croqui. Imagem referencial: `calhas antigo/images/calhas-altura-largura-comprimento.png`.
- Tela 2 (resultado): tabela com colunas **Item, Código, Quantidade, Link, Observação**. Botão "Imprimir" (usar `window.print()` + CSS `@media print`). Botão "Nova simulação".
- Avisos textuais sobre "telhados com mais de uma queda" (texto presente em `calhas.asp` linhas 485–492) — exibir em destaque antes e depois do formulário.
- Acessibilidade: labels associadas, navegação por teclado, contraste AA.

## Requisitos técnicos

- `calcular-calhas.ts` exporta uma função pura `calcular(input: CalculoInput): CalculoResultado` — sem efeitos colaterais.
- Validação server-side **e** client-side com o mesmo schema Zod.
- Sem analytics, sem chat, sem scripts externos (GTM, Facebook Pixel, HubSpot, Blip do ASP antigo) — removidos do escopo.
- Sem i18n (só pt-BR por enquanto).
- Sem autenticação.

## Testes obrigatórios (Vitest)

Cobrir em `tests/calcular-calhas.test.ts`:

1. Um caso conhecido para cada tipo (1, 2, 3, 4) — use Rio Branco/AC como cidade padrão nos testes.
2. Casos de borda do `resto` do condutor: `alturaDoBeiral` = 3, 3.4, 3.6, 4.1, 4.6 (cobre os 5 ramos da lógica do `C`/`D`).
3. `emenda` não pode ser negativa quando `A = 1`.
4. Valores de precipitação idênticos aos do ASP para ao menos 5 cidades × 4 tipos (amostra de conferência).

Rodar `npm test` deve passar 100%.

## Docker

```dockerfile
# Multi-stage: deps → build → runner
# Expor porta 3000
# Variável NEXT_TELEMETRY_DISABLED=1
```

`docker-compose.yml` com serviço único `calhas` na porta 3000.

## Critérios de aceitação

- [ ] `docker compose up` sobe a aplicação em `http://localhost:3000` sem erros.
- [ ] Preenchendo o formulário com `largura=10, comprimento=12, alturaDoTelhado=3, alturaDoBeiral=4, cidade=93 (São Paulo Congonhas), tipo=1`, o resultado bate com o mesmo input rodado no ASP original.
- [ ] Testes (`npm test`) passam 100%.
- [ ] `npm run build` conclui sem warnings de TypeScript.
- [ ] Todas as 98 cidades aparecem agrupadas por UF no select (igual ao ASP original).
- [ ] A página de resultado imprime corretamente (teste com `window.print()`).

## O que NÃO fazer

- Não trazer GTM, Google Analytics, Facebook Pixel, HubSpot, Blip Chat, Hand Talk do ASP antigo.
- Não criar banco de dados — as tabelas de cidades/peças são estáticas em código.
- Não replicar o visual antigo (Bootstrap 3, classes `col-md-9`, etc.). Partir do zero com Tailwind/shadcn.
- Não criar um backend Express/Fastify à parte — é tudo Next.js.
- Não adicionar autenticação, cadastro, ou salvar simulações — o fluxo é anônimo.
- Não traduzir para outros idiomas agora.

## Entregáveis finais

1. Código-fonte no repositório.
2. `README.md` com instruções de dev (`npm run dev`), build, teste e deploy via Docker.
3. Tabela de cidades/precipitação completa e conferida contra o ASP original.
4. Testes passando.
5. Screenshot do formulário e do resultado no README.
