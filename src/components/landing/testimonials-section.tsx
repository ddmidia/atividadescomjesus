import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    quote: "Agora as tardes são de oração e risadas — sem telas!",
    image: PlaceHolderImages.find(img => img.id === "testimonial-1"),
  },
  {
    quote: "Meu filho ama colorir as histórias de Jesus!",
    image: PlaceHolderImages.find(img => img.id === "testimonial-2"),
  },
  {
    quote: "Virou um momento sagrado em família.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-3"),
  },
];

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);


export default function TestimonialsSection() {
  return (
    <SectionWrapper>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">
          O que as famílias estão dizendo
        </h2>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full flex flex-col justify-between shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5" />
                      ))}
                    </div>
                    <p className="italic text-lg">“{testimonial.quote}”</p>
                     {testimonial.image && (
                      <Image
                        src={testimonial.image.imageUrl}
                        alt={testimonial.image.description}
                        width={64}
                        height={64}
                        data-ai-hint={testimonial.image.imageHint}
                        className="rounded-full mt-4 border-2 border-primary/50"
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </SectionWrapper>
  );
}
