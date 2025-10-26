import CountdownTimer from "./countdown-timer";
import { Hourglass } from "lucide-react";

export default function Header() {
  return (
    <header className="py-2 px-4 md:px-6 bg-footer text-white sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-center text-center">
        <span className="font-semibold text-sm sm:text-base">DESCONTO ATIVADO ⚡ ENCERRA EM&nbsp;</span>
        <CountdownTimer initialMinutes={19} initialSeconds={59} />
        <Hourglass className="w-4 h-4 ml-2" />
      </div>
    </header>
  );
}
