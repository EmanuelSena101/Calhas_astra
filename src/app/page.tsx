import { Calculator, CloudRain, Ruler } from 'lucide-react';
import { AvisoVideo } from '@/components/aviso-video';
import { HeroBanner } from '@/components/hero-banner';

const steps = [
  {
    icon: Ruler,
    title: '1. Medidas do telhado',
    description:
      'Informe largura, comprimento, altura do telhado e altura da calha ate o chao.',
  },
  {
    icon: CloudRain,
    title: '2. Sua regiao',
    description:
      'Selecione sua cidade para considerar o volume de chuva local no dimensionamento.',
  },
  {
    icon: Calculator,
    title: '3. Calculo automatico',
    description:
      'O simulador retorna o kit completo com pecas, quantidades e link para a loja.',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <HeroBanner />

      {/* How it works */}
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#0094D2] font-bold">
              Como funciona
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              3 passos para montar seu sistema
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="group relative bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95"
              style={{ animationDelay: `${idx * 120}ms`, animationFillMode: 'both' }}
            >
              <div className="absolute top-0 left-5 right-5 h-1 rounded-b bg-gradient-to-r from-[#0094D2] to-[#00A3E4] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0094D2] to-[#00A3E4] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-3 font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <AvisoVideo />
    </div>
  );
}
