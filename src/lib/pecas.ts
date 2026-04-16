import type { TipoKit } from '@/types';

export type Peca = {
  codigo: string;
  nome: string;
  url: string;
};

export type PecasPorTipo = {
  barraCalha3m: Peca;
  barraCalha1m?: Peca;
  bocal: Peca;
  antiFolha: Peca;
  emenda: Peca;
  suporteFixador: Peca;
  condutor3m: Peca;
  conector: Peca;
  abraçadeira: Peca;
  cabeceira: Peca;
};

const PECAS_BASE = {
  barraCalha3m: {
    codigo: 'CAL/CK',
    nome: 'Calha de 3 m',
    url: 'https://loja.astra-sa.com/barra-da-calha-3m-branca-astra-cal-ck/p?idsku=2056',
  },
  barraCalha1m: {
    codigo: 'CAL/CK1',
    nome: 'Calha de 1 m',
    url: 'https://loja.astra-sa.com/barra-da-calha-1m-branca-astra-cal-ck1/p?idsku=2057',
  },
  bocal75: {
    codigo: 'CAL/BOC',
    nome: 'Bocal de saida 75 mm',
    url: 'https://loja.astra-sa.com/bocal-de-saida-da-calha-de-75mm-branco-astra/p?idsku=2053',
  },
  bocal100: {
    codigo: 'CAL/B100',
    nome: 'Bocal de saida 100 mm',
    url: 'https://loja.astra-sa.com/bocal-de-saida-da-calha-de-100mm-branco-astra/p',
  },
  antiFolha: {
    codigo: 'CAL/AF',
    nome: 'Anti-folha',
    url: 'https://loja.astra-sa.com/anti-folha-para-bocal-de-saida-de-calha-120x135mm-astra/p?idsku=2051',
  },
  emenda: {
    codigo: 'CAL/EMC',
    nome: 'Emenda com vedacao',
    url: 'https://loja.astra-sa.com/Emenda%20da%20Calha',
  },
  suporteFixador: {
    codigo: 'CAL/SU',
    nome: 'Suporte fixador',
    url: 'https://loja.astra-sa.com/suporte-de-fixacao-de-calha-branco-astra/p?idsku=2065',
  },
  condutor3m: {
    codigo: 'CAL/CDT',
    nome: 'Condutor de 3 m',
    url: 'https://loja.astra-sa.com/tubo-condutor-de-calha-de-3m-branco-astra/p',
  },
  conector: {
    codigo: 'CAL/CN',
    nome: 'Conector do condutor',
    url: 'https://loja.astra-sa.com/conector-do-condutor-de-calha-branco-astra/p?idsku=2058',
  },
  abraçadeira: {
    codigo: 'CAL/ABC',
    nome: 'Abraçadeira do condutor',
    url: 'https://loja.astra-sa.com/abracadeira-para-condutor-de-calha-branco-astra/p?idsku=2049',
  },
  cabeceira: {
    codigo: 'CAL/CAB',
    nome: 'Cabeceira (par)',
    url: 'https://loja.astra-sa.com/cabeceira-para-calha--par--branco-astra/p?idsku=2054',
  },
} as const;

export function getPecasPorTipo(tipo: TipoKit): PecasPorTipo {
  const is100mm = tipo === 3 || tipo === 4;
  const bocal = is100mm ? PECAS_BASE.bocal100 : PECAS_BASE.bocal75;

  const base: PecasPorTipo = {
    barraCalha3m: PECAS_BASE.barraCalha3m,
    bocal,
    antiFolha: {
      ...PECAS_BASE.antiFolha,
      nome: is100mm ? 'Anti-folha para 100 mm' : 'Anti-folha para 75 mm',
    },
    emenda: PECAS_BASE.emenda,
    suporteFixador: PECAS_BASE.suporteFixador,
    condutor3m: PECAS_BASE.condutor3m,
    conector: PECAS_BASE.conector,
    abraçadeira: PECAS_BASE.abraçadeira,
    cabeceira: PECAS_BASE.cabeceira,
  };

  if (tipo === 2 || tipo === 4) {
    base.barraCalha1m = PECAS_BASE.barraCalha1m;
  }

  return base;
}

export function getNomeKit(tipo: TipoKit): string {
  switch (tipo) {
    case 1:
      return 'Barra 3 m e bocal de saida 75 mm';
    case 2:
      return 'Barras 3 m e 1 m e bocal de saida 75 mm';
    case 3:
      return 'Barra 3 m e bocal de saida 100 mm';
    case 4:
      return 'Barras 3 m e 1 m e bocal de saida 100 mm';
  }
}
