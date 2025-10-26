
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { cn } from "@/lib/utils";

const coloringPages = [
  PlaceHolderImages.find((img) => img.id === "coloring-page-1"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-2"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-3"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-4"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-5"),
].filter(Boolean);

export default function ColoringPagesSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


  return (
    <SectionWrapper>
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-headline">
          Desenhos inspiradores no estilo Bobbie Goods
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Desenhos bíblicos com traços delicados que ensinam enquanto divertem.
        </p>
      </div>

      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {coloringPages.map((page, index) => (
            page && (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden shadow-lg rounded-2xl">
                  <CardContent className="p-0">
                    <Image
                      src={page.imageUrl}
                      alt={page.description}
                      width={800}
                      height={800}
                      data-ai-hint={page.imageHint}
                      className="w-full h-auto object-contain aspect-square"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            )
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
      
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
                <span
                    key={i}
                    className={cn(
                        'h-2.5 rounded-full transition-all duration-300',
                        i + 1 === current ? 'w-6 bg-accent' : 'w-2.5 bg-accent/20'
                    )}
                />
            ))}
        </div>
         <p className="text-center text-muted-foreground text-sm">
          Arraste para o lado
        </p>
      </div>
    </SectionWrapper>
  );
}
