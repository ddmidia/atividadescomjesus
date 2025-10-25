import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Hand, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Plano Básico",
    price: "R$19",
    features: [
      "Kit com 100 desenhos bíblicos",
      "Acesso imediato para impressão",
      "Suporte via e-mail",
    ],
    isRecommended: false,
  },
  {
    name: "Plano Completo",
    price: "R$29",
    features: [
      "Tudo do plano básico",
      "30 histórias inspiradoras sobre os santos",
      "Guia de atividades de fé em família",
      "Calendário da Fé Católico 2026",
    ],
    bonuses: [
      { name: "Bônus 1", description: "Guia de Atividades" },
      { name: "Bônus 2", description: "Calendário da Fé" },
    ],
    isRecommended: true,
  },
];

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-primary/20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">
          Escolha o plano ideal para sua família
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Acesso vitalício e imediato para transformar os momentos em família.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
        {plans.map((plan) => (
          <Card key={plan.name} className={cn(
            "shadow-lg relative flex flex-col h-full",
            plan.isRecommended ? 'border-accent border-2 shadow-accent/30' : 'bg-card'
          )}>
            {plan.isRecommended && (
              <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-bold py-1 px-4">
                MAIS ESCOLHIDO
              </Badge>
            )}
            <CardHeader className="items-center text-center pt-10">
              <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
              <div className="text-5xl font-bold font-headline py-4">
                {plan.price}
                <span className="text-lg font-normal text-muted-foreground"> / vitalício</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-secondary-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.bonuses && (
                 <div className="border-t border-dashed border-primary/50 pt-6 space-y-4">
                    <h4 className="font-headline font-semibold text-center text-primary-foreground">Bônus Exclusivos:</h4>
                    <ul className="space-y-3">
                      {plan.bonuses.map((bonus, index) => (
                         <li key={index} className="flex items-center gap-3 text-sm">
                            <Star className="w-4 h-4 text-accent-foreground shrink-0" />
                            <span className="text-secondary-foreground">{bonus.description}</span>
                         </li>
                      ))}
                    </ul>
                </div>
              )}
            </CardContent>
            <CardFooter className="mt-auto">
              <Button size="lg" className={cn("w-full font-bold text-lg h-14", plan.isRecommended ? 'cta-glow' : 'bg-primary/80 hover:bg-primary')}>
                {plan.isRecommended ? "Quero o Plano Completo" : "Comprar Plano Básico"}
                {plan.isRecommended && <Hand className="ml-2 w-5 h-5" />}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
       <p className="text-center text-sm text-muted-foreground mt-8">
        Compra segura e 100% garantida. Você tem 7 dias para testar ou seu dinheiro de volta.
      </p>
    </SectionWrapper>
  );
}
