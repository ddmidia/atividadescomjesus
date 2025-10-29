
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-family-coloring");

  return (
    <section className="pt-8 pb-4 sm:pt-12 sm:pb-4 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* Text content */}
        <div className="flex flex-col space-y-6 text-center md:items-center">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tight text-headline">
              Seus filhos passam tempo demais nas telas?
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              <strong className="text-foreground">Descubra como transformar essa distração em devoção com o Kit Colorindo com Fé e Alegria.</strong> São mais de 100 Atividades Bíblicas para colorir e ensinar sobre Jesus — é só imprimir e se divertir!
            </h2>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-lg mt-6">
          <Card className="overflow-hidden shadow-none rounded-2xl bg-transparent border-none md:shadow-2xl md:bg-card md:border">
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
        
        {/* CTA Button */}
        <div className="mt-6 w-full flex justify-center">
          <a href="#pricing" className="w-full max-w-md md:max-w-none md:w-auto">
              <Button size="lg" className={cn("cta-glow text-lg font-bold h-14 px-10 rounded-full shine-effect w-full md:w-auto")}>
                🔓 ACESSAR CONTEÚDO AGORA
              </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
