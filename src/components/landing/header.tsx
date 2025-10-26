import { Zap } from "lucide-react";
import CountdownTimer from "./countdown-timer";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="py-2 px-4 md:px-6 bg-gradient-to-b from-[#2a345c] to-footer text-white sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-center text-center gap-2">
        <span className={cn("font-semibold text-sm sm:text-base flex items-center gap-2 text-glow text-white/90")}>
          DESCONTO ATIVADO <Zap size={16} className={cn("inline-block text-accent text-glow")} /> ENCERRA EM
        </span>
        <CountdownTimer initialMinutes={19} initialSeconds={59} />
      </div>
    </header>
  );
}
