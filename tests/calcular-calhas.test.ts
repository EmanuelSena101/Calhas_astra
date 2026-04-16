import { describe, it, expect } from 'vitest';
import { calcular } from '@/lib/calcular-calhas';
import { CIDADES } from '@/lib/precipitacao';
import type { CalculoInput, TipoKit } from '@/types';

// Helper to build input with defaults
function makeInput(overrides: Partial<CalculoInput> = {}): CalculoInput {
  return {
    largura: 10,
    comprimento: 12,
    alturaDoTelhado: 3,
    alturaDoBeiral: 4,
    cidade: 1, // Rio Branco/AC
    tipo: 1 as TipoKit,
    ...overrides,
  };
}

// Helper to find a piece by codigo
function findItem(resultado: ReturnType<typeof calcular>, codigo: string) {
  return resultado.itens.find((i) => i.codigo === codigo);
}

describe('calcular-calhas', () => {
  // ============================================================
  // 1. One known case for each type (using Rio Branco/AC, cidade=1)
  // ============================================================

  describe('Tipo 1 - Barra 3m + bocal 75mm', () => {
    it('calculates correctly for Rio Branco', () => {
      const input = makeInput({ tipo: 1, cidade: 1 });
      // area = round((10 + 3/2) * 12) = round(138) = 138
      // precipitacao tipo 1 Rio Branco = 77
      // resto = 4 - floor(4/3)*3 = 4 - 3 = 1.0
      const result = calcular(input);

      expect(result.area).toBe(138);
      expect(result.localidade).toBe('Rio Branco/AC');

      // A = ceil(12/3) = 4 (barras 3m)
      expect(findItem(result, 'CAL/CK')?.quantidade).toBe(4);
      // B = ceil(138/77) = ceil(1.792) = 2 (bocais)
      expect(findItem(result, 'CAL/BOC')?.quantidade).toBe(2);
      // antiFolha = B = 2
      expect(findItem(result, 'CAL/AF')?.quantidade).toBe(2);
      // emenda = A - 1 = 3
      expect(findItem(result, 'CAL/EMC')?.quantidade).toBe(3);
      // suporte = A * 5 = 20
      expect(findItem(result, 'CAL/SU')?.quantidade).toBe(20);
      // D (conectores) = (ceil(4/3) - 1) * 2 = (2-1)*2 = 2
      expect(findItem(result, 'CAL/CN')?.quantidade).toBe(2);
      // E (abraçadeiras) = ceil(4/1.5) * 2 = 3 * 2 = 6
      expect(findItem(result, 'CAL/ABC')?.quantidade).toBe(6);
      // C (condutores): resto=1.0, so resto > 0.5:
      // C = ceil((round(4/3) + 1/3) * 2) = ceil((1 + 0.333) * 2) = ceil(2.666) = 3
      expect(findItem(result, 'CAL/CDT')?.quantidade).toBe(3);
      // cabeceira = 1
      expect(findItem(result, 'CAL/CAB')?.quantidade).toBe(1);
    });
  });

  describe('Tipo 2 - Barras 3m+1m + bocal 75mm', () => {
    it('calculates correctly for Rio Branco', () => {
      const input = makeInput({ tipo: 2, cidade: 1 });
      const result = calcular(input);

      expect(result.area).toBe(138);

      // A = floor(12/3) = 4 (barras 3m)
      expect(findItem(result, 'CAL/CK')?.quantidade).toBe(4);
      // B = ceil(12 - 4*3) = ceil(0) = 0 (barras 1m)
      expect(findItem(result, 'CAL/CK1')?.quantidade).toBe(0);
      // C = ceil(138/77) = 2 (bocais)
      expect(findItem(result, 'CAL/BOC')?.quantidade).toBe(2);
      // antiFolha = C = 2
      expect(findItem(result, 'CAL/AF')?.quantidade).toBe(2);
      // emenda = (4+0) - 1 = 3
      expect(findItem(result, 'CAL/EMC')?.quantidade).toBe(3);
      // suporte = 4*5 + 0*2 = 20
      expect(findItem(result, 'CAL/SU')?.quantidade).toBe(20);
      // E (conectores) = (ceil(4/3)-1)*2 = 2
      expect(findItem(result, 'CAL/CN')?.quantidade).toBe(2);
      // F (abraçadeiras) = ceil(4/1.5)*2 = 6
      expect(findItem(result, 'CAL/ABC')?.quantidade).toBe(6);
      // D (condutores): resto=1.0 -> ceil((round(4/3)+1/3)*2) = ceil((1+0.333)*2) = 3
      expect(findItem(result, 'CAL/CDT')?.quantidade).toBe(3);
      // cabeceira = 1
      expect(findItem(result, 'CAL/CAB')?.quantidade).toBe(1);
    });
  });

  describe('Tipo 3 - Barra 3m + bocal 100mm', () => {
    it('calculates correctly for Rio Branco', () => {
      const input = makeInput({ tipo: 3, cidade: 1 });
      // precipitacao tipo 3 Rio Branco = 129
      const result = calcular(input);

      expect(result.area).toBe(138);

      // A = ceil(12/3) = 4
      expect(findItem(result, 'CAL/CK')?.quantidade).toBe(4);
      // B = ceil(138/129) = ceil(1.069) = 2
      expect(findItem(result, 'CAL/B100')?.quantidade).toBe(2);
      // antiFolha = B = 2
      expect(findItem(result, 'CAL/AF')?.quantidade).toBe(2);
      // emenda = 4-1 = 3
      expect(findItem(result, 'CAL/EMC')?.quantidade).toBe(3);
      // suporte = 4*5 = 20
      expect(findItem(result, 'CAL/SU')?.quantidade).toBe(20);
      // cabeceira = 1
      expect(findItem(result, 'CAL/CAB')?.quantidade).toBe(1);
    });
  });

  describe('Tipo 4 - Barras 3m+1m + bocal 100mm', () => {
    it('calculates correctly for Rio Branco', () => {
      const input = makeInput({ tipo: 4, cidade: 1 });
      // precipitacao tipo 4 Rio Branco = 129
      const result = calcular(input);

      expect(result.area).toBe(138);

      // A = floor(12/3) = 4
      expect(findItem(result, 'CAL/CK')?.quantidade).toBe(4);
      // B = ceil(12 - 4*3) = 0
      expect(findItem(result, 'CAL/CK1')?.quantidade).toBe(0);
      // C = ceil(138/129) = 2
      expect(findItem(result, 'CAL/B100')?.quantidade).toBe(2);
      // antiFolha = C = 2
      expect(findItem(result, 'CAL/AF')?.quantidade).toBe(2);
      // emenda = (4+0)-1 = 3
      expect(findItem(result, 'CAL/EMC')?.quantidade).toBe(3);
      // suporte = 4*5 + 0*2 = 20
      expect(findItem(result, 'CAL/SU')?.quantidade).toBe(20);
      // cabeceira = 1
      expect(findItem(result, 'CAL/CAB')?.quantidade).toBe(1);
    });
  });

  // ============================================================
  // 2. Edge cases for conductor `resto` logic
  // ============================================================

  describe('Edge cases for conductor (resto branches)', () => {
    // alturaDoBeiral = 3 -> resto = 3 - floor(3/3)*3 = 3 - 3 = 0
    it('resto = 0 when alturaDoBeiral = 3', () => {
      const input = makeInput({ alturaDoBeiral: 3 });
      const result = calcular(input);
      // C = (3/3) * B = 1 * B
      // B = ceil(138/77) = 2
      // C = 2
      expect(findItem(result, 'CAL/CDT')?.quantidade).toBe(2);
    });

    // alturaDoBeiral = 3.4 -> resto = 3.4 - floor(3.4/3)*3 = 3.4 - 3 = 0.4
    // 0 < 0.4 <= 0.5 -> else branch
    it('resto = 0.4 (else branch) when alturaDoBeiral = 3.4', () => {
      const input = makeInput({ alturaDoBeiral: 3.4 });
      const result = calcular(input);
      // C = ceil((3.4/3 + 0.17) * B) = ceil((1.1333 + 0.17) * 2) = ceil(1.3033 * 2) = ceil(2.6066) = 3
      expect(findItem(result, 'CAL/CDT')?.quantidade).toBe(3);
    });

    // alturaDoBeiral = 3.6 -> resto = 3.6 - 3 = 0.6
    // 0.5 < 0.6 -> resto > 0.5 branch
    it('resto = 0.6 (resto > 0.5) when alturaDoBeiral = 3.6', () => {
      const input = makeInput({ alturaDoBeiral: 3.6 });
      const result = calcular(input);
      // C = ceil((round(3.6/3) + 1/3) * B) = ceil((round(1.2) + 0.333) * 2) = ceil((1 + 0.333) * 2) = ceil(2.666) = 3
      expect(findItem(result, 'CAL/CDT')?.quantidade).toBe(3);
    });

    // alturaDoBeiral = 4.1 -> resto = 4.1 - floor(4.1/3)*3 = 4.1 - 3 = 1.1
    // 1 < 1.1 -> resto > 1 branch
    it('resto = 1.1 (resto > 1) when alturaDoBeiral = 4.1', () => {
      const input = makeInput({ alturaDoBeiral: 4.1 });
      const result = calcular(input);
      // C = ceil((round(4.1/3) + 0.5) * B) = ceil((round(1.3666) + 0.5) * 2) = ceil((1 + 0.5) * 2) = ceil(3) = 3
      expect(findItem(result, 'CAL/CDT')?.quantidade).toBe(3);
    });

    // alturaDoBeiral = 4.6 -> resto = 4.6 - floor(4.6/3)*3 = 4.6 - 3 = 1.6
    // 1.5 < 1.6 -> resto > 1.5 branch
    it('resto = 1.6 (resto > 1.5) when alturaDoBeiral = 4.6', () => {
      const input = makeInput({ alturaDoBeiral: 4.6 });
      const result = calcular(input);
      // C = ceil(round(4.6/3) * B) = ceil(round(1.5333) * 2) = ceil(2 * 2) = 4
      expect(findItem(result, 'CAL/CDT')?.quantidade).toBe(4);
    });
  });

  // ============================================================
  // 3. Emenda cannot be negative when A = 1
  // ============================================================

  describe('emenda non-negative', () => {
    it('emenda is 0 when comprimento produces A = 1 (tipo 1)', () => {
      const input = makeInput({ comprimento: 2, tipo: 1 });
      const result = calcular(input);
      // A = ceil(2/3) = 1
      // emenda = max(0, 1-1) = 0
      expect(findItem(result, 'CAL/EMC')?.quantidade).toBe(0);
    });

    it('emenda is 0 when comprimento produces A+B = 1 (tipo 2)', () => {
      const input = makeInput({ comprimento: 1, tipo: 2 });
      const result = calcular(input);
      // A = floor(1/3) = 0
      // B = ceil(1 - 0) = 1
      // emenda = max(0, 0+1-1) = 0
      expect(findItem(result, 'CAL/EMC')?.quantidade).toBe(0);
    });
  });

  // ============================================================
  // 4. Precipitation data verification (5 cities × 4 types)
  // ============================================================

  describe('Precipitation data matches ASP original', () => {
    const expectedPrecipitation: Array<{
      cidadeId: number;
      nome: string;
      values: Record<TipoKit, number>;
    }> = [
      // Rio Branco (id=1)
      { cidadeId: 1, nome: 'Rio Branco', values: { 1: 77, 2: 77, 3: 129, 4: 129 } },
      // Belo Horizonte (id=20)
      { cidadeId: 20, nome: 'Belo Horizonte', values: { 1: 47, 2: 47, 3: 79, 4: 79 } },
      // Curitiba (id=40)
      { cidadeId: 40, nome: 'Curitiba', values: { 1: 52, 2: 52, 3: 88, 4: 88 } },
      // São Paulo Congonhas (id=93)
      { cidadeId: 93, nome: 'Sao Paulo (Congonhas)', values: { 1: 81, 2: 81, 3: 136, 4: 136 } },
      // Porto Alegre (id=74)
      { cidadeId: 74, nome: 'Porto Alegre', values: { 1: 73, 2: 73, 3: 123, 4: 123 } },
    ];

    for (const expected of expectedPrecipitation) {
      it(`${expected.nome} has correct precipitation for all 4 types`, () => {
        const cidade = CIDADES.find((c) => c.id === expected.cidadeId);
        expect(cidade).toBeDefined();
        expect(cidade!.precipitacao).toEqual(expected.values);
      });
    }
  });

  // ============================================================
  // 5. Acceptance test case from prompt
  // ============================================================

  describe('Acceptance test case', () => {
    it('matches expected result for SP Congonhas tipo 1', () => {
      const input = makeInput({
        largura: 10,
        comprimento: 12,
        alturaDoTelhado: 3,
        alturaDoBeiral: 4,
        cidade: 93, // São Paulo (Congonhas)
        tipo: 1,
      });
      const result = calcular(input);

      // area = round((10 + 1.5) * 12) = 138
      expect(result.area).toBe(138);
      expect(result.localidade).toBe('Sao Paulo (Congonhas)/SP');

      // precipitacao = 81
      // A = ceil(12/3) = 4
      expect(findItem(result, 'CAL/CK')?.quantidade).toBe(4);
      // B = ceil(138/81) = ceil(1.703) = 2
      expect(findItem(result, 'CAL/BOC')?.quantidade).toBe(2);
    });
  });

  // ============================================================
  // 6. Total cities count
  // ============================================================

  it('has exactly 98 cities', () => {
    expect(CIDADES).toHaveLength(98);
  });
});
