import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CreatorSection() {
  const creatorImage = PlaceHolderImages.find(img => img.id === "creator-monica");

  return (
    <SectionWrapper className="bg-primary/20 pb-0">
      <Card className="max-w-4xl mx-auto shadow-xl">
        <CardContent className="p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            {creatorImage && (
              <Image
                src={creatorImage.imageUrl}
                alt={creatorImage.description}
                width={150}
                height={150}
                data-ai-hint={creatorImage.imageHint}
                className="rounded-full w-32 h-32 object-cover border-4 border-accent"
              />
            )}
          </div>
          <div className="md:col-span-2 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-headline font-bold">
              Quem está por trás do Colorindo Fé e Alegria
            </h3>
            <p className="text-muted-foreground">
              “Sou mãe, catequista e apaixonada por ensinar a fé de forma prática e divertida. Criei esse material para que mais famílias vivam momentos de amor, aprendizado e fé em casa.”
            </p>
            <p className="font-bold text-lg text-primary-foreground">- Mônica Alencar</p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
