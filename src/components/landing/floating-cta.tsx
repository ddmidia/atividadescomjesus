import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FloatingCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t z-50">
      <a href="#pricing" className="w-full">
        <Button size="lg" className={cn("w-full cta-glow font-bold rounded-full")}>
          <span className="text-glow text-white/90">Quero ensinar com fé</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 text-glow text-white/90" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 '12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8v-2h3V7l4 4-4 4z"/></svg>
        </Button>
      </a>
    </div>
  );
}
