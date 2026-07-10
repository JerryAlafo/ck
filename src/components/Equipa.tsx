"use client";

import {
  HardHat,
  Scale,
  Calculator,
  Briefcase,
  BookOpen,
  Target,
} from "lucide-react";

const competencias = [
  {
    icon: HardHat,
    titulo: "Engenharia",
    texto:
      "Profissionais de engenharia para análise técnica, planeamento de projetos e soluções de infraestrutura.",
  },
  {
    icon: Scale,
    titulo: "Direito & Legalidade",
    texto:
      "Especialistas jurídicos para suporte em regularização, contratos e conformidade legal.",
  },
  {
    icon: Calculator,
    titulo: "Contabilidade",
    texto:
      "Peritos em contabilidade, gestão financeira, auditoria e planeamento fiscal.",
  },
  {
    icon: Briefcase,
    titulo: "Gestão de Negócios",
    texto:
      "Gestores experientes em estratégia empresarial, liderança e optimização de processos.",
  },
  {
    icon: BookOpen,
    titulo: "Formação Profissional",
    texto:
      "Formadores certificados para capacitação de equipas e desenvolvimento de competências.",
  },
  {
    icon: Target,
    titulo: "Consultoria Estratégica",
    texto:
      "Consultores com visão integrada para diagnóstico e crescimento sustentável das organizações.",
  },
];

export default function Equipa() {
  return (
    <section id="equipa" className="py-24 lg:py-36 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.28em] text-ink/50 font-medium font-mono">
            03 / EQUIPA & COMPETÊNCIAS
          </span>
          <div className="flex-1 h-px bg-ink/10" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl lg:text-6xl font-light leading-[0.95] tracking-tightest">
              Profissionais
              <br />
              <span className="italic">multidisciplinares</span>
              <br />
              ao seu serviço.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg leading-relaxed text-ink/75">
              Reunimos seis áreas de competência sob o mesmo tecto. Esta diversidade permite-nos entregar soluções integradas, em vez de respostas fragmentadas.
            </p>
          </div>
        </div>

        {/* Grid of competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border hairline">
          {competencias.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.titulo}
                className="bg-bone p-8 lg:p-10 group relative overflow-hidden transition-all duration-500 hover:bg-ink hover:text-bone"
              >
                <div className="flex items-start justify-between mb-12">
                  <div className="w-12 h-12 border border-current/25 flex items-center justify-center group-hover:border-gold transition-colors">
                    <Icon size={20} strokeWidth={1.5} className="group-hover:text-gold transition-colors" />
                  </div>
                  <span className="text-xs font-mono text-current/40 tabular">
                    0{i + 1} / 06
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-light mb-4 tracking-tight leading-tight">
                  {c.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-current/70">
                  {c.texto}
                </p>
              </div>
            );
          })}
        </div>

        {/* Gestor contact card */}
        <div className="mt-16 lg:mt-20 border hairline p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center bg-ink text-bone relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
          <div className="lg:col-span-2">
            <div className="w-20 h-20 lg:w-24 lg:h-24 border border-gold/40 rounded-full flex items-center justify-center font-display text-3xl lg:text-4xl font-light text-gold">
              CC
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-2 font-medium">
              Gestor de Negócios
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-light tracking-tight">
              Cremildo Cossa
            </h3>
          </div>
          <div className="lg:col-span-4 relative flex flex-col items-start gap-2">
            <a
              href="mailto:ckservicesconsulting@gmail.com"
              className="block text-sm text-bone/80 hover:text-gold transition-colors link-underline"
            >
              ckservicesconsulting@gmail.com
            </a>
            <a
              href="tel:+258868888148"
              className="block text-sm text-bone/80 hover:text-gold transition-colors link-underline tabular"
            >
              +258 86 888 8148
            </a>
            <p className="text-sm text-bone/45">
              ou
            </p>
            <a
              href="tel:+258823710375"
              className="block text-sm text-bone/80 hover:text-gold transition-colors link-underline tabular"
            >
              +258 82 371 0375
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
