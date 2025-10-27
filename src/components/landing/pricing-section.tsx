
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Plano Básico",
    originalPrice: "R$67",
    price: "R$17,00",
    priceDescription: "Acesso vitalício",
    features: [
      "100 desenhos bíblicos para ensinar fé enquanto eles se divertem colorindo.",
      "Acesso imediato para imprimir quando quiser.",
      "Suporte individual via e-mail para tirar dúvidas.",
    ],
    isRecommended: false,
    cta: "COMPRAR PLANO BÁSICO",
    url: "https://app.ombrelone.com/checkout/digital/2sfcjj7u0v"
  },
  {
    name: "Plano Completo",
    originalPrice: "R$97",
    price: "R$27,00",
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
    cta: "COMPRAR PLANO COMPLETO",
    url: "https://app.ombrelone.com/checkout/digital/3y799g6jpv"
  },
];

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-secondary scroll-mt-20 pt-8 pb-12">
      <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-headline font-bold text-headline">
          Escolha o plano ideal e comece a se divertir
        </h2>
        <p className="text-muted-foreground text-lg">
          Acesso vitalício • Imprima quantas vezes quiser
        </p>
        <div className="flex items-center justify-start gap-3 text-sm text-muted-foreground bg-card/80 p-3 rounded-lg border border-primary/30 max-w-md mx-auto">
            <Users className="w-6 h-6 text-green-500 shrink-0"/>
            <span className="font-medium text-left">Mais de 2 mil famílias já transformaram o aprendizado de fé em diversão diária.</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn(
              "shadow-lg relative flex flex-col h-full bg-card overflow-hidden rounded-lg",
              plan.isRecommended ? 'border-accent border-2' : 'border'
            )}>
              <CardHeader className="items-center text-center pt-8">
                 {plan.isRecommended && (
                  <div className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg mb-4">
                    MAIS VENDIDO
                  </div>
                )}
                <CardTitle className="text-xl font-headline">{plan.name}</CardTitle>
                <div className="text-center">
                  <p className="text-lg font-semibold text-muted-foreground">De <span className="line-through">{plan.originalPrice}</span> por</p>
                  <div className="text-4xl font-bold font-headline py-2 text-accent">
                    {plan.price}
                  </div>
                  <p className="font-bold text-lg text-muted-foreground"> / {plan.priceDescription}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-green-500">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-secondary-foreground font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.bonuses && (
                   <div className="border-t border-dashed pt-6 space-y-4">
                      <h4 className="font-headline font-semibold text-center text-primary-foreground">Bônus Exclusivos:</h4>
                      <ul className="space-y-3">
                        {plan.bonuses.map((bonus, index) => (
                           <li key={index} className="flex items-center gap-3 text-sm">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-accent">
                                <span className='text-xs text-white font-bold'>+</span>
                              </div>
                              <span className="text-secondary-foreground font-semibold">{bonus.description}</span>
                           </li>
                        ))}
                      </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="mt-auto p-6">
                <a href={plan.url} className="w-full">
                  {plan.isRecommended ? (
                    <Button size="lg" className={cn("w-full font-bold text-lg h-14 rounded-full cta-glow")}>
                      <span className="text-glow text-accent-foreground">COMPRAR PLANO COMPLETO</span>
                    </Button>
                  ) : (
                    <Button variant="outline" size="lg" className={cn("w-full font-bold text-lg h-14 rounded-full border-accent text-accent hover:bg-accent/10 hover:text-accent")}>
                      {plan.cta}
                    </Button>
                  )}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

       <p className="text-center text-sm text-muted-foreground mt-8">
        Compra 100% segura • Material Digital entregue por e-mail instantaneamente
      </p>
    </SectionWrapper>
  );
}
