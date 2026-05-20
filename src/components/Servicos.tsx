"use client";

import { useState } from "react";
import {
  GraduationCap,
  FileText,
  Briefcase,
  LineChart,
  Truck,
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react";

const servicos = [
  {
    n: "01",
    icon: GraduationCap,
    titulo: "Formação e Treinamento Profissional",
    resumo:
      "Capacitação de equipas e desenvolvimento de competências técnicas e comportamentais adaptadas às necessidades de cada organização.",
    detalhes: [
      "Diagnóstico das necessidades de formação",
      "Elaboração de programas curriculares personalizados",
      "Formação em gestão, liderança e comunicação",
      "Capacitação técnica em TI, contabilidade e logística",
      "Workshops e seminários empresariais",
      "Avaliação pós-formação e relatórios de desempenho",
    ],
  },
  {
    n: "02",
    icon: FileText,
    titulo: "Abertura e Regularização de Empresas",
    resumo:
      "Apoio completo nos processos legais e administrativos para formalização, licenciamento e regularização de negócios em Moçambique.",
    detalhes: [
      "Constituição de sociedades e empresas individuais",
      "Registo no NUIT e entidades reguladoras",
      "Licenciamento comercial e industrial",
      "Regularização de documentação fiscal e laboral",
      "Alterações e aditamentos estatutários",
      "Apoio jurídico e acompanhamento processual",
    ],
  },
  {
    n: "03",
    icon: Briefcase,
    titulo: "Consultoria Empresarial",
    resumo:
      "Diagnóstico organizacional, planeamento estratégico e optimização de processos internos para melhorar gestão e rentabilidade.",
    detalhes: [
      "Diagnóstico organizacional completo",
      "Planeamento estratégico de curto e longo prazo",
      "Optimização de processos internos",
      "Reestruturação e gestão de mudança",
      "Análise de mercado e competitividade",
    ],
  },
  {
    n: "04",
    icon: LineChart,
    titulo: "Elaboração de Planos de Negócios",
    resumo:
      "Estudos de viabilidade, projeções financeiras, análise de mercado e estratégias de crescimento para novos e existentes negócios.",
    detalhes: [
      "Estudos de viabilidade técnica e financeira",
      "Projeções financeiras e fluxos de caixa",
      "Análise SWOT e pesquisa de mercado",
      "Estratégias de captação de investimento",
      "Relatórios executivos para financiadores",
    ],
  },
  {
    n: "05",
    icon: Truck,
    titulo: "Procurement e Logística",
    resumo:
      "Gestão eficiente da cadeia de fornecimento, aquisição de bens e serviços e coordenação logística com qualidade e transparência.",
    detalhes: [
      "Gestão da cadeia de fornecimento",
      "Aquisição de bens e serviços com rigor",
      "Coordenação e rastreamento logístico",
      "Avaliação e qualificação de fornecedores",
      "Relatórios de compliance e auditoria de compras",
    ],
  },
];

export default function Servicos() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="servicos" className="py-24 lg:py-36 bg-ink text-bone relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.28em] text-bone/50 font-medium font-mono">
            02 / OS NOSSOS SERVIÇOS
          </span>
          <div className="flex-1 h-px bg-bone/15" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl lg:text-7xl font-light leading-[0.95] tracking-tightest">
              Cinco áreas
              <br />
              <span className="italic text-gold">
                desenhadas para o seu crescimento.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
            <p className="text-base lg:text-lg leading-relaxed text-bone/75">
              Cada serviço é executado por profissionais especializados, com metodologia rigorosa e foco em resultados mensuráveis para o seu negócio.
            </p>
          </div>
        </div>

        {/* Service accordion */}
        <div className="border-t border-bone/15">
          {servicos.map((s, i) => {
            const Icon = s.icon;
            const isOpen = open === i;
            return (
              <div
                key={s.n}
                className="border-b border-bone/15 group transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-8 lg:py-10 grid grid-cols-12 gap-4 lg:gap-8 items-center text-left hover:bg-bone/5 transition-colors px-2 lg:px-4 -mx-2 lg:-mx-4"
                >
                  <div className="col-span-2 lg:col-span-1 font-mono text-xs lg:text-sm text-gold tabular">
                    {s.n}
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 border border-bone/25 flex items-center justify-center group-hover:border-gold transition-colors">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="col-span-6 lg:col-span-8">
                    <h3 className="font-display text-xl lg:text-3xl font-light leading-tight tracking-tight">
                      {s.titulo}
                    </h3>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 border border-bone/25 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-ink transition-all duration-300">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                </button>

                <div
                  className={`grid grid-cols-12 gap-4 lg:gap-8 overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-[600px] opacity-100 pb-10 lg:pb-12" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="col-span-12 lg:col-start-3 lg:col-span-5">
                    <p className="text-base lg:text-lg leading-relaxed text-bone/85 mb-6">
                      {s.resumo}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-gold font-medium mb-4">
                      O que inclui
                    </div>
                    <ul className="space-y-2.5">
                      {s.detalhes.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-bone/80">
                          <span className="text-gold mt-1.5 w-3 h-px bg-current shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 lg:mt-20 flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm text-bone/60 max-w-md">
            Cada serviço pode ser combinado ou adaptado conforme o estágio e a dimensão do seu negócio.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 border border-bone/30 hover:bg-bone hover:text-ink transition-colors px-6 py-3 text-[12px] uppercase tracking-[0.18em] font-medium group"
          >
            Solicitar proposta
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
