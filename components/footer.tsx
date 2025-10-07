import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">© 2025 AIVA. All rights reserved.</div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.saleassist.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Powered by SaleAssist.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
