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
import FloatingCta from '@/components/landing/floating-cta';
import ColoringPagesSection from '@/components/landing/coloring-pages-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CreatorSection />
        <ColoringPagesSection />
        <BenefitsSection />
        <WhatYouGetSection />
        <TestimonialsSection />
        <PricingSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
