"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      {/* Top bar — click-to-call strip, highly visible on mobile */}
      <div className="bg-primary px-4 py-1.5 text-center text-xs font-semibold text-white sm:text-sm">
        <a href="tel:+12065551234" className="inline-flex items-center gap-1.5 hover:underline">
          <Phone className="size-3 sm:size-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">24/7 Emergency Service — Call Now:</span>
          <span className="sm:hidden">Emergency? Call Now:</span>
          <span className="font-bold">(206) 555-1234</span>
        </a>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
          scrolled ? "shadow-md bg-white" : "bg-white/95 backdrop-blur-md"
        } border-b border-border/50`}
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8 lg:py-3"
          aria-label="Main navigation"
        >
          <a href="/" className="flex items-center gap-2" aria-label="Local Master Garage Door — Home">
            <Image
              src="/images/logo.png"
              alt="Local Master Garage Door"
              width={260}
              height={90}
              className="h-14 w-auto md:h-20"
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 lg:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+12065551234"
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
              aria-label="Call us at (206) 555-1234"
            >
              <Phone className="size-4" aria-hidden="true" />
              (206) 555-1234
            </a>
            <Button asChild className="rounded-full bg-accent px-6 font-bold text-white hover:bg-accent/90 shadow-sm">
              <a href="#contact">
                Get Free Estimate
              </a>
            </Button>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+12065551234"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
              aria-label="Call (206) 555-1234"
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-secondary transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="border-t border-border/50 bg-white lg:hidden">
            <ul className="flex flex-col gap-1 px-4 py-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-border/50 px-4 py-4 flex flex-col gap-3">
              <a
                href="tel:+12065551234"
                className="flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-white"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call (206) 555-1234 — Free Estimate
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-primary py-3 text-sm font-bold text-primary hover:bg-primary/5"
              >
                Request an Estimate Online
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
