import CountdownTimer from "./countdown-timer";

export default function Header() {
  return (
    <header className="py-2 px-4 md:px-6 bg-footer text-white sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-center text-center">
        <span className="font-semibold text-sm sm:text-base">OFERTA ENCERRA EM </span>
        <CountdownTimer initialMinutes={14} initialSeconds={35} />
      </div>
    </header>
  );
}
