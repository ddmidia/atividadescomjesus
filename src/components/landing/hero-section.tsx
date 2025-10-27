
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { HeartHandshake } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-family-coloring");

  return (
    <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text content for larger screens */}
        <div className="hidden md:flex flex-col space-y-6 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tight text-headline">
              Seus filhos passam tempo demais nas telas?
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Descubra o jeito mais leve de ensinar sobre Jesus com 100 desenhos e 30 histórias prontas para imprimir.
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            <strong className="text-foreground">Leve Mais de 100 Atividades e Histórias prontas para imprimir e ensinar valores cristãos de forma leve e divertida.</strong>
          </p>
          <a href="#pricing">
            <Button size="lg" className={cn("cta-glow text-lg font-bold h-14 px-10 self-start rounded-full")}>
              <span className="text-glow text-white/90">Quero ensinar com fé</span> 
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 text-glow text-white/90" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8v-2h3V7l4 4-4 4z"/></svg>
            </Button>
          </a>
        </div>

        {/* Image for larger screens */}
        <div className="hidden md:flex justify-center">
          <Card className="overflow-hidden shadow-2xl rounded-2xl w-full max-w-lg bg-transparent border-none">
            <CardContent className="p-0">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={800}
                  data-ai-hint={heroImage.imageHint}
                  className="w-full h-auto object-contain"
                  priority
                />
              )}
            </CardContent>
          </Card>
        </div>

        {/* Mobile layout: Headline, Subheadline, Image, Button */}
        <div className="md:hidden flex flex-col items-center text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-headline font-bold tracking-tight text-headline">
              Seus filhos passam tempo demais nas telas?
            </h1>
            <h2 className="text-xl text-muted-foreground">
              Descubra o jeito mais leve de ensinar sobre Jesus com 100 desenhos e 30 histórias prontas para imprimir.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            <strong className="text-foreground">Leve Mais de 100 Atividades e Histórias prontas para imprimir e ensinar valores cristãos de forma leve e divertida.</strong>
          </p>
          <div className="w-full max-w-lg">
            <Card className="overflow-hidden shadow-none rounded-2xl bg-transparent border-none">
              <CardContent className="p-0">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    data-ai-hint={heroImage.imageHint}
                    className="w-full h-auto object-contain"
                    priority
                  />
                )}
              </CardContent>
            </Card>
          </div>
           <div className="w-full px-4 md:hidden mt-6">
            <a href="#pricing" className="w-full">
                <Button size="lg" className={cn("cta-glow text-lg font-bold h-14 px-10 w-full rounded-full")}>
                <span className="text-glow text-white/90">Quero ensinar com fé</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 text-glow text-white/90" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8v-2h3V7l4 4-4 4z"/></svg>
                </Button>
            </a>
        </div>
        </div>

      </div>
    </section>
  );
}
