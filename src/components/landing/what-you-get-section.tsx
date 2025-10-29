
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  { text: "<strong class=\"font-bold\">100 Atividades Bíblicas para Colorir</strong> — ensinam sobre Jesus enquanto desenvolvem criatividade e concentração." },
  { text: "<strong class=\"font-bold\">30 Histórias Bíblicas Infantis</strong> — leitura fácil e inspiradora, ideal pra momentos em família." },
  { text: "<strong class=\"font-bold\">Guia da Mãe de Fé</strong> — ideias práticas pra transformar o tempo livre em momentos espirituais com seus filhos." },
  { text: "<strong class=\"font-bold\">Calendário da Fé 2026</strong> — ensine seus filhos a planejar o dia com propósito, com atividades e versículos diários." },
  { text: "<strong class=\"font-bold\">Tenha um pequeno ministério dentro de casa</strong> — pronto pra usar." },
];

export default function WhatYouGetSection() {
  const flatlayImage = PlaceHolderImages.find(img => img.id === "flatlay-drawings");

  return (
    <SectionWrapper className="bg-secondary pt-8 pb-12">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-xl font-headline font-bold text-headline">
          O Kit Colorindo Fé e Alegria, inclui:
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
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
        </div>
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
