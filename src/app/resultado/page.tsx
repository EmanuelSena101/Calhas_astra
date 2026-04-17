'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, CircleAlert, LoaderCircle } from 'lucide-react';
import { CardResultado } from '@/components/card-resultado';
import { calcular } from '@/lib/calcular-calhas';
import { calculoInputSchema } from '@/lib/schemas';
import type { CalculoResultado } from '@/types';

function ErrorState({
  title,
  description,
  issues,
}: {
  title: string;
  description: string;
  issues?: ReadonlyArray<{ path: ReadonlyArray<PropertyKey>; message: string }>;
}) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-red-200 shadow-sm p-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
          <CircleAlert className="w-6 h-6" />
        </div>
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold text-red-700">{title}</h1>
          <p className="text-slate-600">{description}</p>
          {issues && issues.length > 0 && (
            <ul className="list-disc list-inside text-sm text-red-500 space-y-1">
              {issues.map((err, i) => (
                <li key={i}>
                  {err.path.map(String).join('.')}: {err.message}
                </li>
              ))}
            </ul>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-2 bg-gradient-to-r from-[#0094D2] to-[#00A3E4] hover:from-[#0077AA] hover:to-[#0094D2] text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao formulario
          </Link>
        </div>
      </div>
    </div>
  );
}

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
      <ErrorState
        title="Dados invalidos"
        description="Os dados informados sao invalidos. Volte e preencha o formulario corretamente."
        issues={parsed.error.issues}
      />
    );
  }

  if (!resultado) {
    return (
      <ErrorState
        title="Erro no calculo"
        description="Ocorreu um erro inesperado ao calcular. Verifique os dados e tente novamente."
      />
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
        <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-500">
          <LoaderCircle className="w-10 h-10 animate-spin text-[#0094D2]" />
          <p className="text-sm">Carregando resultado...</p>
        </div>
      }
    >
      <ResultadoContent />
    </Suspense>
  );
}
