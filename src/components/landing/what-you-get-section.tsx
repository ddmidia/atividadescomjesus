
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  { text: "<span class=\"font-bold\">100 desenhos bíblicos</span> para ensinar a fé enquanto eles se divertem colorindo." },
  { text: "<span class=\"font-bold\">30 histórias infantis</span> que tornam o aprendizado espiritual leve e envolvente." },
  { text: "<span class=\"font-bold\">Bônus:</span> Guia para mães com atividades práticas para fortalecer a fé em família." },
  { text: "<span class=\"font-bold\">Bônus:</span> Calendário da Fé 2026 para criar uma rotina divertida e com propósito." },
];

export default function WhatYouGetSection() {
  const flatlayImage = PlaceHolderImages.find(img => img.id === "flatlay-drawings");

  return (
    <SectionWrapper className="bg-secondary">
      <div className="text-center space-y-4 mb-4">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-headline">
          Dentro do Colorindo Fé e Alegria, você recebe:
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ul className="space-y-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent mt-1 shrink-0" />
              <span 
                className="text-lg text-secondary-foreground"
                dangerouslySetInnerHTML={{ __html: feature.text }}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Card className="overflow-hidden shadow-2xl rounded-2xl w-full max-w-md">
            <CardContent className="p-0">
               {flatlayImage && (
                <Image
                  src={flatlayImage.imageUrl}
                  alt={flatlayImage.description}
                  width={600}
                  height={400}
                  data-ai-hint={flatlayImage.imageHint}
                  className="w-full h-auto object-cover"
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
