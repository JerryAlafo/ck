"use client";

import { Diamond } from "lucide-react";

export default function Marquee() {
  const items = [
    "Consultoria com visão",
    "Serviços com impacto",
    "Parceria de confiança",
    "Capital moçambicano",
    "Equipa multidisciplinar",
  ];

  return (
    <div className="bg-ink text-bone overflow-hidden border-y border-bone/5">
      <div className="marquee-track py-6">
        {[...Array(2)].map((_, dup) => (
          <div key={dup} className="flex items-center shrink-0">
            {items.map((it, i) => (
              <div key={`${dup}-${i}`} className="flex items-center shrink-0">
                <span className="font-display italic text-3xl lg:text-5xl font-light tracking-tight px-8 lg:px-12 whitespace-nowrap">
                  {it}
                </span>
                <Diamond size={14} className="text-gold shrink-0" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
