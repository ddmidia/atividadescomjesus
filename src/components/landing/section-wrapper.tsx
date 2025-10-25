import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionWrapper({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={cn(
        "py-12 sm:py-16 animate-in fade-in-up duration-700",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}
