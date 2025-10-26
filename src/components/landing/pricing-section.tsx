import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Plano Básico",
    originalPrice: "R$67,00",
    price: "R$19",
    priceDescription: "Acesso vitalício",
    features: [
      "100 desenhos bíblicos para ensinar fé enquanto eles se divertem colorindo.",
      "Acesso imediato para imprimir quando quiser.",
      "Suporte individual via e-mail para tirar dúvidas.",
    ],
    isRecommended: false,
    cta: "Comprar Plano Básico",
  },
  {
    name: "Plano Completo",
    originalPrice: "R$97,00",
    price: "R$27",
    priceDescription: "Acesso vitalício",
    features: [
      "Tudo do plano básico, e mais...",
      "Histórias infantis que tornam o aprendizado espiritual leve e envolvente.",
      "Guia prático para criar momentos de fé em família.",
      "Calendário da Fé 2026 para criar uma rotina divertida e com propósito.",
    ],
    bonuses: [
      { name: "Bônus 1", description: "Guia de Atividades em Família" },
      { name: "Bônus 2", description: "Calendário da Fé 2026" },
    ],
    isRecommended: true,
    cta: "Quero o Plano Completo",
  },
];

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-primary/20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-headline">
          Escolha o plano ideal para sua família
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Acesso vitalício e imediato para transformar os momentos em família.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
        {plans.map((plan) => (
          <Card key={plan.name} className={cn(
            "shadow-lg relative flex flex-col h-full bg-card overflow-hidden",
            plan.isRecommended ? 'border-accent border-2' : ''
          )}>
            {plan.isRecommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-sm font-bold text-accent-foreground px-4 py-1 rounded-full cta-glow">
                  + ESCOLHIDO PELAS FAMÍLIAS
                </div>
              </div>
            )}
            <CardHeader className="items-center text-center pt-10">
              <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
              <div className="text-center">
                <p className="text-lg text-muted-foreground">De <span className="line-through">{plan.originalPrice}</span> por</p>
                <div className="text-5xl font-bold font-headline py-2">
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground"> / {plan.priceDescription}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-secondary-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.bonuses && (
                 <div className="border-t border-dashed pt-6 space-y-4">
                    <h4 className="font-headline font-semibold text-center text-primary-foreground">Bônus Exclusivos:</h4>
                    <ul className="space-y-3">
                      {plan.bonuses.map((bonus, index) => (
                         <li key={index} className="flex items-center gap-3 text-sm">
                            <Palette className="w-4 h-4 text-yellow-500 fill-yellow-400 shrink-0" />
                            <span className="text-secondary-foreground font-semibold">{bonus.description}</span>
                         </li>
                      ))}
                    </ul>
                </div>
              )}
            </CardContent>
            <CardFooter className="mt-auto p-6">
              <a href="#" className="w-full">
                <Button size="lg" className={cn("w-full font-bold text-lg h-14 rounded-full cta-glow")}>
                  {plan.cta}
                  <Palette className="ml-2 w-5 h-5" />
                </Button>
              </a>
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
