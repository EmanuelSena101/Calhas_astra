import { FormularioCalhas } from '@/components/formulario-calhas';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Simulador de Calhas</h1>
        <p className="mt-2 text-muted-foreground">
          Calcule a quantidade de pecas necessarias para o sistema de calhas do seu telhado.
        </p>
      </div>

      {/* Aviso sobre telhados com mais de uma queda */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
        <h3 className="text-lg font-bold text-orange-900 mb-2">
          ATENCAO | TELHADOS COM MAIS DE UMA QUEDA:
        </h3>
        <ul className="space-y-2 text-sm text-orange-800">
          <li>
            Caso o telhado do seu projeto apresente mais de uma queda, sera necessario
            realizar o calculo com a simulacao abaixo para cada queda.{' '}
            <a
              href="https://youtu.be/8WgzypzbQNQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0094D2] underline font-semibold"
            >
              Assista ao video
            </a>{' '}
            para saber como calcular.
          </li>
          <li>
            Apos realizar as simulacoes de calculo por queda, junte os resultados e some as
            quantidades apresentadas para cada peca em todas as quedas simuladas.
          </li>
          <li>
            Pronto, agora voce tera a quantidade final para adquirir as pecas necessarias
            para a montagem de um sistema de calhas simples.
          </li>
          <li>
            Lembre-se, existem projetos de telhado mais complexos, portanto nao deixe de
            contar com auxilio tecnico para validacao do seu calculo.
          </li>
        </ul>
      </div>

      <FormularioCalhas />

      {/* Repetir aviso apos o formulario */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
        <h3 className="text-lg font-bold text-orange-900 mb-2">
          ATENCAO | TELHADOS COM MAIS DE UMA QUEDA:
        </h3>
        <p className="text-sm text-orange-800">
          Se seu telhado possui mais de uma queda, repita o calculo para cada queda e some os
          resultados. Para mais informacoes,{' '}
          <a
            href="https://youtu.be/8WgzypzbQNQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0094D2] underline font-semibold"
          >
            assista ao video explicativo
          </a>
          .
        </p>
      </div>
    </div>
  );
}
