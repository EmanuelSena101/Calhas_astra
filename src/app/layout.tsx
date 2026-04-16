import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        {/* Header */}
        <header className="bg-white border-b shadow-sm print:shadow-none">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
            <div className="text-2xl font-bold text-[#0094D2]">ASTRA</div>
            <div className="h-6 w-px bg-gray-300" />
            <div className="text-sm text-muted-foreground">Simulador de Calhas</div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t mt-auto print:hidden">
          <div className="max-w-4xl mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
            Astra S/A Industria e Comercio - Simulador de Calhas
          </div>
        </footer>
      </body>
    </html>
  );
}
