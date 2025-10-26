
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const coloringPages = [
  PlaceHolderImages.find((img) => img.id === "coloring-page-1"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-2"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-3"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-4"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-5"),
].filter(Boolean);

export default function ColoringPagesSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <SectionWrapper>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-headline">
          Desenhos inspiradores no estilo Bobbie Goods
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Desenhos bíblicos com traços delicados que ensinam enquanto divertem.
        </p>
      </div>

      <Carousel
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
      <p className="text-center text-muted-foreground mt-4 text-sm">
        Arraste para o lado
      </p>
    </SectionWrapper>
  );
}
