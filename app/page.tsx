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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <HeroSection />
        <GapSection />
        <MeetAivaSection />
        <SuperpowersSection />
        <BusinessImpactSection />
        <ChooseAivaSection />
        <TouchpointsSection />
        <FinalCtaSection />
        <Footer />
      </div>
    </main>
  )
}
