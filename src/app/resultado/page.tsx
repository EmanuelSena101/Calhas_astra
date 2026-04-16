'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo } from 'react';
import Link from 'next/link';
import { CardResultado } from '@/components/card-resultado';
import { calcular } from '@/lib/calcular-calhas';
import { calculoInputSchema } from '@/lib/schemas';
import type { CalculoResultado } from '@/types';

function ResultadoContent() {
  const searchParams = useSearchParams();

  const raw = {
    largura: searchParams.get('largura') ?? '',
    comprimento: searchParams.get('comprimento') ?? '',
    alturaDoTelhado: searchParams.get('alturaDoTelhado') ?? '',
    alturaDoBeiral: searchParams.get('alturaDoBeiral') ?? '',
    cidade: searchParams.get('cidade') ?? '',
    tipo: searchParams.get('tipo') ?? '',
  };

  const parsed = calculoInputSchema.safeParse(raw);

  const resultado: CalculoResultado | null = useMemo(() => {
    if (!parsed.success) return null;
    try {
      return calcular(parsed.data);
    } catch {
      return null;
    }
  }, [parsed]);

  if (!parsed.success) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-red-600">Dados invalidos</h1>
        <p className="text-muted-foreground">
          Os dados informados sao invalidos. Por favor, volte e preencha o formulario corretamente.
        </p>
        <ul className="list-disc list-inside text-sm text-red-500">
          {parsed.error.issues.map((err, i) => (
            <li key={i}>
              {err.path.join('.')}: {err.message}
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="inline-block mt-4 bg-[#0094D2] text-white px-6 py-2 rounded hover:bg-[#007AB8]"
        >
          Voltar ao formulario
        </Link>
      </div>
    );
  }

  if (!resultado) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-red-600">Erro no calculo</h1>
        <p className="text-muted-foreground">Ocorreu um erro inesperado ao calcular.</p>
        <Link
          href="/"
          className="inline-block mt-4 bg-[#0094D2] text-white px-6 py-2 rounded hover:bg-[#007AB8]"
        >
          Voltar ao formulario
        </Link>
      </div>
    );
  }

  const input = parsed.data;

  return (
    <CardResultado
      resultado={resultado}
      inputResumo={{
        largura: input.largura,
        comprimento: input.comprimento,
        alturaDoTelhado: input.alturaDoTelhado,
        alturaDoBeiral: input.alturaDoBeiral,
      }}
    />
  );
}

export default function ResultadoPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">Carregando resultado...</p>
        </div>
      }
    >
      <ResultadoContent />
    </Suspense>
  );
}
