"use client";

import { Compass, Eye, Heart, Check } from "lucide-react";

const valores = [
  "Integridade e Transparência",
  "Compromisso com a Qualidade",
  "Orientação para Resultados",
  "Inovação e Adaptabilidade",
  "Parceria e Confiança",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 lg:py-36 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.28em] text-ink/50 font-medium font-mono">
            01 / SOBRE A EMPRESA
          </span>
          <div className="flex-1 h-px bg-ink/10" />
        </div>

        {/* Lead paragraph */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 lg:mb-32">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl lg:text-6xl font-light leading-[0.95] tracking-tightest">
              Quem
              <br />
              <span className="italic">somos.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-lg leading-relaxed text-ink/80">
            <p className="text-2xl lg:text-3xl font-display font-light text-ink leading-snug">
              Uma empresa de capitais 100% moçambicanos, fundada com o propósito de oferecer soluções estratégicas, eficientes e inovadoras para empresas de pequeno, médio e grande porte.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t hairline">
              <div>
                <h4 className="text-[13px] uppercase tracking-[0.2em] text-gold font-medium mb-3">
                  O que fazemos
                </h4>
                <p className="text-[14px] leading-relaxed text-ink/75">
                  Prestamos serviços em consultoria empresarial, formação profissional, abertura e regularização de empresas, planos de negócios, procurement & logística.
                </p>
              </div>
              <div>
                <h4 className="text-[13px] uppercase tracking-[0.2em] text-gold font-medium mb-3">
                  O nosso diferencial
                </h4>
                <p className="text-[14px] leading-relaxed text-ink/75">
                  Trabalhamos com rigor, qualidade e cumprimento de prazos, com uma equipa multidisciplinar em áreas tais como engenharia, direito, contabilidade e gestão.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MVV */}
        <div className="grid lg:grid-cols-3 gap-px bg-ink/10 border hairline">
          {[
            {
              icon: Compass,
              label: "Missão",
              text: "Gerar valor e resultados sustentáveis para os nossos clientes, através de soluções transparentes, práticas e personalizadas, contribuindo para o desenvolvimento empresarial de Moçambique.",
            },
            {
              icon: Eye,
              label: "Visão",
              text: "Tornarmo-nos uma referência nacional em consultoria empresarial, reconhecidos pela excelência, inovação e pelo impacto positivo que geramos nas organizações e comunidades onde actuamos.",
            },
            {
              icon: Heart,
              label: "Valores",
              text: "",
              list: valores,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-bone p-8 lg:p-10 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-ink/50 font-mono">
                    0{i + 1}
                  </span>
                  <Icon size={20} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-4xl font-light italic mb-6 tracking-tight">
                  {item.label}
                </h3>
                {item.text && (
                  <p className="text-sm leading-relaxed text-ink/75">{item.text}</p>
                )}
                {item.list && (
                  <ul className="space-y-3">
                    {item.list.map((v) => (
                      <li key={v} className="flex items-start gap-3 text-sm text-ink/80">
                        <Check size={14} className="text-gold mt-1 shrink-0" strokeWidth={2} />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
