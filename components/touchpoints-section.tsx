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
    <section className="relative py-16 md:py-24 lg:py-32 bg-transparent overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,197,71,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(250,197,71,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-400/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-yellow-400/8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold tracking-wide uppercase">Omnichannel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-4">
              <span className="text-white">AIVA for all customer </span>
              <span className="text-yellow-400">touchpoints</span>
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
              Deploy AIVA everywhere your customers are. One AI, infinite possibilities.
            </p>
          </div>

          {/* Enhanced Grid Layout */}
          <div className="relative bg-gradient-to-br from-slate-900/60 via-black/40 to-slate-900/60 backdrop-blur-xl rounded-3xl md:rounded-[2rem] p-8 md:p-10 lg:p-12 border border-slate-700/40 shadow-2xl">
            {/* Glass shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 rounded-3xl md:rounded-[2rem] pointer-events-none"></div>

            {/* Grid of touchpoints */}
            <div className="relative z-10 grid sm:grid-cols-2 gap-5 md:gap-6">
              {touchpoints.map((touchpoint, index) => {
                const Icon = touchpoint.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-800/50 backdrop-blur-md rounded-2xl p-6 md:p-7 border border-slate-700/50 hover:border-yellow-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-400/10"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    <div className="relative flex items-start gap-4 md:gap-5">
                      {/* Icon */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-400/50 transition-all duration-300 shadow-lg shadow-yellow-400/10">
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-yellow-400 transition-colors" />
                        </div>
                        {/* Check badge */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-slate-900 flex items-center justify-center shadow-lg">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0 pt-2">
                        <div className="space-y-1">
                          <span className="block text-sm md:text-base text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                            {touchpoint.label}
                          </span>
                          <span className="block text-xl md:text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                            {touchpoint.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom CTA text */}
            <div className="relative z-10 mt-8 md:mt-10 text-center">
              <p className="text-sm md:text-base text-gray-400">
                <span className="text-yellow-400 font-semibold">Seamless integration</span> across all platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
