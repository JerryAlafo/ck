import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Equipa from "@/components/Equipa";
import Casos from "@/components/Casos";
import Porque from "@/components/Porque";
import Processo from "@/components/Processo";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main className="bg-bone text-ink overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Sobre />
      <Servicos />
      <Equipa />
      <Casos />
      <Porque />
      <Processo />
      <Contacto />
    </main>
  );
}
