'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  CircleCheck,
  Info,
  Play,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormularioCalhas } from '@/components/formulario-calhas';

const points = [
  'Se o telhado apresenta mais de uma queda, realize o calculo uma vez para cada queda.',
  'Apos cada simulacao, some as quantidades de cada peca entre todas as quedas.',
  'O total obtido e a quantidade final para adquirir as pecas do sistema de calhas.',
  'Projetos complexos exigem auxilio tecnico para a validacao final do calculo.',
];

export function AvisoVideo() {
  const [playing, setPlaying] = useState(false);
  const [revealForm, setRevealForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (revealForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [revealForm]);

  return (
    <div className="space-y-8">
      <section
        id="antes-de-comecar"
        className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 scroll-mt-24"
      >
        {/* Accent stripe */}
        <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#0094D2] via-[#00A3E4] to-[#0094D2]" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left: copy + bullets */}
          <div className="lg:col-span-2 p-6 md:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#0094D2]/10 text-[#0094D2] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              <Info className="w-3.5 h-3.5" />
              Antes de comecar
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
              Telhados com mais de uma queda
            </h2>
            <p className="text-sm text-slate-600">
              Assista ao video e siga o passo a passo abaixo para calcular corretamente o
              sistema de calhas do seu projeto.
            </p>
            <ul className="space-y-2.5 pt-1">
              {points.map((p, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-slate-700 animate-in fade-in slide-in-from-left-3"
                  style={{
                    animationDelay: `${200 + idx * 100}ms`,
                    animationFillMode: 'both',
                    animationDuration: '500ms',
                  }}
                >
                  <CircleCheck className="w-4 h-4 mt-0.5 shrink-0 text-[#0094D2]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: video player */}
          <div className="lg:col-span-3 relative bg-slate-950 p-4 md:p-6 flex items-center">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              {!playing ? (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Reproduzir video explicativo"
                  className="group absolute inset-0 flex items-center justify-center"
                >
                  {/* Thumbnail */}
                  <img
                    src="https://img.youtube.com/vi/8WgzypzbQNQ/maxresdefault.jpg"
                    alt="Video explicativo: como calcular telhados com mais de uma queda"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  <div className="relative flex flex-col items-center gap-3 text-white">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-white/30 animate-astra-pulse-ring" />
                      <span className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-[#0094D2] shadow-xl transition-transform group-hover:scale-110">
                        <Play className="w-7 h-7 md:w-8 md:h-8 ml-1" fill="currentColor" />
                      </span>
                    </div>
                    <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">
                      Assistir video explicativo
                    </span>
                  </div>
                </button>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/8WgzypzbQNQ?autoplay=1&rel=0"
                  title="Video explicativo - Como calcular telhados com mais de uma queda"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        {!revealForm && (
          <div className="relative border-t border-slate-200 bg-slate-50/60 px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600 text-center sm:text-left">
              <span className="font-semibold text-slate-900">Tudo claro?</span>{' '}
              Agora e so preencher os dados do seu telhado.
            </div>
            <Button
              type="button"
              size="lg"
              onClick={() => setRevealForm(true)}
              className="group relative bg-gradient-to-r from-[#0094D2] to-[#00A3E4] hover:from-[#0077AA] hover:to-[#0094D2] text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Sparkles className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
              Comecar a simulacao
              <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5 animate-astra-float" />
            </Button>
          </div>
        )}
      </section>

      {revealForm && (
        <section
          ref={formRef}
          className="relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-500"
        >
          <div className="bg-gradient-to-r from-[#0094D2] to-[#00A3E4] px-6 md:px-8 py-5 text-white">
            <p className="text-xs uppercase tracking-widest font-bold opacity-90">
              Passo a passo
            </p>
            <h2 className="text-xl md:text-2xl font-extrabold">
              Preencha os dados do telhado
            </h2>
          </div>
          <div className="p-6 md:p-8">
            <FormularioCalhas />
          </div>
        </section>
      )}
    </div>
  );
}
