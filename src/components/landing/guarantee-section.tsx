import { SectionWrapper } from "./section-wrapper";
import { ShieldCheck } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <ShieldCheck className="w-16 h-16 text-primary" />
        <h3 className="text-2xl md:text-3xl font-headline font-bold text-headline">
          Garantia de 7 Dias para sua tranquilidade
        </h3>
        <p className="text-lg text-muted-foreground">
          Você tem 7 dias para testar o material com total tranquilidade. Se não amar, devolvemos 100% do seu investimento. Simples assim.
        </p>
      </div>
    </SectionWrapper>
  );
}
