export type TipoKit = 1 | 2 | 3 | 4;

export type Cidade = {
  id: number;
  nome: string;
  uf: string;
  precipitacao: Record<TipoKit, number>;
};

export type CalculoInput = {
  largura: number;
  comprimento: number;
  alturaDoTelhado: number;
  alturaDoBeiral: number;
  cidade: number;
  tipo: TipoKit;
};

export type ItemResultado = {
  nome: string;
  codigo: string;
  quantidade: number;
  url: string;
  observacao?: string;
};

export type CalculoResultado = {
  area: number;
  localidade: string;
  nomeKit: string;
  itens: ItemResultado[];
};
