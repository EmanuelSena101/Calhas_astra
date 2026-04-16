# Simulador de Calhas Astra

Simulador moderno para calculo de quantidade de pecas do sistema de calhas Astra. Reescrito a partir do sistema legado em ASP Classico para **Next.js 15** com **TypeScript**.

## Stack

- **Next.js 15** (App Router) + TypeScript strict
- **Tailwind CSS** + **shadcn/ui**
- **Zod** para validacao de inputs
- **Vitest** para testes unitarios
- **Docker** (multi-stage, imagem final `node:20-alpine`)

## Desenvolvimento

```bash
# Instalar dependencias
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Rodar testes
npm test

# Build de producao
npm run build

# Iniciar em producao
npm start
```

## Docker

```bash
# Build e iniciar com Docker Compose
docker compose up --build

# A aplicacao estara disponivel em http://localhost:3000
```

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Formulario de simulacao
│   ├── resultado/page.tsx    # Resultado do calculo
│   └── globals.css
├── components/
│   ├── formulario-calhas.tsx # Componente do formulario
│   ├── card-resultado.tsx    # Componente do resultado
│   └── ui/                   # Componentes shadcn/ui
├── lib/
│   ├── calcular-calhas.ts   # Funcao pura de calculo
│   ├── precipitacao.ts      # Tabela de 98 cidades x precipitacao
│   ├── pecas.ts             # Catalogo de pecas (codigo, nome, link)
│   ├── schemas.ts           # Schemas Zod para validacao
│   └── utils.ts
└── types/
    └── index.ts             # Tipos TypeScript
tests/
└── calcular-calhas.test.ts  # Testes unitarios
```

## Tipos de Kit

| Tipo | Barras    | Bocal          |
|------|-----------|----------------|
| 1    | apenas 3m | 75mm (retangular) |
| 2    | 3m + 1m   | 75mm           |
| 3    | apenas 3m | 100mm (redondo)|
| 4    | 3m + 1m   | 100mm          |

## Cidades

98 cidades agrupadas por UF, com valores de precipitacao pluviometrica para cada tipo de kit. Dados extraidos do sistema original em ASP.

## Testes

Os testes cobrem:
- Um caso para cada tipo de kit (1, 2, 3, 4)
- Casos de borda do calculo de condutores (5 ramos da logica de `resto`)
- Emenda nao pode ser negativa
- Verificacao de precipitacao para 5 cidades x 4 tipos
- Caso de aceitacao: SP Congonhas, tipo 1
- Contagem total de 98 cidades
