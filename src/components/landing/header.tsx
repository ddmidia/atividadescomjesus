import CountdownTimer from "./countdown-timer";

export default function Header() {
  return (
    <header className="py-2 px-4 md:px-6 bg-gradient-to-b from-footer/80 to-footer text-white sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-center text-center gap-2">
        <span className="font-semibold text-sm sm:text-base">
          DESCONTO ATIVADO ⚡ ENCERRA EM
        </span>
        <CountdownTimer initialMinutes={19} initialSeconds={59} />
        <span className="text-sm sm:text-base">⏳</span>
      </div>
    </header>
  );
}
