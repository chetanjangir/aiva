"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { EarlyAccessModal } from "./early-access-modal"
import Image from "next/image"

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex flex-col items-center gap-1">
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
                className="text-[10px] text-muted-foreground -m-2"
              >
                Powered by
                <span className="hover:text-primary transition-colors"> SaleAssist.ai</span>
              </a>
            </div>

            {/* Get Early Access Button */}
            <Button
              size="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </nav>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
