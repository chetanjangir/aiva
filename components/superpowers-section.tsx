import { Globe, Clock, Infinity, Headphones } from "lucide-react"

export function SuperpowersSection() {
  const superpowers = [
    {
      icon: Globe,
      title: "Multilingual conversations",
      description: "Speaks 50+ languages fluently",
    },
    {
      icon: Clock,
      title: "24/7 availability",
      description: "Never sleeps, always ready",
    },
    {
      icon: Infinity,
      title: "Unlimited interactions",
      description: "Scale without limits",
    },
    {
      icon: Headphones,
      title: "Engages, nurtures & converts",
      description: "At enterprise scale",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance px-4">
            <span className="text-foreground">Why Brands Love </span>
            <span className="gradient-text">AIVA</span>
          </h2>
        </div>

       {/* Superpowers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto">
  {superpowers.map((power, index) => {
    const Icon = power.icon
    return (
      <div
        key={index}
        className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
      >
        {/* Glassmorphism card */}
        <div className="relative bg-gradient-to-br from-yellow-500/5 via-black/40 to-amber-500/5 backdrop-blur-xl border border-yellow-500/20 group-hover:border-yellow-500/40 rounded-2xl p-6 md:p-7 flex flex-col items-center text-center h-full transition-all duration-500 shadow-lg shadow-black/50">
          {/* Glass shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          {/* Icon container */}
          <div className="mb-5 md:mb-6 relative z-10">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl scale-150 group-hover:scale-175 group-hover:bg-yellow-400/30 transition-all duration-500"></div>
              
              {/* Icon background with glassmorphism */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-600/20 backdrop-blur-md p-0.5 group-hover:from-yellow-300/30 group-hover:to-yellow-500/30 transition-all duration-500 shadow-lg shadow-yellow-500/20">
                <div className="w-full h-full rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 group-hover:bg-gradient-to-br group-hover:from-yellow-950/40 group-hover:to-black/60 transition-all duration-500">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-500" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Rotating border */}
              <div className="absolute -inset-1 rounded-full border border-yellow-500/0 group-hover:border-yellow-500/30 transition-all duration-700 group-hover:rotate-180"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2 text-center relative z-10">
            <h3 className="text-base md:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
              {power.title}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {power.description}
            </p>
          </div>

          {/* Corner glass reflections */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-full blur-sm"></div>
        </div>
      </div>
    )
  })}
</div>


        {/* Bottom highlight */}
        <div className="text-center mt-12 md:mt-8 px-4">
          <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold text-balance">
            AIVA doesn't just answer questions. It sells. It converts. It delivers premium experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
