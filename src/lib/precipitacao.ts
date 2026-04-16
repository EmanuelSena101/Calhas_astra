import type { Cidade } from '@/types';

export const CIDADES: Cidade[] = [
  // AC
  { id: 1, nome: 'Rio Branco', uf: 'AC', precipitacao: { 1: 77, 2: 77, 3: 129, 4: 129 } },
  { id: 2, nome: 'Sena Madureira', uf: 'AC', precipitacao: { 1: 67, 2: 67, 3: 112, 4: 112 } },
  // AL
  { id: 3, nome: 'Maceio', uf: 'AL', precipitacao: { 1: 88, 2: 88, 3: 147, 4: 147 } },
  // AM
  { id: 4, nome: 'Juarete', uf: 'AM', precipitacao: { 1: 45, 2: 45, 3: 75, 4: 75 } },
  { id: 5, nome: 'Manaus', uf: 'AM', precipitacao: { 1: 60, 2: 60, 3: 100, 4: 100 } },
  { id: 6, nome: 'Paratins', uf: 'AM', precipitacao: { 1: 54, 2: 54, 3: 90, 4: 90 } },
  { id: 7, nome: 'Uaupes', uf: 'AM', precipitacao: { 1: 52, 2: 52, 3: 88, 4: 88 } },
  // BA
  { id: 8, nome: 'Salvador', uf: 'BA', precipitacao: { 1: 88, 2: 88, 3: 147, 4: 147 } },
  // CE
  { id: 9, nome: 'Fortaleza', uf: 'CE', precipitacao: { 1: 69, 2: 69, 3: 115, 4: 115 } },
  { id: 10, nome: 'Guaramiranga', uf: 'CE', precipitacao: { 1: 85, 2: 85, 3: 142, 4: 142 } },
  { id: 11, nome: 'Quixeramobim', uf: 'CE', precipitacao: { 1: 89, 2: 89, 3: 148, 4: 148 } },
  // ES
  { id: 12, nome: 'Vitoria', uf: 'ES', precipitacao: { 1: 69, 2: 69, 3: 115, 4: 115 } },
  // PE (Fernando de Noronha)
  { id: 13, nome: 'Fernando de Noronha', uf: 'PE', precipitacao: { 1: 90, 2: 90, 3: 150, 4: 150 } },
  // GO
  { id: 14, nome: 'Catalao', uf: 'GO', precipitacao: { 1: 62, 2: 62, 3: 103, 4: 103 } },
  { id: 15, nome: 'Formosa', uf: 'GO', precipitacao: { 1: 61, 2: 61, 3: 102, 4: 102 } },
  { id: 16, nome: 'Goiania', uf: 'GO', precipitacao: { 1: 60, 2: 60, 3: 101, 4: 101 } },
  // MA
  { id: 17, nome: 'Barra do Corda', uf: 'MA', precipitacao: { 1: 84, 2: 84, 3: 140, 4: 140 } },
  { id: 18, nome: 'Sao Luiz', uf: 'MA', precipitacao: { 1: 85, 2: 85, 3: 142, 4: 142 } },
  // MG
  { id: 19, nome: 'Barbacena', uf: 'MG', precipitacao: { 1: 48, 2: 48, 3: 81, 4: 81 } },
  { id: 20, nome: 'Belo Horizonte', uf: 'MG', precipitacao: { 1: 47, 2: 47, 3: 79, 4: 79 } },
  { id: 21, nome: 'Bonsucesso', uf: 'MG', precipitacao: { 1: 55, 2: 55, 3: 91, 4: 91 } },
  { id: 22, nome: 'Caxambu', uf: 'MG', precipitacao: { 1: 78, 2: 78, 3: 131, 4: 131 } },
  { id: 23, nome: 'Ouro Preto', uf: 'MG', precipitacao: { 1: 51, 2: 51, 3: 85, 4: 85 } },
  { id: 24, nome: 'Paracatu', uf: 'MG', precipitacao: { 1: 46, 2: 46, 3: 77, 4: 77 } },
  { id: 25, nome: 'Passa Quatro', uf: 'MG', precipitacao: { 1: 60, 2: 60, 3: 100, 4: 100 } },
  { id: 26, nome: 'Sete Lagoas', uf: 'MG', precipitacao: { 1: 59, 2: 59, 3: 98, 4: 98 } },
  { id: 27, nome: 'Teofilo Otoni', uf: 'MG', precipitacao: { 1: 89, 2: 89, 3: 148, 4: 148 } },
  { id: 28, nome: 'Turiacu', uf: 'MG', precipitacao: { 1: 66, 2: 66, 3: 111, 4: 111 } },
  // MS
  { id: 29, nome: 'Corumba', uf: 'MS', precipitacao: { 1: 82, 2: 82, 3: 137, 4: 137 } },
  // MT
  { id: 30, nome: 'Cuiaba', uf: 'MT', precipitacao: { 1: 56, 2: 56, 3: 94, 4: 94 } },
  // PA
  { id: 31, nome: 'Alto Tapajos', uf: 'PA', precipitacao: { 1: 47, 2: 47, 3: 78, 4: 78 } },
  { id: 32, nome: 'Belem', uf: 'PA', precipitacao: { 1: 68, 2: 68, 3: 114, 4: 114 } },
  { id: 33, nome: 'Soure', uf: 'PA', precipitacao: { 1: 66, 2: 66, 3: 111, 4: 111 } },
  { id: 34, nome: 'Taperinha', uf: 'PA', precipitacao: { 1: 53, 2: 53, 3: 89, 4: 89 } },
  // PB
  { id: 35, nome: 'Joao Pessoa', uf: 'PB', precipitacao: { 1: 77, 2: 77, 3: 128, 4: 128 } },
  { id: 36, nome: 'Sao Goncalo', uf: 'PB', precipitacao: { 1: 87, 2: 87, 3: 145, 4: 145 } },
  // PE
  { id: 37, nome: 'Nazare', uf: 'PE', precipitacao: { 1: 80, 2: 80, 3: 134, 4: 134 } },
  { id: 38, nome: 'Olinda', uf: 'PE', precipitacao: { 1: 64, 2: 64, 3: 107, 4: 107 } },
  // PI
  { id: 39, nome: 'Teresina', uf: 'PI', precipitacao: { 1: 45, 2: 45, 3: 75, 4: 75 } },
  // PR
  { id: 40, nome: 'Curitiba', uf: 'PR', precipitacao: { 1: 52, 2: 52, 3: 88, 4: 88 } },
  { id: 41, nome: 'Jacarezinho', uf: 'PR', precipitacao: { 1: 88, 2: 88, 3: 147, 4: 147 } },
  { id: 42, nome: 'Paranagua', uf: 'PR', precipitacao: { 1: 58, 2: 58, 3: 96, 4: 96 } },
  { id: 43, nome: 'Ponta Grossa', uf: 'PR', precipitacao: { 1: 85, 2: 85, 3: 142, 4: 142 } },
  // RJ
  { id: 44, nome: 'Alto Itatiaia', uf: 'RJ', precipitacao: { 1: 65, 2: 65, 3: 109, 4: 109 } },
  { id: 45, nome: 'Alto Teresopolis', uf: 'RJ', precipitacao: { 1: 78, 2: 78, 3: 131, 4: 131 } },
  { id: 46, nome: 'Cabo Frio', uf: 'RJ', precipitacao: { 1: 73, 2: 73, 3: 123, 4: 123 } },
  { id: 47, nome: 'Campos', uf: 'RJ', precipitacao: { 1: 52, 2: 52, 3: 87, 4: 87 } },
  { id: 48, nome: 'km 47 - Rodovia Presidente Dutra', uf: 'RJ', precipitacao: { 1: 65, 2: 65, 3: 109, 4: 109 } },
  { id: 49, nome: 'Niteroi', uf: 'RJ', precipitacao: { 1: 59, 2: 59, 3: 98, 4: 98 } },
  { id: 50, nome: 'Nova Friburgo', uf: 'RJ', precipitacao: { 1: 87, 2: 87, 3: 145, 4: 145 } },
  { id: 51, nome: 'Petropolis', uf: 'RJ', precipitacao: { 1: 85, 2: 85, 3: 142, 4: 142 } },
  { id: 52, nome: 'Pinheiral', uf: 'RJ', precipitacao: { 1: 50, 2: 50, 3: 84, 4: 84 } },
  { id: 53, nome: 'Resende', uf: 'RJ', precipitacao: { 1: 53, 2: 53, 3: 88, 4: 88 } },
  { id: 54, nome: 'Rio de Janeiro (Bangu)', uf: 'RJ', precipitacao: { 1: 69, 2: 69, 3: 115, 4: 115 } },
  { id: 55, nome: 'Rio de Janeiro (Ipanema)', uf: 'RJ', precipitacao: { 1: 86, 2: 86, 3: 144, 4: 144 } },
  { id: 56, nome: 'Rio de Janeiro (Jacarepagua)', uf: 'RJ', precipitacao: { 1: 76, 2: 76, 3: 126, 4: 126 } },
  { id: 57, nome: 'Rio de Janeiro (Jardim Botanico)', uf: 'RJ', precipitacao: { 1: 64, 2: 64, 3: 107, 4: 107 } },
  { id: 58, nome: 'Rio de Janeiro (Praca Saenz Pena)', uf: 'RJ', precipitacao: { 1: 77, 2: 77, 3: 129, 4: 129 } },
  { id: 59, nome: 'Rio de Janeiro (Praca XV)', uf: 'RJ', precipitacao: { 1: 62, 2: 62, 3: 103, 4: 103 } },
  { id: 60, nome: 'Rio de Janeiro (Santa Cruz)', uf: 'RJ', precipitacao: { 1: 81, 2: 81, 3: 136, 4: 136 } },
  { id: 61, nome: 'Santa Maria Madalena', uf: 'RJ', precipitacao: { 1: 85, 2: 85, 3: 142, 4: 142 } },
  { id: 62, nome: 'Teresopolis', uf: 'RJ', precipitacao: { 1: 72, 2: 72, 3: 120, 4: 120 } },
  { id: 63, nome: 'Vassouras', uf: 'RJ', precipitacao: { 1: 60, 2: 60, 3: 100, 4: 100 } },
  { id: 64, nome: 'Volta Redonda', uf: 'RJ', precipitacao: { 1: 50, 2: 50, 3: 83, 4: 83 } },
  // RN
  { id: 65, nome: 'Natal', uf: 'RN', precipitacao: { 1: 90, 2: 90, 3: 150, 4: 150 } },
  // RO
  { id: 66, nome: 'Porto Velho', uf: 'RO', precipitacao: { 1: 64, 2: 64, 3: 107, 4: 107 } },
  // RS
  { id: 67, nome: 'Alegrete', uf: 'RS', precipitacao: { 1: 45, 2: 45, 3: 75, 4: 75 } },
  { id: 68, nome: 'Bage', uf: 'RS', precipitacao: { 1: 52, 2: 52, 3: 88, 4: 88 } },
  { id: 69, nome: 'Caxias do Sul', uf: 'RS', precipitacao: { 1: 85, 2: 85, 3: 141, 4: 141 } },
  { id: 70, nome: 'Cruz Alta', uf: 'RS', precipitacao: { 1: 43, 2: 43, 3: 73, 4: 73 } },
  { id: 71, nome: 'Encruzilhada', uf: 'RS', precipitacao: { 1: 85, 2: 85, 3: 142, 4: 142 } },
  { id: 72, nome: 'Irai', uf: 'RS', precipitacao: { 1: 54, 2: 54, 3: 90, 4: 90 } },
  { id: 73, nome: 'Passo Fundo', uf: 'RS', precipitacao: { 1: 86, 2: 86, 3: 144, 4: 144 } },
  { id: 74, nome: 'Porto Alegre', uf: 'RS', precipitacao: { 1: 73, 2: 73, 3: 123, 4: 123 } },
  { id: 75, nome: 'Rio Grande', uf: 'RS', precipitacao: { 1: 52, 2: 52, 3: 88, 4: 88 } },
  { id: 76, nome: 'Santa Maria', uf: 'RS', precipitacao: { 1: 88, 2: 88, 3: 147, 4: 147 } },
  { id: 77, nome: 'Santa Vitoria do Palmar', uf: 'RS', precipitacao: { 1: 85, 2: 85, 3: 142, 4: 142 } },
  { id: 78, nome: 'Sao Luiz Gonzaga', uf: 'RS', precipitacao: { 1: 51, 2: 51, 3: 86, 4: 86 } },
  { id: 79, nome: 'Uruguaiana', uf: 'RS', precipitacao: { 1: 76, 2: 76, 3: 126, 4: 126 } },
  { id: 80, nome: 'Viamao', uf: 'RS', precipitacao: { 1: 85, 2: 85, 3: 142, 4: 142 } },
  // SC
  { id: 81, nome: 'Blumenau', uf: 'SC', precipitacao: { 1: 86, 2: 86, 3: 144, 4: 144 } },
  { id: 82, nome: 'Florianopolis', uf: 'SC', precipitacao: { 1: 90, 2: 90, 3: 150, 4: 150 } },
  { id: 83, nome: 'Sao Francisco do Sul', uf: 'SC', precipitacao: { 1: 81, 2: 81, 3: 136, 4: 136 } },
  // SE
  { id: 84, nome: 'Aracaju', uf: 'SE', precipitacao: { 1: 88, 2: 88, 3: 147, 4: 147 } },
  // SP
  { id: 85, nome: 'Avare', uf: 'SP', precipitacao: { 1: 75, 2: 75, 3: 125, 4: 125 } },
  { id: 86, nome: 'Bauru', uf: 'SP', precipitacao: { 1: 90, 2: 90, 3: 150, 4: 150 } },
  { id: 87, nome: 'Campos do Jordao', uf: 'SP', precipitacao: { 1: 75, 2: 75, 3: 125, 4: 125 } },
  { id: 88, nome: 'Lins', uf: 'SP', precipitacao: { 1: 88, 2: 88, 3: 147, 4: 147 } },
  { id: 89, nome: 'Piracicaba', uf: 'SP', precipitacao: { 1: 88, 2: 88, 3: 147, 4: 147 } },
  { id: 90, nome: 'Santos', uf: 'SP', precipitacao: { 1: 54, 2: 54, 3: 90, 4: 90 } },
  { id: 91, nome: 'Santos - Itapema', uf: 'SP', precipitacao: { 1: 62, 2: 62, 3: 103, 4: 103 } },
  { id: 92, nome: 'Sao Carlos', uf: 'SP', precipitacao: { 1: 60, 2: 60, 3: 101, 4: 101 } },
  { id: 93, nome: 'Sao Paulo (Congonhas)', uf: 'SP', precipitacao: { 1: 81, 2: 81, 3: 136, 4: 136 } },
  { id: 94, nome: 'Sao Paulo (Mirante Santana)', uf: 'SP', precipitacao: { 1: 62, 2: 62, 3: 104, 4: 104 } },
  { id: 95, nome: 'Sao Simao', uf: 'SP', precipitacao: { 1: 72, 2: 72, 3: 121, 4: 121 } },
  { id: 96, nome: 'Taubate', uf: 'SP', precipitacao: { 1: 62, 2: 62, 3: 104, 4: 104 } },
  { id: 97, nome: 'Tupi', uf: 'SP', precipitacao: { 1: 70, 2: 70, 3: 116, 4: 116 } },
  { id: 98, nome: 'Ubatuba', uf: 'SP', precipitacao: { 1: 72, 2: 72, 3: 120, 4: 120 } },
];

export function getCidadeById(id: number): Cidade | undefined {
  return CIDADES.find((c) => c.id === id);
}

export function getCidadesAgrupadasPorUF(): Record<string, Cidade[]> {
  const grouped: Record<string, Cidade[]> = {};
  for (const cidade of CIDADES) {
    if (!grouped[cidade.uf]) {
      grouped[cidade.uf] = [];
    }
    grouped[cidade.uf].push(cidade);
  }
  return grouped;
}
