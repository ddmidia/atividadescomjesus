import { SectionWrapper } from "./section-wrapper";
import StoryGeneratorForm from "./story-generator-form";

export default function StoryGeneratorSection() {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Crie uma história de fé única para seu filho!
          </h2>
          <p className="text-lg text-muted-foreground">
            Experimente nosso gerador de histórias! Usando a tecnologia a serviço da fé, criamos uma pequena história personalizada para encantar e ensinar. Diga-nos a idade, os interesses do seu filho e o tamanho da história desejado.
          </p>
        </div>
        <div className="w-full">
          <StoryGeneratorForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
