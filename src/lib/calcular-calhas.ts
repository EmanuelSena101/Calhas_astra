import type { CalculoInput, CalculoResultado, ItemResultado, TipoKit } from '@/types';
import { getCidadeById } from './precipitacao';
import { getPecasPorTipo, getNomeKit } from './pecas';

/**
 * Calcula a quantidade de condutores de 3m com base no resto.
 *
 * A lógica replica o VBScript original, que usa 5 ramos para o valor de `resto`:
 * - resto === 0
 * - resto > 1.5
 * - resto > 1
 * - resto > 0.5
 * - else (0 < resto <= 0.5)
 */
function calcularCondutores(
  alturaDoBeiral: number,
  resto: number,
  bocais: number,
): number {
  if (resto === 0) {
    return (alturaDoBeiral / 3) * bocais;
  }
  if (resto > 1.5) {
    return Math.ceil(Math.round(alturaDoBeiral / 3) * bocais);
  }
  if (resto > 1) {
    return Math.ceil((Math.round(alturaDoBeiral / 3) + 0.5) * bocais);
  }
  if (resto > 0.5) {
    return Math.ceil((Math.round(alturaDoBeiral / 3) + 1 / 3) * bocais);
  }
  return Math.ceil((alturaDoBeiral / 3 + 0.17) * bocais);
}

/**
 * Calcula peças para tipos 1 e 3 (apenas barras de 3m).
 */
function calcularTipo1ou3(
  comprimento: number,
  area: number,
  alturaDoBeiral: number,
  resto: number,
  precipitacao: number,
  tipo: TipoKit,
): ItemResultado[] {
  const pecas = getPecasPorTipo(tipo);

  const A = Math.ceil(comprimento / 3); // barras 3m
  const B = Math.ceil(area / precipitacao); // bocais
  const D = (Math.ceil(alturaDoBeiral / 3) - 1) * B; // conectores
  const E = Math.ceil(alturaDoBeiral / 1.5) * B; // abraçadeiras
  const C = calcularCondutores(alturaDoBeiral, resto, B); // condutores 3m

  return [
    { nome: pecas.barraCalha3m.nome, codigo: pecas.barraCalha3m.codigo, quantidade: A, url: pecas.barraCalha3m.url },
    { nome: pecas.bocal.nome, codigo: pecas.bocal.codigo, quantidade: B, url: pecas.bocal.url },
    { nome: pecas.antiFolha.nome, codigo: pecas.antiFolha.codigo, quantidade: B, url: pecas.antiFolha.url },
    {
      nome: pecas.emenda.nome,
      codigo: pecas.emenda.codigo,
      quantidade: Math.max(0, A - 1),
      url: pecas.emenda.url,
      observacao: 'Opcao (com ou sem vedacao)',
    },
    { nome: pecas.suporteFixador.nome, codigo: pecas.suporteFixador.codigo, quantidade: A * 5, url: pecas.suporteFixador.url },
    { nome: pecas.condutor3m.nome, codigo: pecas.condutor3m.codigo, quantidade: C, url: pecas.condutor3m.url },
    { nome: pecas.conector.nome, codigo: pecas.conector.codigo, quantidade: D, url: pecas.conector.url },
    {
      nome: pecas.abraçadeira.nome,
      codigo: pecas.abraçadeira.codigo,
      quantidade: E,
      url: pecas.abraçadeira.url,
    },
    {
      nome: pecas.cabeceira.nome,
      codigo: pecas.cabeceira.codigo,
      quantidade: 1,
      url: pecas.cabeceira.url,
      observacao: 'Minimo e 1 (um)',
    },
  ];
}

/**
 * Calcula peças para tipos 2 e 4 (barras de 3m + 1m).
 */
function calcularTipo2ou4(
  comprimento: number,
  area: number,
  alturaDoBeiral: number,
  resto: number,
  precipitacao: number,
  tipo: TipoKit,
): ItemResultado[] {
  const pecas = getPecasPorTipo(tipo);

  const A = Math.floor(comprimento / 3); // barras 3m
  const B = Math.ceil(comprimento - A * 3); // barras 1m
  const C = Math.ceil(area / precipitacao); // bocais
  const E = (Math.ceil(alturaDoBeiral / 3) - 1) * C; // conectores
  const F = Math.ceil(alturaDoBeiral / 1.5) * C; // abraçadeiras
  const D = calcularCondutores(alturaDoBeiral, resto, C); // condutores 3m

  const itens: ItemResultado[] = [
    { nome: pecas.barraCalha3m.nome, codigo: pecas.barraCalha3m.codigo, quantidade: A, url: pecas.barraCalha3m.url },
  ];

  if (pecas.barraCalha1m) {
    itens.push({
      nome: pecas.barraCalha1m.nome,
      codigo: pecas.barraCalha1m.codigo,
      quantidade: B,
      url: pecas.barraCalha1m.url,
    });
  }

  itens.push(
    { nome: pecas.bocal.nome, codigo: pecas.bocal.codigo, quantidade: C, url: pecas.bocal.url },
    { nome: pecas.antiFolha.nome, codigo: pecas.antiFolha.codigo, quantidade: C, url: pecas.antiFolha.url },
    {
      nome: pecas.emenda.nome,
      codigo: pecas.emenda.codigo,
      quantidade: Math.max(0, A + B - 1),
      url: pecas.emenda.url,
      observacao: 'Opcao (com ou sem vedacao)',
    },
    {
      nome: pecas.suporteFixador.nome,
      codigo: pecas.suporteFixador.codigo,
      quantidade: A * 5 + B * 2,
      url: pecas.suporteFixador.url,
    },
    { nome: pecas.condutor3m.nome, codigo: pecas.condutor3m.codigo, quantidade: D, url: pecas.condutor3m.url },
    { nome: pecas.conector.nome, codigo: pecas.conector.codigo, quantidade: E, url: pecas.conector.url },
    {
      nome: pecas.abraçadeira.nome,
      codigo: pecas.abraçadeira.codigo,
      quantidade: F,
      url: pecas.abraçadeira.url,
    },
    {
      nome: pecas.cabeceira.nome,
      codigo: pecas.cabeceira.codigo,
      quantidade: 1,
      url: pecas.cabeceira.url,
      observacao: 'Minimo e 1 (um)',
    },
  );

  return itens;
}

/**
 * Função pura de cálculo do simulador de calhas.
 * Recebe os inputs validados e retorna o resultado com a lista de peças.
 */
export function calcular(input: CalculoInput): CalculoResultado {
  const cidade = getCidadeById(input.cidade);
  if (!cidade) {
    throw new Error(`Cidade com id ${input.cidade} nao encontrada`);
  }

  const precipitacao = cidade.precipitacao[input.tipo];
  const area = Math.round((input.largura + input.alturaDoTelhado / 2) * input.comprimento);
  const resto = parseFloat(
    (input.alturaDoBeiral - Math.floor(input.alturaDoBeiral / 3) * 3).toFixed(1),
  );

  let itens: ItemResultado[];

  if (input.tipo === 1 || input.tipo === 3) {
    itens = calcularTipo1ou3(
      input.comprimento,
      area,
      input.alturaDoBeiral,
      resto,
      precipitacao,
      input.tipo,
    );
  } else {
    itens = calcularTipo2ou4(
      input.comprimento,
      area,
      input.alturaDoBeiral,
      resto,
      precipitacao,
      input.tipo,
    );
  }

  return {
    area,
    localidade: `${cidade.nome}/${cidade.uf}`,
    nomeKit: getNomeKit(input.tipo),
    itens,
  };
}
