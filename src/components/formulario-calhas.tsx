'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getCidadesAgrupadasPorUF } from '@/lib/precipitacao';

const UF_ORDER = [
  'AC', 'AL', 'AM', 'BA', 'CE', 'ES', 'PE', 'GO', 'MA', 'MG',
  'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO',
  'RS', 'SC', 'SE', 'SP',
];

const UF_NOMES: Record<string, string> = {
  AC: 'Acre', AL: 'Alagoas', AM: 'Amazonas', BA: 'Bahia', CE: 'Ceara',
  ES: 'Espirito Santo', GO: 'Goias', MA: 'Maranhao', MG: 'Minas Gerais',
  MS: 'Mato Grosso do Sul', MT: 'Mato Grosso', PA: 'Para', PB: 'Paraiba',
  PE: 'Pernambuco', PI: 'Piaui', PR: 'Parana', RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte', RO: 'Rondonia', RS: 'Rio Grande do Sul',
  SC: 'Santa Catarina', SE: 'Sergipe', SP: 'Sao Paulo',
};

type FormErrors = Record<string, string>;

export function FormularioCalhas() {
  const router = useRouter();
  const cidadesAgrupadas = getCidadesAgrupadasPorUF();
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const newErrors: FormErrors = {};

    const fields = ['largura', 'comprimento', 'alturaDoTelhado', 'alturaDoBeiral'];
    for (const field of fields) {
      const val = formData.get(field) as string;
      if (!val || val.trim() === '') {
        newErrors[field] = 'Campo obrigatorio';
      } else {
        const num = parseFloat(val.replace(',', '.'));
        if (isNaN(num) || num <= 0) {
          newErrors[field] = 'Valor deve ser um numero maior que zero';
        }
      }
    }

    const cidade = formData.get('cidade') as string;
    if (!cidade) {
      newErrors.cidade = 'Selecione uma cidade';
    }

    const tipo = formData.get('tipo') as string;
    if (!tipo) {
      newErrors.tipo = 'Selecione um tipo de kit';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const params = new URLSearchParams();
    params.set('largura', (formData.get('largura') as string).replace(',', '.'));
    params.set('comprimento', (formData.get('comprimento') as string).replace(',', '.'));
    params.set('alturaDoTelhado', (formData.get('alturaDoTelhado') as string).replace(',', '.'));
    params.set('alturaDoBeiral', (formData.get('alturaDoBeiral') as string).replace(',', '.'));
    params.set('cidade', cidade);
    params.set('tipo', tipo);

    router.push(`/resultado?${params.toString()}`);
  }

  // Deduplicate UF_ORDER (PE appears twice in original ASP)
  const seenUFs = new Set<string>();
  const uniqueUFs = UF_ORDER.filter((uf) => {
    if (seenUFs.has(uf)) return false;
    seenUFs.add(uf);
    return true;
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Dimensoes do telhado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* A - Largura */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6600] text-white font-bold text-lg shrink-0">
              A
            </div>
            <Label htmlFor="largura" className="text-base font-semibold">
              Largura do telhado (m)
            </Label>
          </div>
          <Input
            id="largura"
            name="largura"
            type="text"
            inputMode="decimal"
            placeholder="Ex: 10"
            aria-describedby={errors.largura ? 'largura-error' : undefined}
            className={errors.largura ? 'border-red-500' : ''}
          />
          {errors.largura && (
            <p id="largura-error" className="text-sm text-red-500">
              {errors.largura}
            </p>
          )}
        </div>

        {/* B - Comprimento */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6600] text-white font-bold text-lg shrink-0">
              B
            </div>
            <Label htmlFor="comprimento" className="text-base font-semibold">
              Comprimento do beiral (m)
            </Label>
          </div>
          <Input
            id="comprimento"
            name="comprimento"
            type="text"
            inputMode="decimal"
            placeholder="Ex: 12"
            aria-describedby={errors.comprimento ? 'comprimento-error' : undefined}
            className={errors.comprimento ? 'border-red-500' : ''}
          />
          {errors.comprimento && (
            <p id="comprimento-error" className="text-sm text-red-500">
              {errors.comprimento}
            </p>
          )}
        </div>

        {/* C - Altura do Telhado */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6600] text-white font-bold text-lg shrink-0">
              C
            </div>
            <Label htmlFor="alturaDoTelhado" className="text-base font-semibold">
              Altura do telhado (m)
            </Label>
          </div>
          <Input
            id="alturaDoTelhado"
            name="alturaDoTelhado"
            type="text"
            inputMode="decimal"
            placeholder="Ex: 3"
            aria-describedby={errors.alturaDoTelhado ? 'alturaDoTelhado-error' : undefined}
            className={errors.alturaDoTelhado ? 'border-red-500' : ''}
          />
          {errors.alturaDoTelhado && (
            <p id="alturaDoTelhado-error" className="text-sm text-red-500">
              {errors.alturaDoTelhado}
            </p>
          )}
        </div>

        {/* D - Altura do Beiral */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6600] text-white font-bold text-lg shrink-0">
              D
            </div>
            <Label htmlFor="alturaDoBeiral" className="text-base font-semibold">
              Altura da calha ate o chao (m)
            </Label>
          </div>
          <Input
            id="alturaDoBeiral"
            name="alturaDoBeiral"
            type="text"
            inputMode="decimal"
            placeholder="Ex: 4"
            aria-describedby={errors.alturaDoBeiral ? 'alturaDoBeiral-error' : undefined}
            className={errors.alturaDoBeiral ? 'border-red-500' : ''}
          />
          {errors.alturaDoBeiral && (
            <p id="alturaDoBeiral-error" className="text-sm text-red-500">
              {errors.alturaDoBeiral}
            </p>
          )}
        </div>
      </div>

      {/* Cidade */}
      <div className="space-y-2">
        <Label htmlFor="cidade" className="text-base font-semibold">
          Cidade
        </Label>
        <p className="text-sm text-muted-foreground">
          Para calculo do volume de chuva de sua regiao, escolha a sua cidade ou a mais proxima da sua localidade.
          Esta informacao sera importante para definicao do numero de pontos de descida de agua com base na volumetria de chuva da regiao.
        </p>
        <Select name="cidade">
          <SelectTrigger id="cidade" className={errors.cidade ? 'border-red-500' : ''}>
            <SelectValue placeholder="Selecione a cidade" />
          </SelectTrigger>
          <SelectContent>
            {uniqueUFs.map((uf) => {
              const cidades = cidadesAgrupadas[uf];
              if (!cidades || cidades.length === 0) return null;
              return (
                <SelectGroup key={uf}>
                  <SelectLabel>{UF_NOMES[uf] || uf} ({uf})</SelectLabel>
                  {cidades.map((cidade) => (
                    <SelectItem key={cidade.id} value={String(cidade.id)}>
                      {cidade.nome}
                    </SelectItem>
                  ))}
                </SelectGroup>
              );
            })}
          </SelectContent>
        </Select>
        {errors.cidade && (
          <p className="text-sm text-red-500">{errors.cidade}</p>
        )}
      </div>

      {/* Tipo de kit */}
      <div className="space-y-2">
        <Label htmlFor="tipo" className="text-base font-semibold">
          Tipo de kit
        </Label>
        <Select name="tipo">
          <SelectTrigger id="tipo" className={errors.tipo ? 'border-red-500' : ''}>
            <SelectValue placeholder="Selecione o tipo de kit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Tipo 1 - Barra 3 m e bocal de saida 75 mm</SelectItem>
            <SelectItem value="2">Tipo 2 - Barras 3 m e 1 m e bocal de saida 75 mm</SelectItem>
            <SelectItem value="3">Tipo 3 - Barra 3 m e bocal de saida 100 mm</SelectItem>
            <SelectItem value="4">Tipo 4 - Barras 3 m e 1 m e bocal de saida 100 mm</SelectItem>
          </SelectContent>
        </Select>
        {errors.tipo && (
          <p className="text-sm text-red-500">{errors.tipo}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-[#0094D2] hover:bg-[#007AB8] text-white text-lg px-8 py-3"
        size="lg"
      >
        {isSubmitting ? 'Calculando...' : 'Calcular'}
      </Button>
    </form>
  );
}
