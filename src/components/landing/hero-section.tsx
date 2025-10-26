import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-family-coloring");

  return (
    <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-primary/20">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text content for larger screens */}
        <div className="hidden md:flex flex-col space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter text-headline">
            Transforme o tempo de tela em momentos de fé, alegria e aprendizado com Jesus!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Mais de 100 atividades prontas para imprimir e viver momentos de fé, aprendizado e conexão em família.
          </p>
          <a href="#pricing">
            <Button size="lg" className={cn("cta-glow text-lg font-bold h-14 px-10 self-start rounded-full")}>
              <span className="text-glow text-white/90">Quero o Kit Agora</span> <Palette className="ml-2 h-5 w-5" />
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
          <h1 className="text-4xl font-headline font-bold tracking-tighter text-headline">
            Transforme o tempo de tela em momentos de fé, alegria e aprendizado com Jesus!
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Mais de 100 atividades prontas para imprimir e viver momentos de fé, aprendizado e conexão em família.
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
          <a href="#pricing" className="w-full">
            <Button size="lg" className={cn("cta-glow text-lg font-bold h-14 px-10 w-full rounded-full")}>
              <span className="text-glow text-white/90">Quero o Kit Agora</span> <Palette className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
