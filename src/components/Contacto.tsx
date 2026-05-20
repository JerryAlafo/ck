"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  Building2,
} from "lucide-react";

const CONTACT_EMAIL = "carmindo1998@gmail.com";

export default function Contacto() {
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(`Contacto do website — ${form.nome}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmpresa: ${form.empresa}\nEmail: ${form.email}\n\nMensagem:\n${form.mensagem}`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = buildMailtoHref();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-ink text-bone relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gold/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 lg:pt-36 pb-16">
        <div className="flex items-center gap-3 mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.28em] text-bone/50 font-medium font-mono">
            07 / FALE CONNOSCO
          </span>
          <div className="flex-1 h-px bg-bone/15" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-28">
          {/* Left: massive headline */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-6xl lg:text-[9rem] font-light leading-[0.88] tracking-tightest mb-12">
              Fale
              <br />
              <span className="italic text-gold">connosco.</span>
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed text-bone/75 max-w-xl">
              Estamos prontos para ajudar a sua empresa a crescer. Marque uma reunião inicial gratuita e vamos conhecer o seu projecto.
            </p>

            {/* Contact details */}
            <div className="mt-16 space-y-px bg-bone/10">
              {[
                { icon: Phone, label: "Telefone", value: "+258 82 371 0375", href: "tel:+258823710375" },
                { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: MapPin, label: "Localização", value: "Maputo, Moçambique", href: null },
              ].map((c) => {
                const Icon = c.icon;
                const inner = (
                  <>
                    <div className="flex items-center gap-4">
                      <Icon size={18} className="text-gold" strokeWidth={1.5} />
                      <div className="text-[11px] uppercase tracking-[0.22em] text-bone/55 font-medium">
                        {c.label}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg lg:text-2xl font-light tabular">
                        {c.value}
                      </span>
                      {c.href && (
                        <ArrowUpRight
                          size={18}
                          className="text-bone/40 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      )}
                    </div>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center justify-between bg-ink px-6 py-6 hover:bg-bone/5 transition-colors group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="flex items-center justify-between bg-ink px-6 py-6"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-5">
            <div className="border border-bone/15 p-8 lg:p-10 bg-bone/[0.02]">
              <div className="flex items-center gap-3 mb-8">
                <Building2 size={16} className="text-gold" strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-[0.22em] text-bone/55 font-medium">
                  Pedido de contacto
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="font-display text-3xl font-light text-gold mb-4 italic">
                    Obrigado.
                  </div>
                  <p className="text-sm text-bone/70 leading-relaxed">
                    A sua mensagem está pronta para envio no seu cliente de email. Responderemos no prazo de 24 horas úteis.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { name: "nome", label: "Nome completo", type: "text", required: true },
                    { name: "empresa", label: "Empresa", type: "text", required: false },
                    { name: "email", label: "Email", type: "email", required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[10px] uppercase tracking-[0.22em] text-bone/55 mb-2 font-medium">
                        {f.label} {f.required && <span className="text-gold">*</span>}
                      </label>
                      <input
                        type={f.type}
                        required={f.required}
                        value={form[f.name as keyof typeof form]}
                        onChange={(e) =>
                          setForm({ ...form, [f.name]: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-bone/20 focus:border-gold py-3 text-base text-bone focus:outline-none transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.22em] text-bone/55 mb-2 font-medium">
                      Mensagem <span className="text-gold">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full bg-transparent border-b border-bone/20 focus:border-gold py-3 text-base text-bone focus:outline-none resize-none transition-colors"
                      placeholder="Conte-nos brevemente sobre o seu projecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-gold text-ink py-4 text-[12px] uppercase tracking-[0.22em] font-medium inline-flex items-center justify-center gap-3 hover:bg-gold-light transition-colors group"
                  >
                    Enviar mensagem
                    <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-xs text-bone/40 leading-relaxed pt-2">
                    Ao enviar, o seu cliente de email será aberto com a mensagem pré-preenchida.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 border-t border-bone/15">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white overflow-hidden flex items-center justify-center">
                  <Image
                    src="/favicon.png"
                    alt="CK Consulting & Services"
                    width={1080}
                    height={1080}
                    className="h-full w-full object-contain scale-[2.35]"
                  />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-bone/55 font-medium">
                    Consulting & Services
                  </div>
                  <div className="text-sm font-display font-medium leading-none mt-0.5">
                    CK&nbsp;E.I.
                  </div>
                </div>
              </div>
              <p className="font-display italic text-xl text-bone/85 max-w-sm leading-snug">
                Consultoria com visão, serviços com impacto.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-bone/45 mb-4 font-medium">
                Navegação
              </div>
              <ul className="space-y-2">
                {["Sobre", "Serviços", "Equipa", "Casos", "Contacto"].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase().replace("ç", "c").replace("ã", "a").replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u")}`}
                      className="text-sm text-bone/75 hover:text-gold transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.22em] text-bone/45 mb-4 font-medium">
                Sede
              </div>
              <p className="text-sm text-bone/75 leading-relaxed">
                Maputo, Moçambique
                <br />
                Empresa de capitais 100% moçambicanos
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-bone/10">
            <div className="text-xs text-bone/45 font-mono tabular">
              © {new Date().getFullYear()} CK CONSULTING & SERVICES, E.I. — TODOS OS DIREITOS RESERVADOS
            </div>
            <div className="text-xs text-bone/45 font-mono uppercase tracking-[0.2em]">
              MZ · MAPUTO
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
