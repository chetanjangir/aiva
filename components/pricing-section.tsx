"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign } from "lucide-react"
import { EarlyAccessModal } from "@/components/early-access-modal"

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section
        id="pricing"
        className="relative overflow-hidden py-24 px-4 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[length:50px_50px]"
      >
        {/* Animated background dots for subtle motion */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50 animation-delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-16 xl:px-24 relative z-10 text-center">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fac547]/10 border border-[#fac547]/20 backdrop-blur-sm mb-8">
            <DollarSign className="w-4 h-4 text-[#fac547]" />
            <span className="text-[#fac547] text-sm font-semibold tracking-wide uppercase">
              Affordable AI. Real Results.
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 md:mb-6">
            <span className="text-foreground">Hire your AI human — </span>
            <span className="gradient-text">for less than your coffee budget.</span>
          </h2>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 md:mb-12 leading-relaxed">
            Experience human-like engagement that converts visitors into customers — starting at{" "}
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#fac547]">$99</span>.
          </p>

          {/* CTA Button */}
          {/* <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-6 py-5 md:px-8 md:py-6 font-semibold cursor-pointer"
          >
            Get Early Access
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button> */}

          {/* Pricing Info Card */}
          <div className="max-w-5xl mx-auto mt-8 md:mt-16">
            <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-[#fac547]/20 backdrop-blur-md p-6 md:p-10 shadow-lg shadow-black/20 hover:border-[#fac547]/40 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 text-left md:text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Everything you need to get started
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-400">
                    Your virtual AI sales rep — trained to book more meetings and close more deals.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="get-early-access-aiva bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-6 py-5 md:px-8 md:py-6 font-semibold cursor-pointer"
                  >
                    Get Early Access
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>
    </>
  )
}
