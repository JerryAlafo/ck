import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CK Consulting & Services, E.I. — Consultoria com visão, serviços com impacto",
  description:
    "Empresa moçambicana de consultoria empresarial, formação profissional, abertura de empresas, planos de negócios e procurement & logística. Mais do que consultoria, uma parceria de confiança.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "consultoria empresarial",
    "Moçambique",
    "Maputo",
    "abertura de empresas",
    "planos de negócios",
    "procurement",
    "formação profissional",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bone text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
