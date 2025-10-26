

"use client";

import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";
import { cn } from "@/lib/utils";

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
  return (
    <SectionWrapper>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-headline">
          O que as famílias estão dizendo
        </h2>
      </div>
      <div className="max-w-xl mx-auto grid grid-cols-1 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-card/90 shadow-lg rounded-xl overflow-hidden border border-primary/20">
            <CardContent className="p-8 flex flex-col items-center text-center gap-4">
              {testimonial.image && (
                <Image
                  src={testimonial.image.imageUrl}
                  alt={testimonial.image.description}
                  width={80}
                  height={80}
                  data-ai-hint={testimonial.image.imageHint}
                  className="rounded-full w-20 h-20 object-cover border-4 border-white shadow-md"
                />
              )}
              <div className="flex flex-col">
                <p className="font-headline font-bold text-xl text-primary-foreground mt-2">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="italic text-base text-muted-foreground flex-grow">“{testimonial.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
