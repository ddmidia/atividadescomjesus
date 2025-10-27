
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import HeroSection from '@/components/landing/hero-section';
import CreatorSection from '@/components/landing/creator-section';
import BenefitsSection from '@/components/landing/benefits-section';
import WhatYouGetSection from '@/components/landing/what-you-get-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PricingSection from '@/components/landing/pricing-section';
import GuaranteeSection from '@/components/landing/guarantee-section';
import FaqSection from '@/components/landing/faq-section';
import FinalCtaSection from '@/components/landing/final-cta-section';
import ColoringPagesSection from '@/components/landing/coloring-pages-section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SectionWrapper } from '@/components/landing/section-wrapper';
import { Palette } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CreatorSection />
        <ColoringPagesSection />
        <BenefitsSection />
        <SectionWrapper className="pt-0 pb-0 text-center">
            <a href="#pricing">
                <Button size="lg" className={cn("cta-glow text-lg font-bold h-14 px-10 rounded-full")}>
                    <span className="text-glow text-white/90">ACESSAR CONTEÚDO</span> 
                    <Palette className="w-6 h-6 text-glow text-white/90" strokeWidth={2.5} />
                </Button>
            </a>
        </SectionWrapper>
        <WhatYouGetSection />
        <TestimonialsSection />
        <PricingSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
