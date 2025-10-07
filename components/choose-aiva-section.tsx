"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { EarlyAccessModal } from "@/components/early-access-modal"

const avatars = [
  {
    category: "HEALTHCARE",
    title: "Dr. Sarah",
    profession: "Medical Assistant",
    description: "Provide instant medical information and appointment scheduling with AI-powered assistance.",
    image: "https://ik.imagekit.io/tjtlycgp2/SaleAssist/doctorAIVA.png",
  },
  {
    category: "CUSTOMER SERVICE",
    title: "Virtual Agent",
    profession: "Customer Support",
    description: "Provide instant support and resolve queries efficiently with 24/7 availability.",
    image: "https://ik.imagekit.io/tjtlycgp2/SaleAssist/Customer-Service-AIVA.png",
  },
  {
    category: "EDUCATION",
    title: "Language Partner",
    profession: "Education Specialist",
    description: "Practice new languages with an AI partner for fluent conversations anytime.",
    image: "https://ik.imagekit.io/tjtlycgp2/SaleAssist/Teacher-AIVA.png",
  },
  {
    category: "FINANCE",
    title: "Financial Advisor",
    profession: "Finance Expert",
    description: "Offer personalized financial advice and investment strategies tailored to your goals.",
    image: "https://ik.imagekit.io/tjtlycgp2/SaleAssist/Financial-Adviser-AIVA.png",
  },
  {
    category: "HEALTHCARE",
    title: "AI Therapist",
    profession: "Mental Health Support",
    description: "Provide compassionate mental health support and guidance with empathy.",
    image: "https://ik.imagekit.io/tjtlycgp2/SaleAssist/AI_Therapist.png",
  },
  {
    category: "TECHNOLOGY",
    title: "Tech Support",
    profession: "IT Specialist",
    description: "Solve technical issues and provide expert IT assistance instantly.",
    image: "https://ik.imagekit.io/tjtlycgp2/SaleAssist/tech-support-aiva.png",
  },
]

export function ChooseAivaSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % avatars.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + avatars.length) % avatars.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  useEffect(() => {
    if (!isAutoPlay || isPaused) return

    const interval = setInterval(() => {
      handleNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlay, isPaused])

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance px-4">
        <span className="text-foreground">Choose Your Own </span>
        <span className="gradient-text">AIVA</span>
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-balance">
        <span className="text-foreground">You can get your own AIVA created too</span>
      </h2>
      <div className="relative w-full max-w-7xl mx-auto px-8">
        <div className="hidden md:flex justify-end gap-3 mb-0">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-primary hover:bg-primary/90 border-primary text-primary-foreground cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            <span className="sr-only">Previous avatar</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-primary hover:bg-primary/90 border-primary text-primary-foreground cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            <span className="sr-only">Next avatar</span>
          </Button>
        </div>

        <div className="overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div
            className="flex justify-center items-center h-[500px] transition-transform duration-500 ease-in-out"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {avatars.map((avatar, index) => {
              let effectiveDistance = index - currentIndex
              if (effectiveDistance > avatars.length / 2) {
                effectiveDistance -= avatars.length
              } else if (effectiveDistance < -avatars.length / 2) {
                effectiveDistance += avatars.length
              }

              let transform = ""
              let opacity = 0
              let zIndex = 1

              if (effectiveDistance === 0) {
                transform = "translateX(0) scale(1) rotateY(0deg)"
                opacity = 1
                zIndex = 10
              } else if (effectiveDistance === 1) {
                transform = "translateX(350px) scale(0.85) rotateY(-15deg)"
                opacity = 0.7
                zIndex = 5
              } else if (effectiveDistance === -1) {
                transform = "translateX(-350px) scale(0.85) rotateY(15deg)"
                opacity = 0.7
                zIndex = 5
              } else if (effectiveDistance === 2) {
                transform = "translateX(600px) scale(0.7) rotateY(-25deg)"
                opacity = 0.4
                zIndex = 2
              } else if (effectiveDistance === -2) {
                transform = "translateX(-600px) scale(0.7) rotateY(25deg)"
                opacity = 0.4
                zIndex = 2
              } else {
                opacity = 0
                zIndex = 1
                transform = `translateX(${effectiveDistance * 400}px) scale(0.5) rotateY(${effectiveDistance * 15}deg)`
              }

              return (
                <div
                  key={index}
                  className={cn(
                    "absolute w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out bg-gray-900 text-white flex flex-col justify-end p-6",
                    opacity === 0 ? "pointer-events-none" : "",
                  )}
                  style={{
                    transform: transform,
                    opacity: opacity,
                    zIndex: zIndex,
                    transformOrigin: "center center",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    src={avatar.image || "/placeholder.svg"}
                    alt={avatar.title}
                    width={300}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />

                  <div className="relative z-10">
                    <span className="inline-block bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-md border border-white/25 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {avatar.category}
                    </span>

                    <h2 className="text-2xl font-bold mb-2">{avatar.title}</h2>
                    <p className="text-sm text-gray-300 mb-4">{avatar.description}</p>
                    <Button
                      variant="secondary"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-4 py-2 font-semibold cursor-pointer"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Get Demo <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-3 mt-0">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 bg-primary hover:bg-primary/90 border-primary text-primary-foreground cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous avatar</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 bg-primary hover:bg-primary/90 border-primary text-primary-foreground cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next avatar</span>
          </Button>
        </div>
      </div>

      <div className="text-center mt-16 px-4">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-8 py-6 animate-glow font-semibold cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
