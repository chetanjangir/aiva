"use client"

import { useState } from "react"
import { ArrowRight, Sparkles, Zap, Users, TrendingUp, Clock } from "lucide-react"
import { EarlyAccessModal } from "./early-access-modal"

export function FinalCtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const stats = [
    { icon: Users, value: "10K+", label: "Happy Customers" },
    { icon: TrendingUp, value: "300%", label: "Revenue Growth" },
    { icon: Clock, value: "24/7", label: "Always Available" },
    { icon: Zap, value: "10x", label: "Faster Response" },
  ]

  return (
    <>
      <section className="relative py-16 md:py-20 lg:py-24 bg-transparent overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(250,197,71,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(250,197,71,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fac547]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#fac547]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* AIVA logo */}
            <div className="mb-8 md:mb-10">
              <div className="relative inline-block">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#fac547] animate-pulse">
                  AIVA
                </div>
                <Sparkles className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-7 h-7 md:w-9 md:h-9 text-[#fac547] animate-pulse" />
                <Sparkles
                  className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-5 h-5 md:w-7 md:h-7 text-[#fac547] animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight">
              <span className="text-white">The Future of </span>
              <span className="text-[#fac547]">Sales Conversations</span>
              <span className="text-white"> is Here</span>
            </h2>

            {/* Subtext */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-10 md:mb-12 text-balance font-medium">
              Bring human-like AI engagement to your business today.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12 max-w-4xl mx-auto">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div
                    key={i}
                    className="relative bg-gradient-to-br from-[#fac547]/10 via-black/40 to-[#fac547]/10 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-[#fac547]/20 shadow-lg hover:border-[#fac547]/40 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 rounded-2xl pointer-events-none"></div>

                    <div className="relative z-10">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#fac547] mb-3 mx-auto group-hover:scale-110 transition-transform" />
                      <div className="text-2xl md:text-3xl font-bold text-[#fac547] mb-1">{stat.value}</div>
                      <div className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="get-early-access-aiva group relative px-8 py-4 bg-[#fac547] hover:bg-[#fac547]/90 text-black font-bold text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-[#fac547]/30 hover:shadow-[#fac547]/50 hover:scale-105 overflow-hidden min-w-[250px] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <span className="relative">Get Started Now</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
