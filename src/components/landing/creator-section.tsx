import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";

export default function CreatorSection() {
  const creatorImage = PlaceHolderImages.find(img => img.id === "creator-monica");

  return (
    <SectionWrapper className="bg-primary/5 pt-0 pb-8">
       <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-0">
         <Card className="w-full shadow-xl bg-secondary md:-mt-24 mt-2">
          <CardContent className="p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              {creatorImage && (
                <Image
                  src={creatorImage.imageUrl}
                  alt={creatorImage.description}
                  width={112}
                  height={112}
                  data-ai-hint={creatorImage.imageHint}
                  className="rounded-full w-24 h-24 md:w-28 md:h-28 object-cover border-4 border-accent"
                />
              )}
            </div>
            <div className="md:col-span-2 text-center md:text-left space-y-4">
              <h3 className="text-xl font-headline font-bold text-headline">
                Quem está por trás do Colorindo Fé e Alegria
              </h3>
              <p className="text-muted-foreground">
                “Sou mãe e psicóloga infantil cristã, e percebi que muitas famílias estão lutando contra o excesso de telas. Criei o Colorindo Fé e Alegria para que pais possam ensinar fé e valores com amor — de um jeito leve, criativo e longe das telas. Feito com muito carinho, espero que abençoe o seu lar ❤️”
              </p>
              <p className="font-bold text-lg text-primary-foreground">- Mônica Alencar</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
