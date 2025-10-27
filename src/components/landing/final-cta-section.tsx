import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FinalCtaSection() {
  return (
    <SectionWrapper className="bg-footer text-center text-white">
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-headline font-bold">
          Plante a fé no coração dos seus filhos desde cedo.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl text-gray-300">
          Em poucos minutos, você já pode imprimir e viver momentos de amor e aprendizado em família — do jeitinho que Deus sonhou.
        </p>
        <a href="#pricing">
          <Button size="lg" className={cn("cta-glow text-lg font-bold h-16 px-12 mt-4 rounded-full")}>
            <span className="text-glow text-white/90">Quero ensinar com fé</span> 
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 text-glow text-white/90" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8v-2h3V7l4 4-4 4z"/></svg>
          </Button>
        </a>
      </div>
    </SectionWrapper>
  );
}
