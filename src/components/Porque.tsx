"use client";

import {
  Users,
  Wallet,
  MapPinned,
  Sparkles,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const razoes = [
  {
    icon: Users,
    titulo: "Equipa Multidisciplinar",
    texto: "Engenheiros, advogados, contabilistas e gestores de negócios reunidos sob um só tecto para servir melhor os nossos clientes.",
  },
  {
    icon: Wallet,
    titulo: "Soluções Acessíveis",
    texto: "Preços competitivos e planos flexíveis que se adaptam ao orçamento de empresas de qualquer dimensão.",
  },
  {
    icon: MapPinned,
    titulo: "Conhecimento Local",
    texto: "Profundo conhecimento do contexto empresarial, legal e regulatório de Moçambique.",
  },
  {
    icon: Sparkles,
    titulo: "Abordagem Personalizada",
    texto: "Não temos soluções de prateleira. Cada cliente recebe uma estratégia desenhada especificamente para o seu negócio.",
  },
  {
    icon: ShieldCheck,
    titulo: "Garantia de Qualidade",
    texto: "Todos os nossos serviços são executados segundo normas de qualidade rigorosas, com garantia em todos os fornecimentos.",
  },
  {
    icon: Handshake,
    titulo: "Parceria de Longo Prazo",
    texto: "O nosso objectivo é ser mais do que um fornecedor — queremos ser um parceiro estratégico de confiança.",
  },
];

export default function Porque() {
  return (
    <section className="py-24 lg:py-36 bg-ink text-bone relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gold/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.28em] text-bone/50 font-medium font-mono">
            05 / PORQUÊ ESCOLHER-NOS
          </span>
          <div className="flex-1 h-px bg-bone/15" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl lg:text-7xl font-light leading-[0.95] tracking-tightest">
              Seis razões.
              <br />
              <span className="italic text-gold">Uma decisão.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-16">
          {razoes.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.titulo}
                className="group"
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-mono text-xs text-gold tabular">
                    0{i + 1}
                  </span>
                  <div className="flex-1 h-px bg-bone/15 group-hover:bg-gold transition-colors duration-500" />
                  <Icon size={20} className="text-bone/60 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-light mb-4 tracking-tight leading-tight">
                  {r.titulo}
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-bone/70">
                  {r.texto}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
