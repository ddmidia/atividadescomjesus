import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function FloatingCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t z-50">
      <Button size="lg" className="w-full cta-glow font-bold">
        Quero o Kit Agora <Sparkles className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
