"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, X } from "lucide-react"
import { EarlyAccessModal } from "./early-access-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden py-8 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-chart-3 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16 text-center relative z-10">
        {/* AI Avatar */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent to-chart-3 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <Bot className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-primary animate-float" />
              </div>
            </div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-balance px-2">
          <span className="text-foreground">Tired of </span>
          <span className="gradient-text">Robotic Chatbots?</span>
        </h1>

        {/* Subtext */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-10 space-y-4 md:space-y-5 px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium">
              Traditional chatbots frustrate customers.
            </p>
            
            {/* Pain points with glassmorphism */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              {[
                { icon: X, text: "Slow responses" },
                { icon: X, text: "Limited understanding" },
                { icon: X, text: "No human connection" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-md border border-red-500/20 text-sm md:text-base group hover:border-red-500/40 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-red-500 group-hover:text-red-400 transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-6 py-5 md:px-8 md:py-6 animate-glow font-semibold cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          See Chatbot in Action

          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
