"use client"

import { useEffect, useRef, useState } from "react"

interface ShopifyFlashCardProps {
  href?: string
  delay?: number
  rememberDismiss?: boolean
}

const STORAGE_KEY = "aiva_shopify_flash_dismissed"

export default function ShopifyFlashCard({
  href = "https://apps.shopify.com/aiva-ai-video-shopping-advisor",
  delay = 7000,
  rememberDismiss = false,
}: ShopifyFlashCardProps) {
  const [showDesktop, setShowDesktop] = useState(false)
  const [showMobile, setShowMobile] = useState(true)

  // separate "mounted" flags so each can unmount independently
  const [cardMounted, setCardMounted] = useState(true)
  const [barMounted, setBarMounted] = useState(true)

  const cardHideTimer = useRef<number | null>(null)
  const barHideTimer = useRef<number | null>(null)

  /* =========================================================
     SHOW / HIDE LOGIC
  ========================================================= */

  useEffect(() => {
    if (rememberDismiss) {
      const wasDismissed = window.localStorage.getItem(STORAGE_KEY)

      if (wasDismissed === "1") {
        setShowMobile(false)
        setShowDesktop(false)
        setCardMounted(false)
        setBarMounted(false)
        return
      }
    }

    // Marquee bar visible immediately
    setShowMobile(true)

    // Desktop card appears after delay
    const timer = window.setTimeout(() => {
      setShowDesktop(true)
    }, delay)

    return () => {
      window.clearTimeout(timer)
      if (cardHideTimer.current !== null) window.clearTimeout(cardHideTimer.current)
      if (barHideTimer.current !== null) window.clearTimeout(barHideTimer.current)
    }
  }, [delay, rememberDismiss])

  /* =========================================================
     CLOSE — card only
  ========================================================= */

  const handleCloseCard = () => {
    setShowDesktop(false)

    if (rememberDismiss) {
      window.localStorage.setItem(STORAGE_KEY, "1")
    }

    cardHideTimer.current = window.setTimeout(() => {
      setCardMounted(false)
    }, 600)
  }

  /* =========================================================
     CLOSE — marquee bar only
  ========================================================= */

  const handleCloseBar = () => {
    setShowMobile(false)

    barHideTimer.current = window.setTimeout(() => {
      setBarMounted(false)
    }, 600)
  }

  return (
    <>
      {cardMounted && (
        <aside
          aria-label="Shopify launch announcement"
          className={[
            "hidden lg:flex",
            "fixed left-6 bottom-4 z-[999999]",
            "h-[150px] w-[340px]",
            "box-border overflow-hidden",
            "flex-col",
            "rounded-[16px]",
            "border border-white/[0.10]",
            "bg-[linear-gradient(145deg,rgba(22,18,42,0.98),rgba(9,11,26,0.99))]",
            "p-[18px]",
            "shadow-[0_24px_65px_rgba(0,0,0,0.42),0_8px_25px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.055)]",
            "backdrop-blur-[18px]",
            "transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            showDesktop
              ? "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto"
              : "-translate-x-[35px] translate-y-[12px] scale-[0.985] opacity-0 pointer-events-none",
          ].join(" ")}
        >
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-5
              right-5
              top-0
              h-px
              bg-[linear-gradient(90deg,transparent,rgba(82,224,255,0.65),rgba(135,104,255,0.55),transparent)]
              opacity-75
            "
          />

          {/* Cyan glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-[100px]
              -left-[80px]
              h-[220px]
              w-[220px]
              rounded-full
              bg-[radial-gradient(circle,rgba(44,210,255,0.09),transparent_68%)]
            "
          />

          {/* Purple glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-[90px]
              -top-[90px]
              h-[190px]
              w-[190px]
              rounded-full
              bg-[radial-gradient(circle,rgba(135,104,255,0.08),transparent_70%)]
            "
          />

          {/* Close button */}
          <button
            type="button"
            onClick={handleCloseCard}
            aria-label="Dismiss announcement"
            className="
              absolute
              right-[10px]
              top-[10px]
              z-30
              flex
              h-[22px]
              w-[22px]
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.06]
              bg-white/[0.035]
              text-white/[0.40]
              transition-colors
              duration-200
              hover:border-white/[0.12]
              hover:bg-white/[0.08]
              hover:text-white
              cursor-pointer
            "
          >
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* Card content */}
          <div className="relative z-10 flex h-full items-start gap-4">
            {/* Shopify icon */}
            <ShopifyIcon />

            <div className="min-w-0 flex-1 pr-5">
              <p
                className="
                  mb-1.5
                  text-[8px]
                  font-semibold
                  uppercase
                  leading-none
                  tracking-[0.16em]
                  text-[#f5c518]/80
                "
              >
                Just launched
              </p>

              <h3
                className="
                  m-0
                  max-w-[240px]
                  text-[19px]
                  font-semibold
                  leading-[1.12]
                  tracking-[-0.035em]
                  text-white/[0.96]
                "
              >
                AIVA is now on Shopify
              </h3>

              <p
                className="
                  mt-2
                  max-w-[245px]
                  text-[10px]
                  font-normal
                  leading-[1.45]
                  text-[#c6c0d6]/[0.67]
                "
              >
                Add the AI video shopping advisor to your
                Shopify store and engage shoppers 24/7.
              </p>

              {/* CTA */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-2.5
                  inline-flex
                  h-[30px]
                  items-center
                  justify-center
                  gap-2
                  rounded-[8px]
                  bg-gradient-to-br
                  from-[#f8d64e]
                  to-[#f5c518]
                  px-3
                  text-[10px]
                  font-semibold
                  leading-none
                  text-[#24133b]
                  shadow-[0_7px_20px_rgba(245,197,24,0.13),inset_0_1px_0_rgba(255,255,255,0.28)]
                  transition-all
                  duration-200
                  hover:-translate-y-px
                  hover:brightness-105
                  cursor-pointer
                "
              >
                <span>View on App Store</span>

                <svg
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-[2px]
                  "
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </aside>
      )}

      {/* =======================================================
          ANNOUNCEMENT BAR  (SaleAssist style)
          Desktop: single centered line, fixed (no scroll)
          Mobile:  same sentence, scrolling
      ======================================================= */}

      {barMounted && (
        <div
          className={[
            "fixed",
            "left-0",
            "right-0",
            "top-[80px]",
            "md:top-[96px]",
            "z-[40]",
            "h-[44px]",
            "w-full",
            "overflow-hidden",
            "border-y",
            "border-white/[0.08]",
            "bg-[linear-gradient(90deg,#150e2e,#211044,#150e2e)]",
            "shadow-[0_4px_20px_rgba(0,0,0,0.28)]",
            "transition-all",
            "duration-500",
            showMobile
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          {/* Top gold line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-40
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#f5c518]/45
              to-transparent
            "
          />

          {/* ---------- DESKTOP: centered, fixed (no scroll) ---------- */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center px-14">
            <Announcement href={href} />
          </div>

          {/* ---------- MOBILE: scrolling single line ---------- */}
          <div className="md:hidden absolute inset-y-0 left-0 right-[44px] overflow-hidden">
            <MovingText href={href} />
          </div>

          {/* Right fade (mobile only, under close button) */}
          <div
            aria-hidden="true"
            className="
              md:hidden
              pointer-events-none
              absolute
              right-[44px]
              top-0
              bottom-0
              z-20
              w-8
              bg-gradient-to-l
              from-[#150e2e]
              to-transparent
            "
          />

          {/* Close button — right */}
          <button
            type="button"
            onClick={handleCloseBar}
            aria-label="Dismiss announcement"
            className="
              absolute
              right-0
              top-0
              z-30
              flex
              h-[44px]
              w-[44px]
              items-center
              justify-center
              text-white/50
              transition-colors
              duration-200
              hover:text-white
              cursor-pointer
            "
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

/* ===============================================================
   ANNOUNCEMENT  —  single sentence: icon + text + Click here
=============================================================== */

function Announcement({ href }: { href: string }) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap text-[13.5px] leading-none text-white/90">
      <ShopifyIcon size="sm" />
      <span>
        <span className="font-semibold text-[#f5c518]">Exciting News!</span>{" "}
        AIVA is now live on the Shopify App Store
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#f5c518] underline underline-offset-2 hover:text-[#ffd94a] cursor-pointer"
      >
        Click here
      </a>
      <span className="text-white/75">to add it to your store 🎉🚀</span>
    </div>
  )
}

/* ===============================================================
   MOVING TEXT  —  mobile scroll, same sentence repeated
=============================================================== */

function MovingText({ href }: { href: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const positionRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const track = trackRef.current

    if (!track) return

    const speed = 45 // px per second

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time
      }

      const delta = Math.min(
        (time - lastTimeRef.current) / 1000,
        0.05
      )

      lastTimeRef.current = time

      positionRef.current -= speed * delta

      const firstGroup =
        track.firstElementChild as HTMLElement | null

      if (firstGroup) {
        const groupWidth = firstGroup.offsetWidth

        if (Math.abs(positionRef.current) >= groupWidth) {
          positionRef.current += groupWidth
        }
      }

      track.style.transform =
        `translate3d(${positionRef.current}px, 0, 0)`

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
      lastTimeRef.current = null
    }
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="AIVA Shopify App"
      className="block h-full min-w-max cursor-pointer"
    >
      <div
        ref={trackRef}
        className="flex h-full min-w-max items-center whitespace-nowrap will-change-transform"
      >
        {/* Group 1 */}
        <MarqueeSentence />
        {/* Group 2 — duplicate for seamless loop */}
        <MarqueeSentence />
      </div>
    </a>
  )
}

function MarqueeSentence() {
  return (
    <div className="flex h-full shrink-0 items-center whitespace-nowrap pr-10 pl-4">
      <span className="text-[12.5px] leading-none text-white/90">
        <span className="font-semibold text-[#f5c518]">Exciting News!</span>{" "}
        AIVA is now live on the Shopify App Store
      </span>
      <span className="ml-2 text-[12.5px] font-semibold text-[#f5c518] underline underline-offset-2">
        Click here
      </span>
      <span className="ml-2 text-[12.5px] text-white/75">
        to add it to your store 🎉🚀
      </span>
    </div>
  )
}

/* ===============================================================
   SHOPIFY ICON
=============================================================== */

function ShopifyIcon({
  size = "md",
}: {
  size?: "sm" | "md"
}) {
  const small = size === "sm"

  return (
    <div
      className={[
        "relative",
        "flex",
        "shrink-0",
        "items-center",
        "justify-center",
        "bg-[linear-gradient(145deg,#9acb4c,#83b63b)]",
        "shadow-[0_8px_22px_rgba(149,191,71,0.15)]",
        small
          ? "h-[24px] w-[24px] rounded-[7px]"
          : "h-[44px] w-[44px] rounded-[11px]",
      ].join(" ")}
    >
      {/* Inner border */}
      <div
        className={[
          "absolute",
          "border",
          "border-white/[0.17]",
          small
            ? "inset-px rounded-[6px]"
            : "inset-px rounded-[10px]",
        ].join(" ")}
      />

      {/* Shopify logo */}
      <svg
        viewBox="0 0 448 512"
        width={small ? 13 : 22}
        height={small ? 13 : 22}
        fill="#ffffff"
        aria-hidden="true"
      >
        <path d="M388.32 104.1a4.66 4.66 0 0 0-4.4-4c-2 0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L448 471.2s-59.2-399.5-59.68-402.9zM294.07 40.63a116.24 116.24 0 0 0-7.21-17.61C276.05 2.41 260.44-.8 254 .81c-.4 0-6.43 1.6-8 2.4-8-2.4-16.83-6.41-32.44-3.21C170.83.81 148 43.83 138.61 90.05c-4 15.61-7.61 30.42-8 43.63-24.82 8-46.83 16-72.85 24.83a25 25 0 0 0-16 27.22C55.36 216.9 83 512 83 512l304.32-58.4-93.25-412.97zm-99.68 20l-25.61 8c1.6-11.21 5.61-25.62 12.81-39.23 3.2-6.41 8.81-13.62 14.42-17.62 5.61 12.02 5.61 27.63 5.61 27.63l-7.23 21.22zm-25.61-52.44c4.81 0 8.81 1.6 12 3.21-5.61 3.2-11.21 8-16 14.41-8.81 11.21-15.61 28.82-18.42 45.63l-21.61 6.41C111.19 78.85 135.21 30.42 168.78 8.19zm14.42 245.92c1.6 26.42 71.25 32 75.25 94 3.2 48.83-25.61 82.06-67.65 84.86-50.83 3.2-78.85-26.82-78.85-26.82l10.81-45.63s28 21.22 50.43 19.61c14.41-.8 20-12.81 19.21-20.82-2.4-34.82-59.24-32.82-62.84-89.66-3.21-47.23 28-95.26 96.86-99.26 27.22-1.6 41.23 5.61 41.23 5.61l-16 60.44s-18.42-8.41-40.43-6.81c-32 2.4-32.84 22.42-32.03 30.42z" />
      </svg>
    </div>
  )
}