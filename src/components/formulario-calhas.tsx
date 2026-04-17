'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  Building2,
  LoaderCircle,
  MapPin,
  Package,
  Ruler,
} from 'lucide-react';
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

type DimensionFieldProps = {
  badge: string;
  label: string;
  name: string;
  placeholder: string;
  error?: string;
  delay: number;
};

function DimensionField({ badge, label, name, placeholder, error, delay }: DimensionFieldProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className="space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-500"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`flex items-center justify-center w-9 h-9 rounded-lg font-mono font-bold text-sm shrink-0 border-2 transition-all duration-200 ${
            focused
              ? 'bg-[#0094D2] text-white border-[#0094D2] shadow-md scale-105'
              : 'bg-white text-[#0094D2] border-[#0094D2]/30'
          }`}
        >
          {badge}
        </div>
        <Label htmlFor={name} className="text-sm md:text-base font-semibold text-slate-800">
          {label}
        </Label>
      </div>
      <div className="relative">
        <Ruler
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors ${
            focused ? 'text-[#0094D2]' : 'text-slate-400'
          }`}
        />
        <Input
          id={name}
          name={name}
          type="text"
          inputMode="decimal"
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`h-11 pl-9 text-base transition-all ${
            error
              ? 'border-red-500 focus-visible:ring-red-400'
              : 'focus-visible:ring-[#0094D2]/50 focus-visible:border-[#0094D2]'
          }`}
        />
      </div>
      {error && (
        <p
          id={`${name}-error`}
          className="text-sm text-red-500 animate-in fade-in slide-in-from-top-1 duration-200"
        >
          {error}
        </p>
      )}
    </div>
  );
}

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

  const seenUFs = new Set<string>();
  const uniqueUFs = UF_ORDER.filter((uf) => {
    if (seenUFs.has(uf)) return false;
    seenUFs.add(uf);
    return true;
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-4 text-[#0094D2]">
          <Building2 className="w-5 h-5" />
          <span className="text-xs uppercase tracking-widest font-bold">
            Dimensoes do telhado
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DimensionField
            badge="A"
            label="Largura do telhado (m)"
            name="largura"
            placeholder="Ex: 10"
            error={errors.largura}
            delay={60}
          />
          <DimensionField
            badge="B"
            label="Comprimento do beiral (m)"
            name="comprimento"
            placeholder="Ex: 12"
            error={errors.comprimento}
            delay={140}
          />
          <DimensionField
            badge="C"
            label="Altura do telhado (m)"
            name="alturaDoTelhado"
            placeholder="Ex: 3"
            error={errors.alturaDoTelhado}
            delay={220}
          />
          <DimensionField
            badge="D"
            label="Altura da calha ate o chao (m)"
            name="alturaDoBeiral"
            placeholder="Ex: 4"
            error={errors.alturaDoBeiral}
            delay={300}
          />
        </div>
      </div>

      {/* Cidade */}
      <div
        className="space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-500"
        style={{ animationDelay: '380ms', animationFillMode: 'both' }}
      >
        <div className="flex items-center gap-2 text-[#0094D2]">
          <MapPin className="w-5 h-5" />
          <Label htmlFor="cidade" className="text-base font-semibold text-slate-800">
            Cidade
          </Label>
        </div>
        <p className="text-sm text-slate-600">
          Para calculo do volume de chuva da sua regiao, escolha a sua cidade ou a mais
          proxima da sua localidade. Esta informacao define o numero de pontos de descida
          de agua com base na volumetria de chuva da regiao.
        </p>
        <Select name="cidade">
          <SelectTrigger
            id="cidade"
            className={`w-full data-[size=default]:h-11 px-3 text-base transition-colors ${
              errors.cidade ? 'border-red-500' : 'focus:border-[#0094D2]'
            }`}
          >
            <SelectValue placeholder="Selecione a cidade" />
          </SelectTrigger>
          <SelectContent>
            {uniqueUFs.map((uf) => {
              const cidades = cidadesAgrupadas[uf];
              if (!cidades || cidades.length === 0) return null;
              return (
                <SelectGroup key={uf}>
                  <SelectLabel>
                    {UF_NOMES[uf] || uf} ({uf})
                  </SelectLabel>
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
          <p className="text-sm text-red-500 animate-in fade-in slide-in-from-top-1 duration-200">
            {errors.cidade}
          </p>
        )}
      </div>

      {/* Tipo de kit */}
      <div
        className="space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-500"
        style={{ animationDelay: '460ms', animationFillMode: 'both' }}
      >
        <div className="flex items-center gap-2 text-[#0094D2]">
          <Package className="w-5 h-5" />
          <Label htmlFor="tipo" className="text-base font-semibold text-slate-800">
            Tipo de kit
          </Label>
        </div>
        <Select name="tipo">
          <SelectTrigger
            id="tipo"
            className={`w-full data-[size=default]:h-11 px-3 text-base transition-colors ${
              errors.tipo ? 'border-red-500' : 'focus:border-[#0094D2]'
            }`}
          >
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
          <p className="text-sm text-red-500 animate-in fade-in slide-in-from-top-1 duration-200">
            {errors.tipo}
          </p>
        )}
      </div>

      <div
        className="pt-2 animate-in fade-in duration-500"
        style={{ animationDelay: '540ms', animationFillMode: 'both' }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="group relative w-full md:w-auto bg-gradient-to-r from-[#0094D2] to-[#00A3E4] hover:from-[#0077AA] hover:to-[#0094D2] text-white text-base md:text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all overflow-hidden"
        >
          <span className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <LoaderCircle className="w-5 h-5 animate-spin" />
                Calculando...
              </>
            ) : (
              <>
                Calcular meu kit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
        </Button>
      </div>
    </form>
  );
}
