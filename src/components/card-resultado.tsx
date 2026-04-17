'use client';

import { useRouter } from 'next/navigation';
import {
  BadgeCheck,
  ClipboardCheck,
  ExternalLink,
  Info,
  MapPin,
  Package,
  Printer,
  RefreshCw,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { CalculoResultado } from '@/types';

type CardResultadoProps = {
  resultado: CalculoResultado;
  inputResumo: {
    largura: number;
    comprimento: number;
    alturaDoTelhado: number;
    alturaDoBeiral: number;
  };
};

export function CardResultado({ resultado, inputResumo }: CardResultadoProps) {
  const router = useRouter();

  const totalItens = resultado.itens.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <div className="space-y-6 print:space-y-4">
      {/* Success banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0077AA] via-[#0094D2] to-[#00B8F0] text-white p-6 md:p-8 shadow-xl print:shadow-none print:bg-white print:text-slate-900 animate-in fade-in slide-in-from-top-4 duration-500">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none animate-astra-shimmer opacity-30 print:hidden"
        />
        <div className="relative flex items-start gap-4">
          <div className="shrink-0 w-14 h-14 rounded-full bg-white/20 ring-2 ring-white/30 flex items-center justify-center backdrop-blur-sm animate-astra-float print:bg-[#0094D2]/10">
            <BadgeCheck className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest font-bold opacity-90">
              Resultado da simulacao
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold drop-shadow">
              {resultado.nomeKit}
            </h1>
            <p className="mt-1 text-white/90 text-sm md:text-base">
              Seu sistema de calhas foi dimensionado com base nas medidas informadas e
              no volume de chuva da sua regiao.
            </p>
          </div>
        </div>

        {/* KPIs */}
        <div className="relative mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          <KpiTile icon={Ruler} label="Area do telhado" value={`${resultado.area} m²`} />
          <KpiTile icon={MapPin} label="Localidade" value={resultado.localidade} />
          <KpiTile
            icon={Package}
            label="Pecas no total"
            value={`${totalItens} un.`}
          />
        </div>
      </div>

      {/* Resumo dos dados informados */}
      <Card
        className="border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-500"
        style={{ animationDelay: '100ms', animationFillMode: 'both' }}
      >
        <CardHeader className="flex flex-row items-center gap-2 border-b pb-3">
          <ClipboardCheck className="w-5 h-5 text-[#0094D2]" />
          <CardTitle className="text-base md:text-lg text-slate-800">
            Dados informados
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <ResumoLinha badge="A" label="Largura do telhado" value={`${inputResumo.largura} m`} />
            <ResumoLinha badge="B" label="Comprimento do beiral" value={`${inputResumo.comprimento} m`} />
            <ResumoLinha badge="C" label="Altura do telhado" value={`${inputResumo.alturaDoTelhado} m`} />
            <ResumoLinha badge="D" label="Altura da calha ate o chao" value={`${inputResumo.alturaDoBeiral} m`} />
          </div>
        </CardContent>
      </Card>

      {/* Itens */}
      <Card
        className="border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-500"
        style={{ animationDelay: '200ms', animationFillMode: 'both' }}
      >
        <CardHeader className="flex flex-row items-center gap-2 border-b pb-3">
          <Sparkles className="w-5 h-5 text-[#FF6600]" />
          <CardTitle className="text-base md:text-lg text-slate-800">
            Pecas necessarias
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50 hover:bg-slate-50">
                  <TableHead className="font-bold text-slate-700">Item</TableHead>
                  <TableHead className="font-bold text-center text-slate-700">Codigo</TableHead>
                  <TableHead className="font-bold text-center text-slate-700">Qtd</TableHead>
                  <TableHead className="font-bold text-center text-slate-700 print:hidden">
                    Loja
                  </TableHead>
                  <TableHead className="font-bold text-slate-700">Observacao</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resultado.itens.map((item, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-[#0094D2]/5 transition-colors animate-in fade-in slide-in-from-left-2 duration-300"
                    style={{
                      animationDelay: `${250 + index * 50}ms`,
                      animationFillMode: 'both',
                    }}
                  >
                    <TableCell className="font-medium text-slate-800">
                      {item.nome}
                    </TableCell>
                    <TableCell className="text-center font-mono text-xs text-slate-600">
                      {item.codigo}
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center min-w-10 h-8 px-2 rounded-full bg-gradient-to-br from-[#0094D2] to-[#00A3E4] text-white font-bold text-sm shadow-sm">
                        {item.quantidade}
                      </span>
                    </TableCell>
                    <TableCell className="text-center print:hidden">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#0094D2] hover:text-[#0077AA] font-semibold text-sm group"
                      >
                        Loja
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </TableCell>
                    <TableCell className="text-slate-500 text-xs">
                      {item.observacao || '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Consideracoes */}
      <Card
        className="border-slate-200 shadow-sm print:break-before-auto animate-in fade-in slide-in-from-bottom-3 duration-500"
        style={{ animationDelay: '300ms', animationFillMode: 'both' }}
      >
        <CardHeader className="flex flex-row items-center gap-2 border-b pb-3">
          <Info className="w-5 h-5 text-[#0094D2]" />
          <CardTitle className="text-base md:text-lg text-slate-800">
            Consideracoes importantes
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/60">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <Wrench className="w-4 h-4 text-[#0094D2]" />
              Instalacao
            </div>
            <p className="text-slate-600 mt-2 leading-relaxed">
              A Astra e fabricante dos produtos que formam o sistema de calha. Para
              instalacao, contrate um profissional especializado ou consulte o manual de
              instalacao caso pretenda fazer por conta propria.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50/60">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-[#0094D2]" />
              Garantia
            </div>
            <p className="text-slate-600 mt-2 leading-relaxed">
              O uso de cola de PVC ou silicone fora das especificacoes do Manual de
              Instalacao anula a garantia. Vedacao exclusiva com CAL/EMC (Emenda com
              vedacao).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Botoes */}
      <div className="flex flex-col sm:flex-row gap-3 print:hidden">
        <Button
          onClick={() => window.print()}
          variant="outline"
          className="flex-1 sm:flex-none group"
        >
          <Printer className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
          Imprimir
        </Button>
        <Button
          onClick={() => router.push('/')}
          className="flex-1 sm:flex-none bg-gradient-to-r from-[#0094D2] to-[#00A3E4] hover:from-[#0077AA] hover:to-[#0094D2] text-white shadow-md hover:shadow-lg transition-all group"
        >
          <RefreshCw className="w-4 h-4 mr-2 transition-transform group-hover:rotate-180 duration-500" />
          Nova simulacao
        </Button>
      </div>
    </div>
  );
}

function KpiTile({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white/15 backdrop-blur-sm rounded-lg p-3 ring-1 ring-white/20 print:bg-slate-50 print:ring-slate-200">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-90">
        <Icon className="w-3.5 h-3.5" />
        {label}
      </div>
      <div className="mt-1 text-lg md:text-xl font-extrabold print:text-slate-900">
        {value}
      </div>
    </div>
  );
}

function ResumoLinha({
  badge,
  label,
  value,
}: {
  badge: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2 border border-slate-200">
      <div className="flex items-center gap-2 min-w-0">
        <span className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#FF6600] to-[#FF8533] text-white text-xs font-bold flex items-center justify-center shadow-sm">
          {badge}
        </span>
        <span className="text-slate-600 truncate">{label}</span>
      </div>
      <span className="font-bold text-slate-900">{value}</span>
    </div>
  );
}
