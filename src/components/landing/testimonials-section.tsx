
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ana P.",
    quote: "Eu não sou muito criativa, mas com esse material, consigo preparar atividades incríveis em minutos! Meus filhos amam, e eu me sinto uma supermãe.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-1"),
  },
  {
    name: "Juliana M.",
    quote: "Meu filho de 5 anos não largava o tablet. Agora, ele mesmo pede para 'fazer Jesus' e fica super concentrado colorindo e ouvindo as histórias. É uma bênção!",
    image: PlaceHolderImages.find(img => img.id === "testimonial-2"),
  },
  {
    name: "Carla S.",
    quote: "Como catequista, sempre busco formas de tornar a fé algo vivo. Esse kit é fantástico. As histórias são simples e os desenhos ajudam a fixar o aprendizado. Já indiquei para todas as mães!",
    image: PlaceHolderImages.find(img => img.id === "testimonial-3"),
  },
];

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);


export default function TestimonialsSection() {
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

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <SectionWrapper>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-headline">
          O que as famílias estão dizendo
        </h2>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col justify-between shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image.imageUrl}
                        alt={testimonial.image.description}
                        width={64}
                        height={64}
                        data-ai-hint={testimonial.image.imageHint}
                        className="rounded-full w-16 h-16 object-cover border-2 border-primary/50"
                      />
                    )}
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="italic text-base text-muted-foreground flex-grow">“{testimonial.quote}”</p>
                    <p className="font-bold text-sm text-primary-foreground mt-2">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              current === index + 1 ? "bg-primary" : "bg-primary/30"
            )}
            aria-label={`Ir para o depoimento ${index + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
