"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Sparkles, Video, Volume2, VolumeX, Pause } from "lucide-react"
import { EarlyAccessModal } from "./early-access-modal"

export function MeetAivaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoUrl = "https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/aiva-saleassist"

  const videoRef = useRef<HTMLVideoElement>(null)
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPlaying) {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }

      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 2000)
    } else {
      setShowControls(true)
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }
    }

    return () => {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }
    }
  }, [isPlaying])

  const toggleMute = () => {
    if (videoRef.current) {
      const willUnmute = isMuted
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      if (willUnmute) {
        videoRef.current.volume = 1.0
        videoRef.current.play().catch(() => { })
      }
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMouseEnter = () => {
    if (isPlaying) setShowControls(true)
  }

  const handleMouseLeave = () => {
    if (isPlaying) setShowControls(false)
  }

  // ✅ Text Card ke points — JSON array
  const points = [
    {
      title: "Natural Conversations",
      description: "AIVA understands context and responds like a real person",
    },
    {
      title: "24/7 Availability",
      description: "Never miss a customer interaction, day or night",
    },
    {
      title: "Instant Responses",
      description: "Engage customers in real-time with zero wait time",
    },
    {
      title: "Hyper-Realistic Avatars",
      description: "Create lifelike virtual humans that mirror real facial expressions and gestures.",
    },
    {
      title: "Easy Integration",
      description: "Seamlessly embed avatars into your website, product demos, or marketing campaigns.",
    },
    {
      title: "Multi-Language Support",
      description: "Speak to your audience in multiple languages with synced lip-movements.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-chart-3/5"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16 text-center relative z-10">
        {/* Heading & top section same */}
        <div className="mb-8 md:mb-12">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary to-accent p-2 animate-pulse-glow mx-auto">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center relative overflow-hidden">
                <Video className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 text-primary animate-float" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
              </div>
            </div>
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl animate-pulse"></div>
            <Sparkles className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
            <Sparkles className="absolute -bottom-4 -left-4 w-4 h-4 md:w-6 md:h-6 text-accent animate-pulse animation-delay-1000" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance px-4">
          <span className="text-foreground">Introducing </span>
          <span className="gradient-text">AIVA</span>
          <span className="text-foreground"> – Your AI Video Agent</span>
        </h2>

        {/* Video + Text cards */}
        <div className="mb-8 md:mb-12 max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-8">
            {/* ✅ Video Card */}
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm p-0 flex items-center justify-center">
              <CardContent className="p-0 flex items-center justify-center max-h-[80vh]">
                <div
                  className="relative group w-full flex justify-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute top-10 left-2 md:top-12 md:left-2 z-10 flex items-center gap-1 px-1 py-1 rounded-full">
                    <span className="w-2 h-2 font-bold bg-red-600 rounded-full animate-pulse"></span>
                    <span className="text-red-500 font-bold text-[12px] md:text-[12px]   tracking-wider">LIVE</span>
                  </div>

                  <video
                    ref={videoRef}
                    className="max-h-[80vh] w-full rounded-xl shadow-lg object-contain"
                    muted={isMuted}
                    loop
                    playsInline
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>

                  <Button
                    variant="default"
                    size="icon"
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                              bg-gradient-to-br from-yellow/80 to-yellow/60 text-black border border-white/30
                              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                              h-12 w-12 md:h-16 md:w-16 rounded-full overflow-visible cursor-pointer
                              ${showControls ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                              hover:scale-115 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]
                              active:scale-95`}
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePlay()
                    }}
                  >
                    {/* Smooth glowing ripple waves */}
                    <span className="absolute inset-0 rounded-full border border-white/60 animate-[ping_2s_linear_infinite] opacity-60" />
                    <span className="absolute inset-0 rounded-full border border-white/40 animate-[ping_2s_linear_infinite] opacity-40 [animation-delay:400ms]" />
                    <span className="absolute inset-0 rounded-full border border-white/20 animate-[ping_2s_linear_infinite] opacity-30 [animation-delay:800ms]" />

                    {/* Soft ambient light */}
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] blur-md" />

                    {/* Icon zone */}
                    {isPlaying ? (
                      <Pause className="h-7 w-7 md:h-9 md:w-9 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    ) : (
                      <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-6 w-6 md:h-8 md:w-8 mb-0.5" />
                      </div>
                    )}
                  </Button>


                  <Button
                    variant="secondary"
                    size="icon"
                    className={`absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/50 hover:bg-black/70 text-white border-white/20 transition-opacity duration-300 cursor-pointer h-8 w-8 md:h-10 md:w-10 ${isPlaying && showControls ? "opacity-100" : "opacity-0"
                      }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleMute()
                    }}
                  >
                    {isMuted ? (
                      <VolumeX className="h-3 w-3 md:h-4 md:w-4 cursor-pointer" />
                    ) : (
                      <Volume2 className="h-3 w-3 md:h-4 md:w-4 cursor-pointer" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm flex items-center">
              <CardContent className="p-4 md:p-6 space-y-2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-left">
                  Experience the Future of Customer Engagement
                </h3>
                <div className="space-y-3 text-left">
                  {points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-primary text-lg md:text-xl flex-shrink-0 mt-1">✓</span>
                      <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                        <span className="font-semibold text-foreground">{point.title}:</span> {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Button
          size="lg"
          variant="outline"
          className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg px-6 py-5 md:px-8 md:py-6 animate-glow font-semibold cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          Get Started with AIVA
        </Button>
      </div>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
