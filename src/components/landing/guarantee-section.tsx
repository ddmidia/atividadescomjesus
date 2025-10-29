
import { SectionWrapper } from "./section-wrapper";
import { Award } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <SectionWrapper className="pt-0 pb-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
        <div className="bg-card border-2 border-accent p-3 rounded-full mb-3 aspect-square flex items-center justify-center">
          <Award className="w-12 h-12 text-accent" strokeWidth={1.5} />
        </div>
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
