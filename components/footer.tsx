import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { cities } from "@/lib/cities"

const services = [
  { name: "Garage Door Repair", href: "#services" },
  { name: "New Door Installation", href: "#services" },
  { name: "Opener Systems", href: "#services" },
  { name: "Spring Replacement", href: "#services" },
  { name: "Safety Inspections", href: "#services" },
  { name: "Emergency Service", href: "tel:+12065551234" },
]

const quickLinks = [
  { name: "About Us", href: "#why-us" },
  { name: "Service Areas", href: "#service-areas" },
  { name: "Customer Reviews", href: "#testimonials" },
  { name: "Free Estimate", href: "#contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-[#0f2135] text-white"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Pre-footer CTA strip */}
      <div className="bg-accent/90 py-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-bold text-white text-sm sm:text-base">
            🚨 Garage door emergency? We&apos;re available 24/7.
          </p>
          <a
            href="tel:+12065551234"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-accent hover:bg-white/90 transition-colors shrink-0"
          >
            <Phone className="size-4" aria-hidden="true" />
            (206) 555-1234 — Call Now
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Local Master Garage Door"
              width={200}
              height={72}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/55 max-w-xs">
              Seattle&apos;s trusted garage door experts since 2009. Licensed, bonded &amp; insured. Professional service with upfront pricing and a satisfaction guarantee.
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
              <a href="tel:+12065551234" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="size-4 shrink-0 text-white/30" aria-hidden="true" />
                (206) 555-1234
              </a>
              <a href="mailto:info@localmastergaragedoor.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="size-4 shrink-0 text-white/30" aria-hidden="true" />
                info@localmastergaragedoor.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-white/30" aria-hidden="true" />
                Seattle &amp; Greater Puget Sound, WA
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-4 shrink-0 text-white/30" aria-hidden="true" />
                Mon–Sat 7AM–8PM · 24/7 Emergency
              </span>
            </div>

            {/* Social links */}
            <div className="mt-5 flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="size-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="size-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="text-sm text-white/55 transition-colors hover:text-white">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-white/55 transition-colors hover:text-white">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Service Areas</h4>
            <ul className="flex flex-col gap-2.5">
              {cities.slice(0, 9).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {city.name}, WA
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#service-areas" className="text-sm font-medium text-white/75 hover:text-white transition-colors">
                  View all cities →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <p>© {year} Local Master Garage Door LLC. All rights reserved. Licensed &amp; Insured in Washington State. License #LOCALM*123AB.</p>
          <p>Designed &amp; built for local search dominance.</p>
        </div>
      </div>
    </footer>
  )
}
