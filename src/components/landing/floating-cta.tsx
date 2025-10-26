import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t z-50">
      <a href="#pricing" className="w-full">
        <Button size="lg" className={cn("w-full cta-glow font-bold rounded-full text-glow")}>
          Quero o Kit Agora <Palette className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}
