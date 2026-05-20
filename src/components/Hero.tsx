"use client";

import { ArrowDown, MapPin, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 lg:pt-36 pb-20 overflow-hidden grain">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full px-6 lg:px-10 grid grid-cols-12 gap-0">
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={i}
              className="border-l hairline h-full"
              style={{ opacity: i === 0 || i === 12 ? 0 : 0.5 }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top metadata bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16 lg:mb-24">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-ink/60 font-medium">
            <span className="w-8 h-px bg-ink/40" />
            Portfólio Corporativo
            <span className="text-ink/30">·</span>
            <span className="tabular">2026</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-ink/60 font-medium">
            <MapPin size={12} className="text-gold" strokeWidth={2} />
            Maputo · Moçambique
          </div>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-9">
            <h1 className="font-display font-light text-ink leading-[0.92] tracking-tightest text-[clamp(3rem,11vw,11rem)]">
              <span className="block animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
                Consultoria
              </span>
              <span className="block italic font-normal animate-fade-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
                com visão,
              </span>
              <span className="block animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
                serviços com
                <span className="relative inline-block ml-4 lg:ml-6">
                  <span className="relative z-10">impacto.</span>
                  <span
                    className="absolute left-0 right-0 bottom-[0.12em] h-[0.14em] bg-gold origin-left animate-draw-line"
                    style={{ animationDelay: "1s", transform: "scaleX(0)" }}
                  />
                </span>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-3 animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <div className="border-l-2 border-gold pl-5 py-2">
              <p className="text-sm leading-relaxed text-ink/75">
                A <span className="font-medium text-ink">CK Consulting & Services, E.I.</span> é uma empresa moçambicana especializada em consultoria empresarial e prestação de serviços para diversos sectores da economia.
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-16 lg:mt-24 flex flex-wrap items-baseline gap-x-6 gap-y-2 animate-fade-up" style={{ animationDelay: "0.75s", opacity: 0 }}>
          <span className="text-[11px] uppercase tracking-[0.28em] text-ink/50 font-medium">
            ◇ Princípio orientador
          </span>
          <p className="font-display italic text-xl lg:text-2xl text-ink/85">
            Mais do que consultoria — uma parceria de confiança.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/8 border hairline animate-fade-up" style={{ animationDelay: "0.9s", opacity: 0 }}>
          {[
            { value: "05", label: "Áreas de serviço", note: "Núcleo de competências" },
            { value: "100%", label: "Compromisso", note: "Com a qualidade entregue" },
            { value: "MZ", label: "Capital nacional", note: "Sediados em Maputo" },
            { value: "E.I.", label: "Empresa individual", note: "Estrutura legal" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-bone p-6 lg:p-8 group hover:bg-ink hover:text-bone transition-colors duration-500"
            >
              <div className="font-display text-5xl lg:text-6xl font-light tabular leading-none tracking-tight">
                {stat.value}
              </div>
              <div className="mt-4 lg:mt-6 text-[11px] uppercase tracking-[0.18em] font-medium text-current">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-ink/55 group-hover:text-bone/55 transition-colors">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 lg:mt-24 flex items-center justify-between">
          <a
            href="#sobre"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-ink/60 hover:text-ink transition-colors group"
          >
            <span className="w-10 h-px bg-current" />
            Continuar
            <ArrowDown size={12} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-ink/40 font-mono">
            <Building2 size={12} strokeWidth={1.5} />
            CK-001 / FUNDADA EM MZ
          </div>
        </div>
      </div>
    </section>
  );
}
