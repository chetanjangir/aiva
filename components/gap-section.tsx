"use client"

import { TrendingDown, MessageSquareX, AlertTriangle, DollarSign } from "lucide-react"

export function GapSection() {
  return (
    <section className="relative py-8 md:py-16 lg:py-20 bg-transparent overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-wide uppercase">The Hidden Cost</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Lost Engagement
            </span>
            <span className="text-white"> = </span>
            <span className="text-red-500">Lost Sales!</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Visual */}
          <div className="relative space-y-6">
            {/* Chat conversation */}
            <div className="relative bg-gradient-to-br from-gray-900/50 via-black/40 to-gray-900/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-red-500/20 shadow-2xl shadow-red-500/10">
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

              <div className="flex items-center gap-3 md:gap-4 mb-6 relative z-10">
                <div className="p-2 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30">
                  <MessageSquareX className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                </div>
                <span className="text-sm md:text-base text-gray-400 font-medium">Customer trying to get help...</span>
              </div>

              <div className="space-y-3 relative z-10">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-4 text-sm border border-white/10 hover:border-white/20 transition-all">
                  <span className="text-gray-400 font-semibold">Customer:</span>
                  <span className="text-white ml-2">"I need help with my order"</span>
                </div>

                <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-md rounded-xl p-4 text-sm border border-red-500/30 hover:border-red-500/40 transition-all shadow-lg shadow-red-500/10">
                  <span className="text-red-400 font-semibold">Bot:</span>
                  <span className="text-gray-300 ml-2">"I don't understand. Please try again."</span>
                </div>

                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-xl p-4 text-sm border border-white/10 hover:border-white/20 transition-all">
                  <span className="text-gray-400 font-semibold">Customer:</span>
                  <span className="text-white ml-2">"Can I speak to a human?"</span>
                </div>

                <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-md rounded-xl p-4 text-sm border border-red-500/30 hover:border-red-500/40 transition-all shadow-lg shadow-red-500/10">
                  <span className="text-red-400 font-semibold">Bot:</span>
                  <span className="text-gray-300 ml-2">"Please wait 45 minutes..."</span>
                </div>
              </div>

              {/* Warning indicator */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-red-500/30 to-red-600/30 backdrop-blur-md rounded-full border border-red-500/40 flex items-center justify-center animate-pulse shadow-lg shadow-red-500/30">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
            </div>

            {/* Revenue Impact Chart */}
            <div className="relative bg-gradient-to-br from-gray-900/50 via-black/40 to-gray-900/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-red-500/20 shadow-2xl shadow-red-500/10">
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30">
                  <TrendingDown className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                </div>
                <span className="text-sm md:text-base text-gray-400 font-semibold">Revenue Impact</span>
              </div>

              <div className="relative h-24 md:h-28 bg-gradient-to-br from-red-500/10 via-red-600/5 to-transparent backdrop-blur-sm rounded-2xl overflow-hidden border border-red-500/20 z-10">
                {/* Animated declining line chart */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(239 68 68)" stopOpacity="1" />
                      <stop offset="100%" stopColor="rgb(220 38 38)" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,20 Q75,25 150,45 T300,70"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    fill="none"
                    style={{
                      strokeDasharray: "300",
                      strokeDashoffset: "300",
                      animation: "drawLine 3s ease-out forwards, pulse 2s infinite 3s",
                    }}
                  />
                  {/* Data points */}
                  {[
                    { cx: 0, cy: 20, delay: "0s" },
                    { cx: 75, cy: 25, delay: "1s" },
                    { cx: 150, cy: 45, delay: "2s" },
                    { cx: 225, cy: 60, delay: "2.5s" },
                    { cx: 300, cy: 70, delay: "3s" },
                  ].map((point, i) => (
                    <circle
                      key={i}
                      cx={point.cx}
                      cy={point.cy}
                      r="4"
                      fill="rgb(239 68 68)"
                      className="animate-pulse"
                      style={{ animationDelay: point.delay }}
                    />
                  ))}
                </svg>

                {/* Revenue labels */}
                <div className="absolute top-2 left-3 px-2 py-1 bg-red-500/20 backdrop-blur-sm rounded-lg border border-red-500/30">
                  <span className="text-xs text-red-400 font-bold">$100K</span>
                </div>
                <div className="absolute bottom-2 right-3 px-2 py-1 bg-red-500/20 backdrop-blur-sm rounded-lg border border-red-500/30">
                  <span className="text-xs text-red-400 font-bold">$40K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Main message */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
                When chat feels robotic, customers drop off.
              </p>
              <div className="relative inline-block">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent leading-relaxed">
                  Every missed conversation is missed revenue.
                </p>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"></div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
              {/* Stat 1 */}
              <div className="group relative bg-gradient-to-br from-red-500/10 via-black/40 to-red-600/10 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 shadow-lg shadow-red-500/10 hover:shadow-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <TrendingDown className="w-5 h-5 text-red-500" />
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 group-hover:scale-110 transition-transform">
                      67%
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-gray-400 font-medium">Customer drop-off rate</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group relative bg-gradient-to-br from-red-500/10 via-black/40 to-red-600/10 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 shadow-lg shadow-red-500/10 hover:shadow-red-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <DollarSign className="w-5 h-5 text-red-500" />
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 group-hover:scale-110 transition-transform">
                      $2.4M
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-gray-400 font-medium">Lost revenue annually</div>
                </div>
              </div>
            </div>

            {/* Additional context */}
            <div className="relative bg-gradient-to-br from-yellow-500/5 via-black/20 to-amber-500/5 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/20 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-50 rounded-2xl pointer-events-none"></div>
              <p className="relative text-base md:text-lg text-gray-300 leading-relaxed">
                <span className="text-yellow-400 font-semibold">The Solution?</span> AI that understands context,
                responds instantly, and feels genuinely helpful.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  )
}
