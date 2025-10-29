
import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FinalCtaSection() {
  return (
    <SectionWrapper className="bg-footer text-center text-white">
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-xl font-headline font-bold">
          Plante a fé no coração dos seus filhos desde cedo.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl text-gray-300">
          Em poucos minutos, você já pode imprimir e viver momentos de amor e aprendizado em família — do jeitinho que Deus sonhou.
        </p>
        <a href="#pricing">
          <Button size="lg" className={cn("cta-glow text-lg font-bold h-16 px-12 mt-4 rounded-full shine-effect")}>
            ✨ QUERO ENSINAR COM FÉ
          </Button>
        </a>
      </div>
    </SectionWrapper>
  );
}
