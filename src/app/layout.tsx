import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { ChevronRight, Droplets, Mail, Phone } from 'lucide-react';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Simulador de Calhas | Astra',
  description:
    'Simule a quantidade de pecas necessarias para o sistema de calhas Astra. Calculo baseado nas dimensoes do telhado e precipitacao pluviometrica da sua regiao.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-slate-50 flex flex-col`}
      >
        {/* Utility top bar */}
        <div className="hidden md:block bg-[#E30613] text-white text-xs print:hidden">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <a
                href="tel:08007076767"
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> 0800 707 6767
              </a>
              <a
                href="mailto:sac@astra-sa.com"
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> sac@astra-sa.com
              </a>
            </div>
            <span className="font-semibold tracking-wider uppercase">
              Conecte. Proteja. Construa.
            </span>
          </div>
        </div>

        {/* Main header */}
        <header className="bg-white border-b border-slate-200 shadow-sm print:shadow-none print:border-none">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/astra-logo.png"
                alt="Astra"
                width={140}
                height={56}
                priority
                className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:flex items-center gap-3 border-l border-slate-200 pl-3">
                <Droplets className="w-5 h-5 text-[#0094D2]" />
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    Sistema de Calhas
                  </div>
                  <div className="text-sm md:text-base font-bold text-slate-800">
                    Simulador Online
                  </div>
                </div>
              </div>
            </Link>
            <a
              href="https://loja.astra-sa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#0094D2] hover:text-[#0077AA] transition-colors group"
            >
              Ir para a loja Astra
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </header>

        {/* Blue nav / breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="bg-gradient-to-r from-[#0094D2] via-[#00A3E4] to-[#0094D2] text-white print:hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center text-sm gap-2">
            <Link href="/" className="hover:underline opacity-90 hover:opacity-100">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4 opacity-80" />
            <span className="font-semibold">Simulador de Calhas</span>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-auto bg-slate-900 text-slate-200 print:hidden">
          <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="inline-block bg-white rounded-md p-2">
                <Image
                  src="/astra-logo.png"
                  alt="Astra"
                  width={140}
                  height={56}
                  className="h-9 w-auto"
                />
              </div>
              <p className="text-sm text-slate-400 max-w-xs">
                Astra S/A Industria e Comercio. Solucoes inteligentes para construcao,
                hidraulica e aproveitamento de agua.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                Contato
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0094D2]" /> 0800 707 6767
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0094D2]" /> sac@astra-sa.com
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                Institucional
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a
                    href="https://loja.astra-sa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0094D2] transition-colors"
                  >
                    Loja Astra
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/8WgzypzbQNQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0094D2] transition-colors"
                  >
                    Video explicativo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
              <span>
                &copy; {new Date().getFullYear()} Astra S/A Industria e Comercio. Todos os
                direitos reservados.
              </span>
              <span>Simulador de Calhas - Versao 2.0</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
