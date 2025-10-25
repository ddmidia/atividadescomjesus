import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  "100 páginas de desenhos bíblicos para imprimir e colorir",
  "30 histórias inspiradoras sobre Jesus e os santos",
  "Bônus 1: Guia para mães com atividades de fé em família",
  "Bônus 2: Calendário da Fé 2026 (edição exclusiva)",
];

export default function WhatYouGetSection() {
  const flatlayImage = PlaceHolderImages.find(img => img.id === "flatlay-drawings");

  return (
    <SectionWrapper className="bg-secondary">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">
          Dentro do Colorindo Fé e Alegria, você recebe:
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ul className="space-y-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent-foreground mt-1 shrink-0" />
              <span className="text-lg text-secondary-foreground">{feature}</span>
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
