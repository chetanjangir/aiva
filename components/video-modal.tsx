"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, X, Play, Pause } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      const video = videoRef.current

      video.currentTime = 0
      video.muted = false
      video.volume = 1.0
      setIsMuted(false)

      const handleFirstInteraction = async () => {
        if (!videoRef.current) return
        const v = videoRef.current
        v.muted = false
        v.volume = 1.0
        try {
          await v.play()
          setIsPlaying(true)
        } catch {
          // ignore
        }
      }

      const attemptPlay = async () => {
        try {
          await video.play()
          setIsPlaying(true)
        } catch {
          document.addEventListener("click", handleFirstInteraction, { once: true })
          document.addEventListener("touchstart", handleFirstInteraction, { once: true })
        }
      }

      requestAnimationFrame(() => {
        attemptPlay()
      })

      return () => {
        document.removeEventListener("click", handleFirstInteraction)
        document.removeEventListener("touchstart", handleFirstInteraction)
      }
    }
  }, [isOpen])

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const newTime = (clickX / rect.width) * duration
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)

      if (!newMutedState) {
        videoRef.current.volume = 1.0
      }
    }
  }

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.muted = false
        videoRef.current.volume = 1.0
        setIsMuted(false)

        try {
          await videoRef.current.play()
          setIsPlaying(true)
        } catch {
          // ignore
        }
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-none w-[95vw] sm:w-[90%] h-[95vh] sm:h-[90vh] max-h-[95vh] sm:max-h-[90vh] p-0 bg-black border-0 rounded-xl sm:rounded-2xl sm:max-w-none overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-black/80 hover:bg-black/90 text-white border border-white/30 rounded-full w-8 h-8 sm:w-10 sm:h-10 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            onClick={onClose}
            aria-label="Close video"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" />
          </Button>

          <div className="relative w-full max-h-full flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full max-h-[calc(95vh-1rem)] sm:max-h-[calc(90vh-2rem)] object-contain rounded-xl sm:rounded-2xl"
              loop
              playsInline
              autoPlay
              controls={false}
              preload="metadata"
              muted={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onVolumeChange={() => {
                if (videoRef.current) {
                  setIsMuted(videoRef.current.muted)
                }
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 rounded-xl sm:rounded-2xl" />

            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-white/90 text-xs sm:text-sm font-medium min-w-[42px] text-left">
                    {formatTime(currentTime)}
                  </span>
                  <div
                    className="flex-1 h-1.5 sm:h-2 bg-white/30 rounded-full cursor-pointer backdrop-blur-sm"
                    onClick={handleProgressClick}
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={duration || 0}
                    aria-valuenow={currentTime}
                    aria-label="Seek"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-200"
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm font-medium min-w-[42px] text-right">
                    {formatTime(duration)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-start">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-white/25 hover:bg-white/35 text-white border-white/30 backdrop-blur-sm rounded-full w-8 h-8 sm:w-9 sm:h-9 transition-all duration-200 shadow-lg cursor-pointer"
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" />
                    ) : (
                      <Play className="h-4 w-4 sm:h-5 sm:w-5 ml-0.5 cursor-pointer" />
                    )}
                  </Button>

                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-white/25 hover:bg-white/35 text-white border-white/30 backdrop-blur-sm rounded-full w-8 h-8 sm:w-9 sm:h-9 transition-all duration-200 shadow-lg cursor-pointer"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" />
                    ) : (
                      <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
