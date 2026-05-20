"use client";

import { Star, Target, Clock, Lock, FileSpreadsheet, Check } from "lucide-react";

const compromissos = [
  {
    icon: Target,
    titulo: "Soluções à medida",
    texto: "Cada cliente recebe atenção personalizada.",
  },
  {
    icon: Clock,
    titulo: "Cumprimento de prazos",
    texto: "Respeitamos os prazos acordados.",
  },
  {
    icon: Lock,
    titulo: "Confidencialidade",
    texto: "Total sigilo sobre os seus dados.",
  },
  {
    icon: FileSpreadsheet,
    titulo: "Relatórios detalhados",
    texto: "Transparência em cada etapa do serviço.",
  },
];

const entregaveis = [
  "Assessoria completa no processo de constituição da empresa",
  "Regularização de toda a documentação legal e fiscal",
  "Suporte no registo junto às entidades competentes",
  "Acompanhamento até à emissão das licenças definitivas",
];

export default function Casos() {
  return (
    <section id="casos" className="py-24 lg:py-36 bg-bone relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.28em] text-ink/50 font-medium font-mono">
            04 / CASOS DE SUCESSO
          </span>
          <div className="flex-1 h-px bg-ink/10" />
        </div>

        {/* Featured case */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 lg:mb-32">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-gold font-medium mb-6">
              <Star size={12} className="fill-gold" strokeWidth={1.5} />
              Caso em destaque
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light leading-[0.95] tracking-tightest mb-6">
              Evercraft,
              <br />
              <span className="italic">Limitada.</span>
            </h2>
            <p className="text-lg leading-relaxed text-ink/75 mb-8">
              Abertura e regularização de documentação empresarial — um processo conduzido do início ao fim com rigor jurídico e administrativo.
            </p>

            <div className="border-l-4 border-gold pl-6 py-3">
              <div className="text-[11px] uppercase tracking-[0.24em] text-ink/50 mb-2 font-medium">
                Resultado
              </div>
              <div className="font-display text-7xl lg:text-8xl font-light text-ink leading-none tabular">
                100<span className="text-gold">%</span>
              </div>
              <div className="text-sm text-ink/60 mt-2">Concluído</div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 bg-ink text-bone p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-gold/40 to-transparent" />
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-8 font-medium">
              O que executámos
            </div>
            <ul className="space-y-6">
              {entregaveis.map((e, i) => (
                <li key={e} className="grid grid-cols-12 gap-4 pb-6 border-b border-bone/10 last:border-0 last:pb-0">
                  <span className="col-span-1 font-mono text-xs text-gold/80 tabular pt-1">
                    0{i + 1}
                  </span>
                  <span className="col-span-1 pt-1">
                    <Check size={16} className="text-gold" strokeWidth={2} />
                  </span>
                  <span className="col-span-10 text-base lg:text-lg leading-snug font-display font-light">
                    {e}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compromissos */}
        <div>
          <div className="mb-12 lg:mb-16">
            <span className="text-[11px] uppercase tracking-[0.28em] text-ink/50 font-medium font-mono">
              O nosso compromisso com novos clientes
            </span>
            <h3 className="mt-4 font-display text-3xl lg:text-5xl font-light tracking-tightest max-w-2xl leading-[1.05]">
              Quatro garantias que <span className="italic">levamos a sério.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border hairline">
            {compromissos.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={c.titulo} className="bg-bone p-8 group hover:bg-ink hover:text-bone transition-colors duration-500">
                  <div className="flex items-center justify-between mb-10">
                    <Icon size={22} className="text-gold" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-current/40 tabular">
                      0{i + 1}
                    </span>
                  </div>
                  <h4 className="font-display text-xl lg:text-2xl font-light mb-3 tracking-tight">
                    {c.titulo}
                  </h4>
                  <p className="text-sm text-current/70 leading-relaxed">{c.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
