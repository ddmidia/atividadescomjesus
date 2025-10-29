
import { SectionWrapper } from "./section-wrapper";
import { Award } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <SectionWrapper className="pt-0 pb-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
        <div className="bg-card border-2 border-accent p-3 rounded-full mb-3 aspect-square flex items-center justify-center">
          <Award className="w-8 h-8 text-accent" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-headline font-bold text-headline">
          Garantia de 7 Dias para sua tranquilidade
        </h3>
        <p className="text-lg text-muted-foreground">
          Se não achar que o material seja útil para as crianças, devolvemos 100% do valor investido — simples assim, com fé e transparência.
        </p>
      </div>
    </SectionWrapper>
  );
}
