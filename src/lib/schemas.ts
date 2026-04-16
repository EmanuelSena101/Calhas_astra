import { z } from 'zod';

function parseDecimalBR(val: unknown): number {
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    const normalized = val.replace(',', '.');
    const parsed = parseFloat(normalized);
    if (isNaN(parsed)) return NaN;
    return parsed;
  }
  return NaN;
}

const positiveNumber = z
  .union([z.string(), z.number()])
  .transform(parseDecimalBR)
  .pipe(z.number().positive('Valor deve ser maior que zero'));

export const calculoInputSchema = z.object({
  largura: positiveNumber,
  comprimento: positiveNumber,
  alturaDoTelhado: positiveNumber,
  alturaDoBeiral: positiveNumber,
  cidade: z.coerce.number().int().min(1).max(98),
  tipo: z.coerce.number().int().min(1).max(4) as z.ZodType<1 | 2 | 3 | 4>,
});

export type CalculoInputSchema = z.infer<typeof calculoInputSchema>;
