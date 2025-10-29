
import { SectionWrapper } from "./section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, BookOpen, Palette, HeartHandshake, Church } from "lucide-react";

const benefits = [
  {
    icon: <Heart className="w-8 h-8 text-accent" />,
    title: "Fortalece a fé e o coração dos pequenos",
    description: "Ensina valores cristãos de um jeito que eles amam.",
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: "Desperta criatividade e coordenação de forma natural",
    description: "Atividades que desenvolvem habilidades enquanto divertem.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-accent" />,
    title: "Cria laços reais entre pais e filhos",
    description: "Momentos de qualidade que fortalecem a família.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-accent" />,
    title: "Histórias que ensinam e aproximam de Deus",
    description: "Conteúdos que tocam o coração e ensinam a Palavra.",
  },
  {
    icon: <Church className="w-8 h-8 text-accent" />,
    title: "Tenha um pequeno ministério em casa",
    description: "Um material completo e pronto para usar, que transforma o ambiente em um espaço de fé.",
  },
];

export default function BenefitsSection() {
  return (
    <SectionWrapper className="pt-8">
      <div className="text-center space-y-2 mb-4">
        <h2 className="text-2xl font-headline font-bold text-headline">
          Atividades com Propósito
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center p-4">
              <div className="bg-card border-2 border-accent p-3 rounded-full mb-3 aspect-square flex items-center justify-center">
                <div className="text-2xl">{benefit.icon}</div>
              </div>
              <CardTitle className="font-headline text-lg">{benefit.title}</CardTitle>
              <CardDescription className="pt-1 text-sm">{benefit.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
