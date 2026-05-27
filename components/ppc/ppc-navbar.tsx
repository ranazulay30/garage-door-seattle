import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PPCNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8 lg:py-3">
        <Image
          src="/images/logo.png"
          alt="Local Master Garage Door logo"
          width={320}
          height={110}
          className="h-20 w-auto md:h-28"
          priority
        />

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="tel:+12065551234"
            className="flex items-center gap-2 text-sm font-bold text-primary md:text-base"
          >
            <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 md:size-10">
              <Phone className="size-4 text-primary md:size-5" />
            </div>
            <div className="hidden sm:block">
              <span className="block text-xs font-medium text-muted-foreground">Call Us Now</span>
              <span className="block text-base font-bold text-primary">(206) 555-1234</span>
            </div>
          </a>
          <Button
            asChild
            className="rounded-full bg-primary px-5 text-sm font-semibold text-white hover:bg-primary/90 md:px-6 md:text-base"
          >
            <a href="#lead-form">Get Free Quote</a>
          </Button>
        </div>
      </nav>
    </header>
  )
}
