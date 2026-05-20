"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipa", label: "Equipa" },
  { href: "#casos", label: "Casos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-white overflow-hidden flex items-center justify-center">
              <Image
                src="/favicon.png"
                alt="CK Consulting & Services"
                width={1080}
                height={1080}
                priority
                className="h-full w-full object-contain scale-[2.35]"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gold" />
          </div>
          <div className="hidden sm:block">
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink/60 font-medium">
              Consulting & Services
            </div>
            <div className="text-sm font-display font-medium leading-none mt-0.5">
              CK&nbsp;E.I.
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[13px] uppercase tracking-[0.18em] font-medium text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 bg-ink text-bone px-5 py-2.5 text-[13px] uppercase tracking-[0.16em] font-medium hover:bg-ink/90 transition-colors group"
        >
          Falar connosco
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-ink"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-bone border-t hairline">
          <nav className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-display font-medium text-ink border-b hairline"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-6 bg-ink text-bone px-5 py-4 text-[13px] uppercase tracking-[0.16em] font-medium text-center"
            >
              Falar connosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
