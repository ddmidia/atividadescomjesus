
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Ana P.",
    role: "Mãe e Catequista",
    quote: "Eu não sou muito criativa, mas com esse material, consigo preparar atividades incríveis em minutos! Meus filhos amam, e eu me sinto uma supermãe.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-1"),
  },
  {
    name: "Juliana M.",
    role: "Professora de Educação Infantil",
    quote: "Meu filho de 5 anos não largava o tablet. Agora, ele mesmo pede para 'fazer Jesus' e fica super concentrado colorindo e ouvindo as histórias. É uma bênção!",
    image: PlaceHolderImages.find(img => img.id === "testimonial-2"),
  },
  {
    name: "Família Galvão",
    role: "Pais de 3 crianças",
    quote: "Finalmente encontramos algo que une diversão e fé! Nossos filhos pedem para colorir todos os dias.",
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
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <SectionWrapper className="pb-8">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-headline">
          O que as famílias estão dizendo
        </h2>
      </div>

      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-card/90 shadow-lg rounded-xl overflow-hidden border border-primary/20 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image.imageUrl}
                        alt={testimonial.image.description}
                        width={80}
                        height={80}
                        data-ai-hint={testimonial.image.imageHint}
                        className="rounded-full w-16 h-16 object-cover border-4 border-white shadow-md"
                      />
                    )}
                    <div className="flex flex-col mt-2">
                      <p className="font-headline font-bold text-lg text-primary-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex text-yellow-400 my-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5" />
                      ))}
                    </div>
                    <p className="italic text-base text-muted-foreground flex-grow">“{testimonial.quote}”</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
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
