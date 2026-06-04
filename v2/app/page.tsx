import { PortfolioShell } from "@/components/PortfolioShell";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { Publications } from "@/components/sections/Publications";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Recognition } from "@/components/sections/Recognition";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <PortfolioShell />
      <main className="relative z-10 lg:ml-60">
        <Hero />
        <Research />
        <Publications />
        <Education />
        <Experience />
        <Recognition />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
