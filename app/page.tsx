import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GapSection } from "@/components/gap-section"
import { MeetAivaSection } from "@/components/meet-aiva-section"
import { SuperpowersSection } from "@/components/superpowers-section"
import { BusinessImpactSection } from "@/components/business-impact-section"
import { ChooseAivaSection } from "@/components/choose-aiva-section"
import { TouchpointsSection } from "@/components/touchpoints-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import {HeroFirstSection} from "@/components/hero-first"


export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent">
       <Navbar />
      <div className="pt-4 md:pt-12">
        <HeroFirstSection />
        <HeroSection />
        <RevealOnScroll>
          <GapSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <MeetAivaSection />
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
          <FinalCtaSection />
        </RevealOnScroll>
        <Footer />
      </div>
    </main>
  )
}
