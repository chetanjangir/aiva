"use client";

import * as React from "react";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";

const PREVIEW_URL =
  "https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/deepaiva-preview";
const VIDEO_URL =
  "https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/deep-calling-deep-aiva.mp4";

export function HeroFirstSection() {
  const [open, setOpen] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const [previewMuted, setPreviewMuted] = React.useState(true);

  // ✅ Modal controls state (for icon UI)
  const [modalPlaying, setModalPlaying] = React.useState(true);
  const [modalMuted, setModalMuted] = React.useState(false); // ✅ default UNMUTED

  const previewVideoRef = React.useRef<HTMLVideoElement>(null);
  const mainVideoRef = React.useRef<HTMLVideoElement>(null);

  const closeModal = React.useCallback(() => {
    const v = mainVideoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setOpen(false);
  }, []);

  const togglePreviewSound = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const v = previewVideoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setPreviewMuted(v.muted);
  };

  const toggleModalPlay = React.useCallback(() => {
    const v = mainVideoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
    // state will sync via events
  }, []);

  const toggleModalMute = React.useCallback(() => {
    const v = mainVideoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    // state will sync via events
  }, []);

  // ✅ Lock background scroll + ESC close + sync modal controls (play/pause + mute)
  React.useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const v = mainVideoRef.current;

    const sync = () => {
      if (!v) return;
      setModalPlaying(!v.paused);
      setModalMuted(v.muted);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);

    if (v) {
      // ✅ Try autoplay WITH sound (unmuted). If browser blocks, fallback to muted.
      v.muted = false;
      v.volume = 1;

      v.play()
        .then(() => {
          sync();
        })
        .catch(() => {
          // Fallback: browsers that block autoplay with sound
          v.muted = true;
          setModalMuted(true);
          v.play().catch(() => {});
          sync();
        });

      v.addEventListener("play", sync);
      v.addEventListener("pause", sync);
      v.addEventListener("volumechange", sync);
      sync();
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);

      if (v) {
        v.removeEventListener("play", sync);
        v.removeEventListener("pause", sync);
        v.removeEventListener("volumechange", sync);
      }
    };
  }, [open, closeModal]);

  return (
    <section className="relative flex flex-col justify-center bg-[url('https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/hero-bg-img.jpg')] bg-cover bg-center bg-no-repeat">
      {/* ✅ Subtle overlay to make text readable */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm sm:backdrop-blur-sm z-0"></div>

      <div className="container mx-auto pb-16 px-4 mt-24 md:mt-16 py-12 md:py-12 relative z-10">
        {/* Heading */}
        <div className="flex items-center justify-center px-4">
          <div className="flex flex-col justify-start items-center text-center gap-4 w-[95%] sm:w-[80%] md:w-[50%] max-w-[45rem] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl">
              <span className="gradient-text">AI Human</span> that <br /> Talk,
              Engage & Sell
            </h1>
            <p className="mt-2 text-gray-300/70 text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg">
              Scale your sales 24×7, <br className="lg:hidden block" />
              anywhere, no language boundaries.
            </p>
          </div>
        </div>

        {/* Video Preview */}
        <div className="mt-10 md:mt-12 mx-auto w-full max-w-4xl">
          <div
            className={`relative aspect-video overflow-hidden rounded-2xl border-4 group transition-all duration-500 hover:scale-[1.02]
              ${
                isHovering
                  ? "border-purple-500/70 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                  : "border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
              }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setOpen(true)}
          >
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

            {/* 🔴 LIVE Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600/90 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              LIVE
            </div>

            {/* CTA */}
            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                isHovering ? "opacity-100" : "opacity-90"
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

      {/* Premium Responsive Video Modal */}
      {open && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-black/70 backdrop-blur-xl
            p-3 sm:p-6
          "
          onClick={closeModal}
        >
          {/* Glow layer */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-black/60 to-black/80" />
            <div className="absolute -inset-24 bg-gradient-to-r from-fuchsia-500/15 via-purple-500/10 to-cyan-500/10 blur-3xl" />
          </div>

          {/* Modal Card */}
          <div
            className="
              relative z-10
              w-full
              max-w-[520px] sm:max-w-[880px] lg:max-w-[980px]
              rounded-3xl
              border border-white/10
              bg-white/5
              shadow-[0_30px_120px_rgba(0,0,0,0.75)]
              backdrop-blur-2xl
              overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
                  AIVA Demo
                </p>
              </div>

              {/* Right controls: Play/Pause, Mute, Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleModalPlay}
                  className="
                    h-9 w-9 rounded-full
                    bg-white/10 hover:bg-white/15
                    border border-white/10
                    flex items-center justify-center
                    transition cursor-pointer
                  "
                  aria-label="Play/Pause"
                  title="Play/Pause"
                >
                  {modalPlaying ? (
                    <Pause className="h-5 w-5 text-white" />
                  ) : (
                    <Play className="h-5 w-5 text-white" />
                  )}
                </button>

                <button
                  onClick={toggleModalMute}
                  className="
                    h-9 w-9 rounded-full
                    bg-white/10 hover:bg-white/15
                    border border-white/10
                    flex items-center justify-center
                    transition cursor-pointer
                  "
                  aria-label="Mute/Unmute"
                  title="Mute/Unmute"
                >
                  {modalMuted ? (
                    <VolumeX className="h-5 w-5 text-white" />
                  ) : (
                    <Volume2 className="h-5 w-5 text-white" />
                  )}
                </button>

                <button
                  onClick={closeModal}
                  className="
                    h-9 w-9 rounded-full
                    bg-white/10 hover:bg-white/15
                    border border-white/10
                    flex items-center justify-center
                    transition cursor-pointer
                  "
                  aria-label="Close"
                  title="Close"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-5">
              <div className="mx-auto w-full max-h-[78vh] sm:max-h-[80vh]">
                <div
                  className="
                    relative w-full
                    aspect-[9/16] sm:aspect-video
                    rounded-2xl
                    bg-black
                    overflow-hidden
                    border border-white/10
                    shadow-[0_12px_40px_rgba(0,0,0,0.55)]
                  "
                >
                  {/* Soft inner bezel */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_10px_rgba(0,0,0,0.55)]" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />

                  <video
                    ref={mainVideoRef}
                    src={VIDEO_URL}
                    autoPlay
                    playsInline
                    muted={modalMuted} 
                    controls={false}
                    className="absolute inset-0 w-full h-full object-contain"
                    onClick={toggleModalPlay}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
