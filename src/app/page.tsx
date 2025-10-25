import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import HeroSection from '@/components/landing/hero-section';
import BenefitsSection from '@/components/landing/benefits-section';
import WhatYouGetSection from '@/components/landing/what-you-get-section';
import CreatorSection from '@/components/landing/creator-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PricingSection from '@/components/landing/pricing-section';
import GuaranteeSection from '@/components/landing/guarantee-section';
import FinalCtaSection from '@/components/landing/final-cta-section';
import FloatingCta from '@/components/landing/floating-cta';
import StoryGeneratorSection from '@/components/landing/story-generator-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <WhatYouGetSection />
        <StoryGeneratorSection />
        <CreatorSection />
        <TestimonialsSection />
        <PricingSection />
        <GuaranteeSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
