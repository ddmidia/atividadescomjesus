"use client";

import { Zap } from "lucide-react";
import dynamic from 'next/dynamic';
import { cn } from "@/lib/utils";
import CurrentDate from "./current-date";

export default function Header() {
  return (
    <header className="py-2 px-4 md:px-6 bg-accent text-white sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-center text-center gap-2">
        <span className={cn("font-semibold text-sm sm:text-base flex items-center gap-2 text-glow text-white/90")}>
          Oferta Válida Somente Hoje <CurrentDate />
        </span>
      </div>
    </header>
  );
}
