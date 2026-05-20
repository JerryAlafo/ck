# CK Consulting & Services, E.I. — Website

Website corporativo em Next.js 15 + TypeScript + Tailwind CSS para a **CK Consulting & Services, E.I.**, empresa moçambicana de consultoria empresarial.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **lucide-react** (todos os ícones — zero emojis)
- Fontes do Google: **Fraunces** (display, serif editorial) + **Inter Tight** (corpo) + **JetBrains Mono** (metadados)

## Direcção criativa

- **Paleta**: *Midnight Executive* — `ink #0A0E27` (navy profundo dominante), `bone #F5F1E8` (off-white quente como base secundária), `gold #B8924A` (acento sóbrio, nunca brilhante)
- **Tipografia**: Fraunces light/italic para títulos editoriais, Inter Tight para UI, JetBrains Mono para numeração e metadados
- **Composição**: assimétrica, grid de 12 colunas, hairlines, generosa respiração; alterna secções `bone` ↔ `ink` (sanduíche clássico corporativo)
- **Motivo**: linha dourada como traço unificador, numeração `01/05` mono em cada secção, círculos como containers de ícones

## Estrutura

```
src/
├── app/
│   ├── layout.tsx        # Fontes + metadata
│   ├── page.tsx          # Composição da home
│   └── globals.css       # CSS base + grain + animações
└── components/
    ├── Navbar.tsx        # Header fixo com blur ao scroll
    ├── Hero.tsx          # Headline editorial + 4 stats
    ├── Marquee.tsx       # Faixa rolante com lema
    ├── Sobre.tsx         # Quem somos + MVV
    ├── Servicos.tsx      # Accordion dos 5 serviços
    ├── Equipa.tsx        # 6 competências + cartão do gestor
    ├── Casos.tsx         # Evercraft + compromissos
    ├── Porque.tsx        # 6 razões para escolher
    ├── Processo.tsx      # 4 passos com timeline
    └── Contacto.tsx      # Formulário + footer
```

## Como executar

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Notas técnicas

- O formulário de contacto usa `mailto:` — abre o cliente de email do utilizador com a mensagem pré-preenchida.
- Todas as secções têm ID âncoras (`#sobre`, `#servicos`, etc.) para navegação suave.
- Não usei emojis em lado nenhum — todos os ícones vêm do `lucide-react`.
- Mobile-first com breakpoints em `md:` (768px) e `lg:` (1024px).
