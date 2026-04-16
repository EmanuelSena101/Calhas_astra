'use client';

import { useRouter } from 'next/navigation';
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

  return (
    <div className="space-y-6 print:space-y-4">
      {/* Resumo */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-[#0094D2]">
            Calhas ({resultado.nomeKit})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Largura do telhado (A):</span>
              <span className="font-semibold">{inputResumo.largura} m</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Comprimento do beiral (B):</span>
              <span className="font-semibold">{inputResumo.comprimento} m</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Altura do telhado (C):</span>
              <span className="font-semibold">{inputResumo.alturaDoTelhado} m</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Altura da calha ate o chao (D):</span>
              <span className="font-semibold">{inputResumo.alturaDoBeiral} m</span>
            </div>
          </div>
          <div className="flex justify-between border-t pt-3">
            <span className="text-muted-foreground">Area total:</span>
            <span className="font-bold text-lg">
              {resultado.area} m<sup>2</sup>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Localidade:</span>
            <span className="font-bold text-lg">{resultado.localidade}</span>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de itens */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Itens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-bold">Item</TableHead>
                  <TableHead className="font-bold text-center">Codigo</TableHead>
                  <TableHead className="font-bold text-center">Quantidade</TableHead>
                  <TableHead className="font-bold text-center print:hidden">Link</TableHead>
                  <TableHead className="font-bold">Observacao</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resultado.itens.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.nome}</TableCell>
                    <TableCell className="text-center font-mono">{item.codigo}</TableCell>
                    <TableCell className="text-center font-bold text-lg">{item.quantidade}</TableCell>
                    <TableCell className="text-center print:hidden">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0094D2] hover:text-[#007AB8] font-semibold underline"
                      >
                        Loja
                      </a>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {item.observacao || ''}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Consideracoes */}
      <Card className="print:break-before-auto">
        <CardHeader>
          <CardTitle className="text-lg">Consideracoes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <p className="font-bold">1. Instalacao</p>
            <p className="text-muted-foreground">
              A Astra e fabricante dos produtos que formam o sistema de calha. Para instalacao,
              e necessario contratar um profissional especializado. Caso pretenda instalar a calha
              por conta propria, consulte o manual de instalacao.
            </p>
          </div>
          <div>
            <p className="font-bold">2. Garantia</p>
            <p className="text-muted-foreground">
              O uso de cola de PVC ou silicone, fora das especificacoes do Manual de Instalacao,
              anula a garantia do produto. Vedacao deve ser feita exclusivamente com o CAL/EMC
              (Emenda com vedacao).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Botoes */}
      <div className="flex flex-col sm:flex-row gap-3 print:hidden">
        <Button
          onClick={() => window.print()}
          variant="outline"
          className="flex-1 sm:flex-none"
        >
          Imprimir
        </Button>
        <Button
          onClick={() => router.push('/')}
          className="flex-1 sm:flex-none bg-[#0094D2] hover:bg-[#007AB8] text-white"
        >
          Nova simulacao
        </Button>
      </div>
    </div>
  );
}
