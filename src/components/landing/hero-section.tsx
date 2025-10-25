import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-family-coloring");

  return (
    <section className="py-16 sm:py-24 bg-primary/20">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
            Transforme o tempo de tela em momentos de fé, alegria e aprendizado com Jesus!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Mais de 100 atividades prontas para imprimir e viver momentos de fé, aprendizado e conexão em família.
          </p>
          <Button size="lg" className="animate-pulse-subtle cta-glow text-lg font-bold h-14 px-10">
            Quero o Kit Agora <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Card className="overflow-hidden shadow-2xl rounded-2xl w-full max-w-lg">
            <CardContent className="p-0">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={800}
                  data-ai-hint={heroImage.imageHint}
                  className="w-full h-auto object-cover"
                  priority
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
