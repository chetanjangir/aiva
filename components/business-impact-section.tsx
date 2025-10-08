"use client"

import { TrendingUp, Users, Star, Zap, Target, Award } from "lucide-react"

export function BusinessImpactSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 backdrop-blur-sm">
            <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">Proven Results</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Visual */}
          <div className="relative space-y-4 sm:space-y-6">
            {/* Growth Chart */}
            <div className="relative bg-gradient-to-br from-purple-500/15 via-cyan-500/10 to-pink-500/15 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-purple-400/30 shadow-2xl shadow-purple-500/20">
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-2xl sm:rounded-3xl pointer-events-none"></div>

              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 relative z-10">
                <div className="p-1.5 sm:p-2 rounded-full bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/40">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400 animate-pulse" />
                </div>
                <span className="text-xs sm:text-sm md:text-base text-gray-100 font-semibold">Business Growth with AIVA</span>
              </div>

              <div className="relative h-36 sm:h-44 md:h-48 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-purple-400/20 z-10">
                {/* Animated growth chart */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 160" preserveAspectRatio="none">
                  {/* Grid pattern */}
                  <defs>
                    <pattern id="grid" width="30" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M 30 0 L 0 0 0 20"
                        fill="none"
                        stroke="rgb(168 85 247)"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                    </pattern>
                    <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(34 211 238)" stopOpacity="1" />
                      <stop offset="40%" stopColor="rgb(168 85 247)" stopOpacity="1" />
                      <stop offset="70%" stopColor="rgb(250 204 21)" stopOpacity="1" />
                      <stop offset="100%" stopColor="rgb(236 72 153)" stopOpacity="1" />
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
                    { cx: 0, cy: 140, delay: "0.5s", color: "rgb(34 211 238)" },
                    { cx: 100, cy: 80, delay: "2s", color: "rgb(168 85 247)" },
                    { cx: 200, cy: 30, delay: "3s", color: "rgb(250 204 21)" },
                    { cx: 300, cy: 10, delay: "4s", color: "rgb(236 72 153)" },
                  ].map((point, i) => (
                    <circle
                      key={i}
                      cx={point.cx}
                      cy={point.cy}
                      r="5"
                      fill={point.color}
                      className="animate-pulse"
                      style={{ animationDelay: point.delay }}
                    />
                  ))}
                </svg>

                {/* Labels */}
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-900/80 backdrop-blur-md rounded-lg border border-purple-400/30">
                  <span className="text-xs text-gray-300 font-semibold">Before</span>
                </div>
                <div
                  className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-3 py-1 sm:py-1.5 bg-yellow-400/15 backdrop-blur-md rounded-lg border border-yellow-400/30 animate-pulse"
                  style={{ animationDelay: "4s" }}
                >
                  <span className="text-xs text-yellow-300 font-bold">With AIVA</span>
                </div>
              </div>

              {/* Growth metrics */}
              <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3 relative z-10">
                {[
                  { value: "+300%", label: "Engagement", color: "cyan" },
                  { value: "+250%", label: "Conversions", color: "yellow" },
                  { value: "+400%", label: "Satisfaction", color: "pink" },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className={`text-center p-2 sm:p-3 bg-gradient-to-br ${
                      metric.color === "cyan"
                        ? "from-cyan-400/15 to-cyan-500/10 border-cyan-400/30 hover:border-cyan-400/50"
                        : metric.color === "yellow"
                        ? "from-yellow-400/15 to-yellow-500/10 border-yellow-400/30 hover:border-yellow-400/50"
                        : "from-pink-400/15 to-pink-500/10 border-pink-400/30 hover:border-pink-400/50"
                    } backdrop-blur-sm rounded-lg sm:rounded-xl border transition-all duration-300 group`}
                  >
                    <div
                      className={`text-base sm:text-lg md:text-xl font-bold ${
                        metric.color === "cyan"
                          ? "text-cyan-400"
                          : metric.color === "yellow"
                          ? "text-yellow-400"
                          : "text-pink-400"
                      } group-hover:scale-110 transition-transform`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-300 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer testimonial */}
            <div className="relative bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-pink-400/30 shadow-2xl shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-2xl sm:rounded-3xl pointer-events-none"></div>

              <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-pink-400/30 to-purple-400/30 backdrop-blur-md border border-pink-400/40 flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/20">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-100 font-medium">
                    "AIVA transformed our customer experience"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight mb-4 sm:mb-6">
                <span className="text-white">AIVA = </span>
                <span className="text-cyan-400">Sales ↑ </span>
                <span className="text-yellow-400">Engagement ↑ </span>
                <span className="text-gray-300">CX ↑</span>
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed">AIVA doesn't just answer questions.</p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                  It sells. It converts. <span className="text-yellow-400">It delivers premium experiences.</span>
                </p>
              </div>
            </div>

            {/* Impact metrics */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
  {/* Metric 1 */}
  <div className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/40 hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl pointer-events-none"></div>

    <div className="relative z-10">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="p-1.5 sm:p-2 rounded-full bg-cyan-400/15 backdrop-blur-sm border border-cyan-400/30">
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">
          10x
        </span>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">Faster response times</p>
    </div>
  </div>

  {/* Metric 2 */}
  <div className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/40 hover:border-yellow-500/40 transition-all duration-300 shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl pointer-events-none"></div>

    <div className="relative z-10">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="p-1.5 sm:p-2 rounded-full bg-yellow-400/15 backdrop-blur-sm border border-yellow-400/30">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">
          95%
        </span>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">Customer satisfaction</p>
    </div>
  </div>

  {/* Metric 3 */}
  <div className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/40 hover:border-slate-500/40 transition-all duration-300 shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl pointer-events-none"></div>

    <div className="relative z-10">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="p-1.5 sm:p-2 rounded-full bg-gray-400/15 backdrop-blur-sm border border-gray-400/30">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 group-hover:scale-110 transition-transform">
          3.5x
        </span>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">Revenue growth</p>
    </div>
  </div>

  {/* Metric 4 */}
  <div className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-800/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/40 hover:border-slate-500/40 transition-all duration-300 shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl pointer-events-none"></div>

    <div className="relative z-10">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="p-1.5 sm:p-2 rounded-full bg-gray-400/15 backdrop-blur-sm border border-gray-400/30">
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 group-hover:scale-110 transition-transform">
          24/7
        </span>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">Always available</p>
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
