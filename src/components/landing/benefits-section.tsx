
import { SectionWrapper } from "./section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const benefits = [
  {
    icon: "💛",
    title: "Fortalece a fé e o coração dos pequenos",
    description: "Ensina valores cristãos de um jeito que eles amam.",
  },
  {
    icon: "🎨",
    title: "Desperta criatividade e coordenação de forma natural",
    description: "Atividades que desenvolvem habilidades enquanto divertem.",
  },
  {
    icon: "🙏",
    title: "Cria laços reais entre pais e filhos",
    description: "Momentos de qualidade que fortalecem a família.",
  },
  {
    icon: "📖",
    title: "Histórias que ensinam, emocionam e aproximam de Deus",
    description: "Conteúdos que tocam o coração e ensinam a Palavra.",
  },
];

export default function BenefitsSection() {
  return (
    <SectionWrapper className="pt-8">
      <div className="text-center space-y-2 mb-4">
        <h2 className="text-2xl font-headline font-bold text-headline">
          Por que o Colorindo Fé e Alegria é diferente?
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center p-4">
              <div className="bg-card border-2 border-accent p-3 rounded-full mb-3 aspect-square flex items-center justify-center">
                <span className="text-2xl">{benefit.icon}</span>
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
