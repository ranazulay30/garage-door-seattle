"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-white/95 px-3 pb-3 pt-2 backdrop-blur-md md:hidden">
      {/* Logo row */}
      <div className="mb-2 flex justify-center">
        <Image
          src="/images/logo.png"
          alt="Local Master Garage Door"
          width={140}
          height={50}
          className="h-10 w-auto"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="outline"
          className="flex-1 rounded-full border-primary font-semibold text-primary"
        >
          <a href="tel:+12065551234">
            <Phone className="mr-1.5 size-4" />
            Call Now
          </a>
        </Button>
        <Button
          asChild
          className="flex-1 rounded-full bg-primary font-semibold text-white hover:bg-primary/90"
        >
          <a href="#lead-form">Get Free Quote</a>
        </Button>
      </div>
    </div>
  )
}
