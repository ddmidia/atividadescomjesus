import { SectionWrapper } from "./section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bird, Pencil, Users, BookOpen } from "lucide-react";

const benefits = [
  {
    icon: <Bird className="w-8 h-8 text-accent" />,
    title: "Fortalece a fé",
    description: "Fortalece a fé das crianças de forma divertida e prática.",
  },
  {
    icon: <Pencil className="w-8 h-8 text-accent" />,
    title: "Desenvolve habilidades",
    description: "Desenvolve coordenação, concentração e valores cristãos.",
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Conexão familiar",
    description: "Momentos de conexão real entre pais e filhos.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-accent" />,
    title: "Histórias inspiradoras",
    description: "Desenhos e histórias inspiradoras sobre Jesus e os santos.",
  },
];

export default function BenefitsSection() {
  return (
    <SectionWrapper className="pt-8">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-headline">
          Por que o Colorindo Fé e Alegria é diferente?
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center p-4">
              <div className="bg-card border-2 border-accent p-3 rounded-full mb-3">
                {benefit.icon}
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
