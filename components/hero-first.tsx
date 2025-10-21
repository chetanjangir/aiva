"use client";

import * as React from "react";
import { Play, X, Volume2, VolumeX, Maximize2, Pause } from "lucide-react";

const PREVIEW_URL =
  "https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/deepaiva-preview";
const VIDEO_URL =
  "https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/aiva-deeo-new";

export function HeroFirstSection() {
  const [open, setOpen] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const [previewMuted, setPreviewMuted] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const previewVideoRef = React.useRef<HTMLVideoElement>(null);
  const mainVideoRef = React.useRef<HTMLVideoElement>(null);

  const togglePreviewSound = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (previewVideoRef.current) {
      previewVideoRef.current.muted = !previewMuted;
      setPreviewMuted(!previewMuted);
    }
  };

  const togglePreviewPlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (previewVideoRef.current) {
      if (isPlaying) {
        previewVideoRef.current.pause();
      } else {
        previewVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (mainVideoRef.current) {
      const videoEl = mainVideoRef.current as HTMLVideoElement & {
        requestFullscreen?: () => Promise<void>;
      };
      if (videoEl.requestFullscreen) {
        videoEl.requestFullscreen();
      }
    }
  };

  return (
    <section className="relative hero-gradient">
      <div className="container mx-auto px-4 mt-12 py-8 md:py-12">
        {/* Heading */}
        <div className="flex items-center justify-center px-4">
          <div className="flex flex-col justify-start items-center text-center gap-4 w-[95%] sm:w-[80%] md:w-[50%] max-w-[45rem] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl">
              AI Human that talks, <br /> engages & sells

            </h1>
            <p className="mt-6 text-gray-300/70 text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg">
              Scale your sales 24*7, {" "}
              <br className="lg:hidden block" />
              anywhere, no language boundaries.

            </p>
          </div>
        </div>

        {/* Video Preview */}
        <div className="mt-10 md:mt-12 mx-auto w-full max-w-4xl">
          <div
            className={`relative aspect-video overflow-hidden rounded-2xl border-4 group transition-all duration-500 hover:scale-[1.02]
              ${isHovering
                ? "border-purple-500/70 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                : "border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
              }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setOpen(true)}
          >
            {/* Continuous glow border */}
            <div className="absolute inset-0 rounded-2xl border border-purple-500/50 animate-border-glow pointer-events-none"></div>

            {/* Preview Video */}
            <video
              ref={previewVideoRef}
              src={PREVIEW_URL}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              autoPlay
              muted={previewMuted}
              loop
              playsInline
              preload="metadata"
              aria-label="AIVA video preview"
            />



            {/* Play Button */}
            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${isHovering ? "opacity-100" : "opacity-90"
                }`}
            >
              <button
                aria-label="Play full video"
                className="group relative h-10 sm:h-12 px-6 sm:px-8 rounded-sm shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm sm:text-base font-semibold flex items-center gap-3 whitespace-nowrap transition-all duration-300 cursor-pointer"
              >
                <Play className="h-5 w-5 fill-current group-hover:scale-110 transition-transform duration-300" />
                <span>See It in Action</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Video Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 rounded-2xl border-2 border-purple-500/40 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0  right-0 z-10 p-2 bg-gradient-to-br  to-transparent flex justify-between items-center">
              {/* <h3 className="text-white font-semibold text-lg">
                AI Humans in Action
              </h3> */}
              <div className="flex gap-2">
                {/* <button
                  onClick={handleFullscreen}
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer"
                >
                  <Maximize2 className="h-5 w-5 text-white" />
                </button> */}
                <button
                  onClick={() => setOpen(false)}
                  className="h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-black/20 flex items-center justify-center hover:rotate-90 transition-transform cursor-pointer"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            {/* Main Video */}
            <div className="relative w-full">
              <video
                ref={mainVideoRef}
                src={VIDEO_URL}
                controls
                autoPlay
                playsInline
                className="w-full h-auto md:aspect-video aspect-[16/9] object-cover rounded-2xl transition-all duration-500"
                // style={{ maxHeight: "80vh" }}
              />
              {/* Continuous glow border */}
              <div className="absolute inset-0 rounded-2xl border border-pink-500/50 animate-border-glow pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
