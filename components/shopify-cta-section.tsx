import Image from "next/image"

interface ShopifyCtaSectionProps {
  href?: string
}

export function ShopifyCtaSection({
  href = "https://apps.shopify.com/aiva-ai-video-shopping-advisor",
}: ShopifyCtaSectionProps) {
  return (
    <section className="py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-[#2a1e4a] to-[#1a1435] p-6 md:p-8 shadow-[0_0_50px_rgba(245,197,24,0.05)] max-w-7xl mx-auto">
          {/* Soft gold glow accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(245,197,24,0.10),transparent_70%)]"
          />

          <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left">
            {/* Left: content */}
            <div className="max-w-xl">
              <div className="mb-3 flex justify-center md:justify-start">
                <Image
                  src="/images/shopify-logo.png"
                  alt="Shopify"
                  width={130}
                  height={37}
                  className="h-8 w-auto"
                />
              </div>

              <h2 className="text-xl font-bold leading-snug text-white md:text-2xl">
                AIVA is now live on the{" "}
                <span className="text-primary">Shopify App Store</span>
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Add your AI video shopping advisor to any Shopify store in
                minutes — engage shoppers 24/7, Integrate in minutes, No development required.
              </p>
            </div>

            {/* Right: CTA button */}
            <div className="shrink-0">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-[#24133b] shadow-[0_8px_24px_rgba(245,197,24,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <span>Get AIVA on Shopify</span>
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}