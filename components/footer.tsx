import Image from "next/image"
import { Twitter, Linkedin, Instagram, Youtube, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Brand + Powered by */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src="/images/design-mode/aiva-logo-new.png"
              alt="AIVA Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
            <a
              href="https://www.saleassist.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
            >
              Powered by <span className="font-medium">SaleAssist.ai</span>
            </a>
          </div>

          {/* Links */}
          <nav
            aria-label="Footer navigation"
            className="flex justify-center items-center gap-6 text-sm text-muted-foreground"
          >
            <a
              href="#"
              className="rounded-md px-2 py-1 hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-1 hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Terms
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-1 hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Contact
            </a>
          </nav>

          {/* Socials */}
          <div className="flex justify-center md:justify-end items-center gap-3" aria-label="Social media links">
            <a
              href="https://x.com/salesassist_ai"
              aria-label="Follow on X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors rounded-full p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/safemeet/"
              aria-label="Connect on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors rounded-full p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/sale.assist/"
              aria-label="Follow on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors rounded-full p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@saleassist4711"
              aria-label="Subscribe on YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors rounded-full p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/SaleAssistAI/"
              aria-label="Follow on Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors rounded-full p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-border e-full pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto">
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            {"© "}
            {new Date().getFullYear()} <span className="font-medium">AIVA</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
