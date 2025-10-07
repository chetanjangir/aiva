"use client"

import { TrendingUp, Users, Star, Zap, Target, Award } from "lucide-react"

export function BusinessImpactSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
            <Target className="w-4 h-4 text-green-500" />
            <span className="text-green-400 text-sm font-semibold tracking-wide uppercase">Proven Results</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Visual */}
          <div className="relative space-y-6">
            {/* Growth Chart */}
            <div className="relative bg-gradient-to-br from-green-500/10 via-black/40 to-emerald-500/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-green-500/20 shadow-2xl shadow-green-500/10">
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-green-500 animate-pulse" />
                </div>
                <span className="text-sm md:text-base text-gray-400 font-semibold">Business Growth with AIVA</span>
              </div>

              <div className="relative h-44 md:h-48 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-green-500/10 z-10">
                {/* Animated growth chart */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 160" preserveAspectRatio="none">
                  {/* Grid pattern */}
                  <defs>
                    <pattern id="grid" width="30" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M 30 0 L 0 0 0 20"
                        fill="none"
                        stroke="rgb(148 163 184)"
                        strokeWidth="0.5"
                        opacity="0.2"
                      />
                    </pattern>
                    <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(34 197 94)" stopOpacity="1" />
                      <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Glow effect */}
                  <path
                    d="M0,140 Q50,120 100,80 Q150,40 200,30 Q250,20 300,10"
                    stroke="url(#growthGradient)"
                    strokeWidth="10"
                    fill="none"
                    opacity="0.3"
                    className="blur-sm"
                    style={{
                      strokeDasharray: "400",
                      strokeDashoffset: "400",
                      animation: "growthLine 4s ease-out forwards",
                    }}
                  />

                  {/* Main line */}
                  <path
                    d="M0,140 Q50,120 100,80 Q150,40 200,30 Q250,20 300,10"
                    stroke="url(#growthGradient)"
                    strokeWidth="4"
                    fill="none"
                    className="drop-shadow-lg"
                    style={{
                      strokeDasharray: "400",
                      strokeDashoffset: "400",
                      animation: "growthLine 4s ease-out forwards",
                    }}
                  />

                  {/* Data points */}
                  {[
                    { cx: 0, cy: 140, delay: "0.5s" },
                    { cx: 100, cy: 80, delay: "2s" },
                    { cx: 200, cy: 30, delay: "3s" },
                    { cx: 300, cy: 10, delay: "4s" },
                  ].map((point, i) => (
                    <circle
                      key={i}
                      cx={point.cx}
                      cy={point.cy}
                      r="5"
                      fill="rgb(34 197 94)"
                      className="animate-pulse"
                      style={{ animationDelay: point.delay }}
                    />
                  ))}
                </svg>

                {/* Labels */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-gray-900/80 backdrop-blur-md rounded-lg border border-green-500/20">
                  <span className="text-xs text-gray-400 font-semibold">Before</span>
                </div>
                <div
                  className="absolute top-3 right-3 px-3 py-1.5 bg-green-500/20 backdrop-blur-md rounded-lg border border-green-500/30 animate-pulse"
                  style={{ animationDelay: "4s" }}
                >
                  <span className="text-xs text-green-400 font-bold">With AIVA</span>
                </div>
              </div>

              {/* Growth metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3 relative z-10">
                {[
                  { value: "+300%", label: "Engagement" },
                  { value: "+250%", label: "Conversions" },
                  { value: "+400%", label: "Satisfaction" },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className="text-center p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
                  >
                    <div className="text-lg md:text-xl font-bold text-green-400 group-hover:scale-110 transition-transform">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer testimonial */}
            <div className="relative bg-gradient-to-br from-yellow-500/10 via-black/40 to-amber-500/10 backdrop-blur-xl rounded-3xl p-6 border border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500/30 to-amber-500/30 backdrop-blur-md border border-yellow-500/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/20">
                  <Users className="w-7 h-7 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-300 font-medium">
                    "AIVA transformed our customer experience"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 md:space-y-10">
            {/* Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  AIVA
                </span>
                <span className="text-white"> = </span>
                <span className="text-green-500">Sales ↑ </span>
                <span className="text-yellow-500">Engagement ↑ </span>
                <span className="text-emerald-500">CX ↑</span>
              </h2>

              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">AIVA doesn't just answer questions.</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent leading-relaxed">
                  It sells. It converts. It delivers premium experiences.
                </p>
              </div>
            </div>

            {/* Impact metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {/* Metric 1 */}
              <div className="group relative bg-gradient-to-br from-yellow-500/10 via-black/40 to-amber-500/10 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30">
                      <Zap className="w-5 h-5 text-yellow-500" />
                    </div>
                    <span className="text-3xl md:text-4xl font-bold text-yellow-500 group-hover:scale-110 transition-transform">
                      10x
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-400 font-medium">Faster response times</p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="group relative bg-gradient-to-br from-green-500/10 via-black/40 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 shadow-lg shadow-green-500/10 hover:shadow-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                      <Users className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-3xl md:text-4xl font-bold text-green-500 group-hover:scale-110 transition-transform">
                      95%
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-400 font-medium">Customer satisfaction</p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="group relative bg-gradient-to-br from-blue-500/10 via-black/40 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30">
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-3xl md:text-4xl font-bold text-blue-500 group-hover:scale-110 transition-transform">
                      3.5x
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-400 font-medium">Revenue growth</p>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="group relative bg-gradient-to-br from-purple-500/10 via-black/40 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
                      <Award className="w-5 h-5 text-purple-500" />
                    </div>
                    <span className="text-3xl md:text-4xl font-bold text-purple-500 group-hover:scale-110 transition-transform">
                      24/7
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-400 font-medium">Always available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes growthLine {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  )
}
