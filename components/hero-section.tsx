"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, X, AlertTriangle } from "lucide-react"
import { EarlyAccessModal } from "./early-access-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative  flex items-center justify-center bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[length:50px_50px]

 overflow-hidden py-24 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-chart-3 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full mx-auto flex items-center justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-wide uppercase">Lost Engagement = Lost Sales!</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-balance">
              <span className="text-foreground">Tired of </span>
              <span className="gradient-text">Robotic Chatbots?</span>
            </h1>

            {/* Subtext */}
            <div className="mb-8 md:mb-10 space-y-4 md:space-y-5">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium">
                Traditional chatbots frustrate customers.
              </p>

              {/* Pain points with glassmorphism */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
                {[
                  { icon: X, text: "Slow responses" },
                  { icon: X, text: "Limited understanding" },
                  { icon: X, text: "No human connection" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-md border border-red-500/20 text-xs sm:text-sm md:text-base group hover:border-red-500/40 transition-all duration-300"
                  >
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 group-hover:text-red-400 transition-colors flex-shrink-0" />
                    <span className="text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
          <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-6 py-5 md:px-8 md:py-6  font-semibold cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Book A Demo
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>

          {/* Right Side - Video */}
          <div className="flex-1 flex mt-4 justify-center lg:justify-end order-1 lg:order-2">
            <video
              src="https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/chatbotforaiva"
              className="w-80 h-auto sm:w-80 md:w-96 lg:w-[450px] xl:w-[500px] rounded-2xl shadow-2xl"
              autoPlay
              muted
              loop
              playsInline
              aria-label="AIVA demo preview video"
            />
          </div>
        </div>
      </div>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
