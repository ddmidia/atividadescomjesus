
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "./section-wrapper";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como vou receber o material?",
    answer:
      "O acesso ao material é 100% digital e imediato. Após a confirmação do pagamento, você receberá um e-mail com o link para baixar todo o conteúdo em PDF. Simples e rápido!",
  },
  {
    question: "Posso imprimir quantas vezes eu quiser?",
    answer:
      "Sim! O acesso ao material é vitalício. Você pode baixar e imprimir os desenhos e atividades quantas vezes desejar, para usar com todos os seus filhos, sobrinhos ou em turmas de catequese.",
  },
  {
    question: "Para qual idade é recomendado?",
    answer:
      "O material foi pensado para crianças de 3 a 10 anos. As atividades possuem diferentes níveis de complexidade, permitindo que crianças de várias idades aproveitem o conteúdo.",
  },
  {
    question: "A compra é segura?",
    answer:
      "Totalmente segura. O pagamento é processado pela maior plataforma de produtos digitais da América Latina, utilizando os mais altos padrões de segurança. Seus dados estão protegidos.",
  },
  {
    question: "E se eu não gostar do material?",
    answer:
      "Não se preocupe! Oferecemos uma garantia incondicional de 7 dias. Se, por qualquer motivo, você não ficar satisfeito, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem burocracia.",
  },
];

export default function FaqSection() {
  return (
    <SectionWrapper className="pt-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4 mb-4">
        <div className="bg-card border-2 border-accent p-3 rounded-full aspect-square flex items-center justify-center">
          <HelpCircle className="w-8 h-8 text-accent" strokeWidth={1.5} />
        </div>
        <h2 className="text-xl font-headline font-bold text-headline">
          Perguntas Frequentes:
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card shadow-sm rounded-lg mb-2 px-6 border-b-0 hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
