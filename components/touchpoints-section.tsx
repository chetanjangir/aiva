"use client"

import { Check, Globe, Building2, Share2, QrCode, Sparkles } from "lucide-react"

const touchpoints = [
  {
    label: "Website:",
    highlight: "Aiva Button",
    icon: Globe,
  },
  {
    label: "Physical Branch:",
    highlight: "Aiva Kiosk",
    icon: Building2,
  },
  {
    label: "Social Media:",
    highlight: "Aiva Link",
    icon: Share2,
  },
  {
    label: "Print Media:",
    highlight: "Aiva QR",
    icon: QrCode,
  },
]

export function TouchpointsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,197,71,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(250,197,71,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#fac547]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-[#fac547]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fac547]/10 border border-[#fac547]/20 backdrop-blur-sm mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#fac547]" />
              <span className="text-[#fac547] text-xs font-semibold tracking-wide uppercase">
                Omnichannel
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight">
              <span className="text-white">AIVA for all customer </span>
              <span className="text-[#fac547]">
                Touch points
              </span>
            </h2>
          </div>

          {/* Compact Grid Layout */}
          <div className="relative bg-gradient-to-br from-[#fac547]/10 via-black/40 to-[#fac547]/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-[#fac547]/20 shadow-2xl shadow-[#fac547]/10">
            {/* Glass shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

            {/* Grid of touchpoints */}
            <div className="relative z-10 grid sm:grid-cols-2 gap-4 md:gap-5">
              {touchpoints.map((touchpoint, index) => {
                const Icon = touchpoint.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-[#fac547]/20 hover:border-[#fac547]/40 transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fac547]/0 via-[#fac547]/5 to-[#fac547]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    <div className="relative flex items-center gap-3 md:gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#fac547]/30 to-[#fac547]/20 backdrop-blur-sm border border-[#fac547]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#fac547]/20">
                          <Icon className="w-5 h-5 text-[#fac547] transition-colors" />
                        </div>
                        {/* Check badge */}
                        <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-500 border-2 border-black flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                          <span className="text-sm md:text-base text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                            {touchpoint.label}
                          </span>
                          <span className="text-base md:text-lg font-bold text-[#fac547] truncate">
                            {touchpoint.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
