
"use client";

import { cn } from "@/lib/utils";
import React from "react";

export default function Header() {
  const [timeLeft, setTimeLeft] = React.useState({
    minutes: 17,
    seconds: 59,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        if (prevTime.seconds === 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        }

        return { ...prevTime, seconds: prevTime.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="py-2 px-4 md:px-6 bg-accent text-white sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-center text-center gap-2">
        <span className={cn("text-sm sm:text-base flex items-center gap-2 text-glow text-white/90")}>
          <strong className="font-bold flex items-center gap-2"><span>⚡</span>OFERTA RELÂMPAGO</strong>
          <span>•</span>
          <span>Encerra em: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
        </span>
      </div>
    </header>
  );
}
