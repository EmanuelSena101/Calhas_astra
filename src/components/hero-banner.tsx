'use client';

import { Calculator, CloudRain, Droplets, Ruler } from 'lucide-react';

export function HeroBanner() {
  const handleDropletClick = () => {
    document
      .getElementById('antes-de-comecar')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0077AA] via-[#0094D2] to-[#00B8F0] text-white shadow-xl print:hidden">
      {/* Animated rain drops */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {Array.from({ length: 18 }).map((_, i) => {
          const left = (i * 5.5) % 100;
          const delay = (i % 9) * 0.4;
          const duration = 2.4 + (i % 5) * 0.5;
          return (
            <span
              key={i}
              className="absolute top-0 w-[2px] h-8 bg-white/40 rounded-full animate-astra-rain"
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      {/* Shimmer overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none animate-astra-shimmer opacity-40"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 p-8 md:p-12">
        <div className="md:col-span-3 space-y-4 animate-in fade-in slide-in-from-left-6 duration-700">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ring-1 ring-white/30">
            <Droplets className="w-3.5 h-3.5" />
            Sistema de calhas Astra
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">
            Simulador de Calhas
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-xl">
            Informe as dimensoes do seu telhado e descubra exatamente quais pecas
            voce precisa para montar um sistema de calhas eficiente e dimensionado
            para a chuva da sua regiao.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { icon: Ruler, label: 'Dimensoes' },
              { icon: CloudRain, label: 'Volume de chuva' },
              { icon: Calculator, label: 'Calculo automatico' },
            ].map((item, idx) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-sm px-3 py-1.5 rounded-full ring-1 ring-white/20 animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${200 + idx * 120}ms`, animationFillMode: 'both' }}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="md:col-span-2 relative flex items-center justify-center animate-in fade-in slide-in-from-right-6 duration-700">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-white/10 animate-astra-pulse-ring" />
            <div
              className="absolute inset-4 rounded-full bg-white/15 animate-astra-pulse-ring"
              style={{ animationDelay: '0.4s' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={handleDropletClick}
                aria-label="Ir para 'Antes de comecar'"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/95 text-[#0094D2] shadow-2xl flex items-center justify-center animate-astra-float cursor-pointer transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
              >
                <Droplets className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 w-full h-8 text-slate-50"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,80 480,0 720,30 C960,60 1200,80 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
