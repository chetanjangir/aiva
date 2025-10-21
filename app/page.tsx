"use client";

import { useEffect } from "react";
import Script from "next/script";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
// import { GapSection } from "@/components/gap-section";
import { MeetAivaSection } from "@/components/meet-aiva-section";
import { SuperpowersSection } from "@/components/superpowers-section";
import { BusinessImpactSection } from "@/components/business-impact-section";
import { ChooseAivaSection } from "@/components/choose-aiva-section";
import { TouchpointsSection } from "@/components/touchpoints-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { HeroFirstSection } from "@/components/hero-first";
import { PricingSection } from "@/components/pricing-section";
import { LandingPage } from "@/components/old-way-new-way";

export default function HomePage() {


  return (
    <>

      <main className="min-h-screen bg-transparent relative">
        {/* Page content */}
        <Navbar />
        <div className="pt-4 md:pt-12">
          <HeroFirstSection />
          <HeroSection />
          <RevealOnScroll>
            <MeetAivaSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <LandingPage />
          </RevealOnScroll>
          <RevealOnScroll>
            <SuperpowersSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <BusinessImpactSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <ChooseAivaSection />
          </RevealOnScroll>
          <RevealOnScroll>
            <TouchpointsSection />
          </RevealOnScroll>
          <RevealOnScroll>
          <PricingSection />
        </RevealOnScroll>
          <RevealOnScroll>
            <FinalCtaSection />
          </RevealOnScroll>
          <Footer />
        </div>

        {/* ✅ Optional container if you want controlled placement */}
        {/* <div id="saleassist-widget" className="fixed bottom-6 right-6 z-50" /> */}
      </main>
    </>
  );
}
