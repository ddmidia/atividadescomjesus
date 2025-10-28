import { SectionWrapper } from "./section-wrapper";
import { ShieldCheck } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <SectionWrapper className="pt-8 pb-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
        <ShieldCheck className="w-16 h-16 text-accent" strokeWidth={1.5} />
        <h3 className="text-xl font-headline font-bold text-headline">
          Garantia de 7 Dias para sua tranquilidade
        </h3>
        <p className="text-lg text-muted-foreground">
          Você tem 7 dias para conhecer o material com sua família. Se não amar, devolvemos 100% do valor — simples assim, com fé e transparência.
        </p>
      </div>
    </SectionWrapper>
  );
}
