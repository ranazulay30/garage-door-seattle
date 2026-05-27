import type { Metadata } from "next"
import Image from "next/image"
import {
  Phone,
  ArrowRight,
  Check,
  Star,
  Wrench,
  DoorOpen,
  Settings,
  Zap,
  Shield,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PPCNavbar } from "@/components/ppc/ppc-navbar"
import { TrustStrip } from "@/components/ppc/trust-strip"
import { PPCLeadForm } from "@/components/ppc/ppc-lead-form"
import { PPCFooter } from "@/components/ppc/ppc-footer"
import { StickyCTABar } from "@/components/ppc/sticky-cta-bar"

export const metadata: Metadata = {
  title: "Seattle Garage Door Service | Same-Day Repair & Installation | Local Master",
  description:
    "Seattle's top-rated garage door company. Same-day repair, new installations, and opener service. Licensed & insured. Free estimates. Call (206) 555-1234.",
}

const services = [
  {
    icon: Wrench,
    title: "Expert Repair",
    desc: "Fast same-day repair for springs, cables, panels, rollers, and openers.",
  },
  {
    icon: DoorOpen,
    title: "New Installation",
    desc: "Premium residential and commercial doors from top brands. Free in-home design consultation.",
  },
  {
    icon: Settings,
    title: "Opener Service",
    desc: "Installation and repair of smart, chain-drive, and belt-drive opener systems.",
  },
  {
    icon: Zap,
    title: "24/7 Emergency",
    desc: "Stuck or broken door at night? We offer round-the-clock emergency response.",
  },
]

const reviews = [
  {
    name: "Sarah M.",
    location: "Ballard, Seattle",
    text: "They came out the same day I called and had my broken spring replaced within an hour. Extremely professional!",
  },
  {
    name: "David T.",
    location: "Queen Anne",
    text: "Our new carriage house door looks incredible. The crew was on time, clean, and incredibly skilled.",
  },
  {
    name: "Linda K.",
    location: "Bellevue, WA",
    text: "Most fair and transparent company I've worked with. No pressure sales, just honest advice. Customer for life.",
  },
]

export default function PPCGeneral() {
  return (
    <>
      <PPCNavbar />
      <TrustStrip />

      {/* Hero with form */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-start gap-8 py-10 lg:grid-cols-5 lg:gap-14 lg:py-16">
            {/* Left copy */}
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

              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary ring-1 ring-primary/20">
                <Shield className="size-4" />
                Seattle&apos;s #1 Rated Garage Door Company
              </div>

              <h1 className="font-[var(--font-heading)] text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
                Garage Door Repair & Installation in{" "}
                <span className="text-primary">Seattle</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                From emergency repairs to brand-new door installations, Local
                Master Garage Door has served the greater Seattle area for 15+
                years with honest pricing and guaranteed satisfaction.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary px-8 text-base font-bold text-white hover:bg-primary/90"
                >
                  <a href="#lead-form">
                    Get Free Estimate
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

              <ul className="mt-2 flex flex-col gap-2.5">
                {[
                  "Same-day service available 7 days a week",
                  "Upfront pricing -- no hidden fees, no surprises",
                  "Licensed, bonded & insured in Washington State",
                  "Warranty on all parts and labor",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 hidden overflow-hidden rounded-2xl shadow-lg lg:block">
                <Image
                  src="/images/technician-door.png"
                  alt="Local Master technician servicing a residential garage door in Seattle"
                  width={700}
                  height={420}
                  className="aspect-[5/3] w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <PPCLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
              Complete Garage Door Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              One company for everything your garage door needs.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border/50"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
            Our Team in Action
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: "/images/technician-door.png",
                alt: "Technician servicing a residential garage door",
                label: "Residential Repair",
              },
              {
                src: "/images/hero-technician.png",
                alt: "Technician working on a garage door opener",
                label: "Opener Installation",
              },
              {
                src: "/images/technician-repair.png",
                alt: "Technician with power drill inspecting garage door",
                label: "Maintenance",
              },
              {
                src: "/images/seattle-truck.png",
                alt: "Local Master service truck in Seattle",
                label: "Serving All of Seattle",
              },
            ].map((photo) => (
              <div
                key={photo.label}
                className="relative overflow-hidden rounded-2xl ring-1 ring-border/50"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={400}
                  className="aspect-square object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-14">
                  <p className="text-sm font-semibold text-white">
                    {photo.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Divider */}
      <section className="bg-white py-14 lg:py-20">
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
      <section className="bg-secondary py-16 lg:py-20">
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
                className="rounded-2xl bg-white p-6 ring-1 ring-border/50"
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

      {/* How It Works */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-center font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
            How It Works
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Call or Request a Quote",
                desc: "Reach us by phone or submit the quick form. We respond in 15 minutes or less.",
              },
              {
                step: "2",
                title: "Get an Upfront Price",
                desc: "Our technician inspects the issue and provides a clear price before any work starts.",
              },
              {
                step: "3",
                title: "We Get It Done",
                desc: "Most repairs completed same-day. Installations typically done within one day. All backed by warranty.",
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
            Get Your Garage Door Fixed or Replaced Today
          </h2>
          <p className="mt-3 text-base text-white/75">
            Same-day service available. Free estimates with no obligation.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 text-base font-bold text-primary hover:bg-white/90"
            >
              <a href="#lead-form">
                Get Free Estimate
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
