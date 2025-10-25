import { HandMetal } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-4 px-4 md:px-6 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HandMetal className="w-6 h-6 text-primary-foreground bg-primary p-1 rounded-md" />
          <span className="font-headline text-xl font-bold">Colorindo Fé e Alegria</span>
        </div>
      </div>
    </header>
  );
}
