import type { Metadata } from "next"
import Image from "next/image"
import {
  Phone,
  ArrowRight,
  Check,
  Star,
  Wrench,
  Cog,
  Settings,
  Zap,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PPCNavbar } from "@/components/ppc/ppc-navbar"
import { TrustStrip } from "@/components/ppc/trust-strip"
import { PPCLeadForm } from "@/components/ppc/ppc-lead-form"
import { PPCFooter } from "@/components/ppc/ppc-footer"
import { StickyCTABar } from "@/components/ppc/sticky-cta-bar"

export const metadata: Metadata = {
  title: "Garage Door Repair Seattle | Same-Day Service | Local Master",
  description:
    "Fast, affordable garage door repair in Seattle. Broken spring? Off-track door? We fix it today. $50 OFF your first repair. Call (206) 555-1234 now!",
}

const repairServices = [
  {
    icon: Cog,
    title: "Broken Spring Repair",
    desc: "Torsion & extension spring replacement with high-cycle parts for lasting performance.",
  },
  {
    icon: Wrench,
    title: "Off-Track Doors",
    desc: "We realign and repair off-track garage doors safely and efficiently.",
  },
  {
    icon: Settings,
    title: "Opener Repair",
    desc: "Motor, remote, and sensor troubleshooting for all major opener brands.",
  },
  {
    icon: Zap,
    title: "Cable & Roller Repair",
    desc: "Frayed cables and worn rollers replaced fast to restore smooth operation.",
  },
]

const reviews = [
  {
    name: "Sarah M.",
    location: "Ballard, Seattle",
    text: "They came out the same day I called and had my broken spring replaced within an hour. Extremely professional and the price was exactly what they quoted.",
  },
  {
    name: "James R.",
    location: "Capitol Hill",
    text: "My garage door was off-track at 9pm. They sent someone within 45 minutes and fixed it on the spot. Incredible emergency service!",
  },
  {
    name: "Linda K.",
    location: "Bellevue, WA",
    text: "After getting quotes from three companies, Local Master was the most fair and transparent. No pressure sales, just honest advice.",
  },
]

export default function GarageDoorRepairPPC() {
  return (
    <>
      <PPCNavbar />
      <TrustStrip />

      {/* Hero with form */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-start gap-8 py-10 lg:grid-cols-5 lg:gap-14 lg:py-16">
            {/* Left copy - 3 cols */}
            <div className="flex flex-col gap-5 lg:col-span-3 lg:py-4">
              {/* Logo visible on mobile above fold */}
              <Image
                src="/images/logo.png"
                alt="Local Master Garage Door"
                width={280}
                height={100}
                className="h-24 w-auto md:h-28 lg:hidden"
                priority
              />

              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-bold text-amber-700 ring-1 ring-amber-200">
                <Zap className="size-4" />
                $50 OFF Your First Repair
              </div>

              <h1 className="font-[var(--font-heading)] text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
                Fast Garage Door Repair in{" "}
                <span className="text-primary">Seattle</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Broken spring? Off-track door? Noisy opener? Our licensed
                technicians deliver same-day repairs with upfront pricing and a
                full warranty on parts and labor.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary px-8 text-base font-bold text-white hover:bg-primary/90"
                >
                  <a href="#lead-form">
                    Get Free Quote
                    <ArrowRight className="ml-1 size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary px-8 text-base font-bold text-primary"
                >
                  <a href="tel:+12065551234">
                    <Phone className="mr-1 size-4" />
                    (206) 555-1234
                  </a>
                </Button>
              </div>

              {/* Urgency points */}
              <ul className="mt-2 flex flex-col gap-2.5">
                {[
                  "Same-day service -- most repairs done in under 2 hours",
                  "No hidden fees -- upfront pricing before work begins",
                  "Warranty on all parts and labor",
                  "Available 7 days a week, including 24/7 emergency",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Hero image on desktop */}
              <div className="mt-4 hidden overflow-hidden rounded-2xl shadow-lg lg:block">
                <Image
                  src="/images/technician-repair.png"
                  alt="Local Master technician repairing a garage door in Seattle"
                  width={700}
                  height={420}
                  className="aspect-[5/3] w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right form - 2 cols */}
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <PPCLeadForm headline="Schedule Your Repair Today" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Repair */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
              What We Repair
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fast, warrantied repair for every garage door issue.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {repairServices.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border/50"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Divider */}
      <section className="bg-secondary/40 py-14 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 lg:px-8">
          <div className="flex w-full items-center gap-6">
            <div className="h-px flex-1 bg-border" />
            <Image
              src="/images/logo.png"
              alt="Local Master Garage Door"
              width={360}
              height={130}
              className="h-28 w-auto md:h-36 lg:h-44"
            />
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-base font-medium tracking-wide text-muted-foreground md:text-lg">
            {"Seattle's Trusted Overhead Door Experts"}
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
              What Seattle Homeowners Are Saying
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="font-bold text-foreground">4.9/5</span>
              <span className="text-sm text-muted-foreground">
                from 200+ reviews
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl bg-secondary/60 p-6 ring-1 ring-border/50"
              >
                <Quote className="mb-3 size-6 text-primary/20" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  {r.text}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {r.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {r.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-center font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
            How It Works
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Call or Fill Out Form",
                desc: "Reach us by phone or submit the quick form above. We respond in 15 minutes or less.",
              },
              {
                step: "2",
                title: "Get Upfront Quote",
                desc: "Our technician inspects the issue on-site and provides an exact price before any work begins.",
              },
              {
                step: "3",
                title: "Same-Day Repair",
                desc: "We complete the repair on the spot, clean up, and back your work with our full warranty.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center text-white lg:px-8">
          <Image
            src="/images/logo.png"
            alt="Local Master Garage Door"
            width={240}
            height={85}
            className="mx-auto mb-8 h-20 w-auto brightness-0 invert md:h-24"
          />
          <h2 className="font-[var(--font-heading)] text-2xl font-bold md:text-3xl">
            Don&apos;t Wait -- Get Your Garage Door Fixed Today
          </h2>
          <p className="mt-3 text-base text-white/75">
            Same-day service available now. Save $50 on your repair when you book today.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 text-base font-bold text-primary hover:bg-white/90"
            >
              <a href="#lead-form">
                Get Free Quote
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 px-8 text-base font-bold text-white hover:bg-white/10"
            >
              <a href="tel:+12065551234">
                <Phone className="mr-1 size-4" />
                Call (206) 555-1234
              </a>
            </Button>
          </div>
        </div>
      </section>

      <PPCFooter />
      <StickyCTABar />
    </>
  )
}
