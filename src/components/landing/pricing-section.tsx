import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Hand } from "lucide-react";

const plans = [
  {
    name: "Plano Básico",
    price: "R$19",
    features: [
      "Kit de 100 desenhos bíblicos",
      "Acesso imediato",
      "Suporte por e-mail",
    ],
    isRecommended: false,
  },
  {
    name: "Plano Completo",
    price: "R$29",
    features: [
      "Tudo do básico +",
      "30 histórias inspiradoras",
      "Calendário da Fé 2026",
      "Guia de atividades em família",
    ],
    isRecommended: true,
  },
];

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-secondary">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">
          Leve fé, aprendizado e diversão para sua casa
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
        {plans.map((plan) => (
          <Card key={plan.name} className={`shadow-lg ${plan.isRecommended ? 'border-accent border-2 shadow-accent/20' : ''}`}>
            <CardHeader className="items-center text-center">
              {plan.isRecommended && (
                <Badge variant="secondary" className="bg-accent text-accent-foreground mb-2">Mais escolhido</Badge>
              )}
              <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
              <div className="text-4xl font-bold font-headline py-4">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground"> / acesso vitalício</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-secondary-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.isRecommended && (
                 <div className="flex items-center gap-3 pt-4 justify-center">
                    <Badge variant="outline" className="border-accent text-accent-foreground">Famílias Católicas Recomendam</Badge>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button size="lg" className={`w-full font-bold ${plan.isRecommended ? 'cta-glow' : ''}`}>
                {plan.isRecommended ? "Quero o Plano Completo" : "Comprar Plano Básico"}
                {plan.isRecommended && <Hand className="ml-2 w-5 h-5" />}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
