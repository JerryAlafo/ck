"use client";

import { Phone, Stethoscope, FileSignature, Workflow } from "lucide-react";

const passos = [
  {
    n: "01",
    icon: Phone,
    titulo: "Contacte-nos",
    texto: "Envie-nos um e-mail ou ligue para marcar uma reunião inicial gratuita.",
  },
  {
    n: "02",
    icon: Stethoscope,
    titulo: "Diagnóstico",
    texto: "Analisamos as suas necessidades e apresentamos uma proposta personalizada.",
  },
  {
    n: "03",
    icon: FileSignature,
    titulo: "Proposta",
    texto: "Recebe uma proposta detalhada com escopo, prazos e investimento.",
  },
  {
    n: "04",
    icon: Workflow,
    titulo: "Execução",
    texto: "A nossa equipa executa o serviço com rigor e transparência em cada etapa.",
  },
];

export default function Processo() {
  return (
    <section className="py-24 lg:py-36 bg-bone relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.28em] text-ink/50 font-medium font-mono">
            06 / COMO TRABALHAR CONNOSCO
          </span>
          <div className="flex-1 h-px bg-ink/10" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl lg:text-6xl font-light leading-[0.95] tracking-tightest">
              Um processo
              <br />
              <span className="italic">claro</span>, em quatro
              <br />
              etapas definidas.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base leading-relaxed text-ink/70">
              Desde o primeiro contacto até à entrega final, sabe sempre em que ponto está o seu projecto.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[6%] right-[6%] h-px bg-gradient-to-r from-ink/15 via-gold to-ink/15" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {passos.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.n} className="relative">
                  {/* Number node */}
                  <div className="relative z-10 mb-8 flex justify-center lg:justify-start">
                    <div className="w-24 h-24 bg-bone border-2 border-ink rounded-full flex items-center justify-center relative group hover:border-gold transition-colors">
                      <Icon size={28} strokeWidth={1.5} className="text-ink group-hover:text-gold transition-colors" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-ink text-bone text-xs font-mono flex items-center justify-center tabular">
                        {p.n}
                      </div>
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <h3 className="font-display text-2xl lg:text-3xl font-light mb-3 tracking-tight">
                      {p.titulo}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/70">{p.texto}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 lg:mt-28 text-center">
          <p className="font-display italic text-2xl lg:text-3xl text-ink/85 max-w-2xl mx-auto leading-snug">
            Juntos, construímos o sucesso do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
