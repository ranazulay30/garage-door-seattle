import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function PPCFooter() {
  return (
    <footer className="bg-[#0f2135] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Logo centered at the top */}
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Local Master Garage Door"
            width={240}
            height={85}
            className="h-20 w-auto brightness-0 invert md:h-24"
          />
        </div>

        <p className="mt-3 text-center text-sm text-white/50">
          Seattle&apos;s Trusted Overhead Door Experts
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <a href="tel:+12065551234" className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone className="size-4" />
            (206) 555-1234
          </a>
          <a href="mailto:info@localmastergaragedoor.com" className="flex items-center gap-2 transition-colors hover:text-white">
            <Mail className="size-4" />
            info@localmastergaragedoor.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="size-4" />
            Seattle & Puget Sound, WA
          </span>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Local Master Garage Door. All rights reserved. Licensed & Insured in Washington State.
          </p>
        </div>
      </div>
    </footer>
  )
}
