import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function FinalCtaSection() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'final-cta-background');

  return (
    <SectionWrapper className="relative overflow-hidden text-center text-white">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          data-ai-hint={bgImage.imageHint}
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-primary/80 backdrop-brightness-75"></div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">
          Plante a fé no coração dos seus filhos desde cedo.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl">
          Em poucos minutos, você já pode imprimir e viver momentos de amor e aprendizado em família — do jeitinho que Deus sonhou.
        </p>
        <Button size="lg" className={cn("animate-pulse-subtle cta-glow text-lg font-bold h-16 px-12 mt-4")}>
          Acessar o Material Agora <Sparkles className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
