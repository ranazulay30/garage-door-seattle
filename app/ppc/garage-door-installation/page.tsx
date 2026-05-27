import type { Metadata } from "next"
import Image from "next/image"
import {
  Phone,
  ArrowRight,
  Check,
  Star,
  DoorOpen,
  ShieldCheck,
  Paintbrush,
  Thermometer,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PPCNavbar } from "@/components/ppc/ppc-navbar"
import { TrustStrip } from "@/components/ppc/trust-strip"
import { PPCLeadForm } from "@/components/ppc/ppc-lead-form"
import { PPCFooter } from "@/components/ppc/ppc-footer"
import { StickyCTABar } from "@/components/ppc/sticky-cta-bar"

export const metadata: Metadata = {
  title: "Garage Door Installation Seattle | Free Estimate | Local Master",
  description:
    "Premium garage door installation in Seattle. Steel, wood, and insulated doors from top brands. Free in-home estimate. Financing available. Call (206) 555-1234.",
}

const features = [
  {
    icon: DoorOpen,
    title: "Premium Door Selection",
    desc: "Steel, wood, composite, and aluminum doors from Clopay, Amarr, Wayne Dalton, and more.",
  },
  {
    icon: Thermometer,
    title: "Insulated Options",
    desc: "Energy-efficient insulated doors that lower heating costs and reduce street noise.",
  },
  {
    icon: Paintbrush,
    title: "Custom Styles",
    desc: "Carriage house, modern, traditional, and contemporary designs to match any home.",
  },
  {
    icon: ShieldCheck,
    title: "Full Warranty",
    desc: "Manufacturer warranty on the door plus our own labor warranty for total peace of mind.",
  },
]

const reviews = [
  {
    name: "David T.",
    location: "Queen Anne, Seattle",
    text: "They helped us pick the perfect insulated door for our craftsman home. Installation was flawless and done in half a day. Incredible transformation!",
  },
  {
    name: "Maria G.",
    location: "Kirkland, WA",
    text: "From the design consultation to the final install, the team was professional and communicative. Our new carriage house door gets compliments from every neighbor.",
  },
  {
    name: "Tom & Jen W.",
    location: "Redmond, WA",
    text: "We replaced both our garage doors and the difference in curb appeal is stunning. Great value for the quality and the crew left our driveway spotless.",
  },
]

export default function GarageDoorInstallationPPC() {
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

              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent ring-1 ring-accent/20">
                <DoorOpen className="size-4" />
                Free In-Home Design Consultation
              </div>

              <h1 className="font-[var(--font-heading)] text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
                New Garage Door Installation in{" "}
                <span className="text-primary">Seattle</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Transform your home&apos;s curb appeal with a stunning new garage
                door. We carry top brands, offer free in-home consultations, and
                handle everything from design to installation.
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
                  "Premium doors from Clopay, Amarr, and Wayne Dalton",
                  "Free in-home design consultation and measurements",
                  "Professional installation -- typically completed in 1 day",
                  "Financing options available for qualifying customers",
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
                  alt="Local Master technician installing a new garage door"
                  width={700}
                  height={420}
                  className="aspect-[5/3] w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <PPCLeadForm headline="Get Your Free Installation Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
              Why Choose Us for Your New Door
            </h2>
            <p className="mt-2 text-muted-foreground">
              Premium products, expert installation, and lasting results.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border/50"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After image section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
            See the Difference a New Door Makes
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/50">
              <Image
                src="/images/seattle-truck.png"
                alt="Local Master Garage Door service truck arriving for installation"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-5">
                <p className="font-semibold text-foreground">
                  Expert Installation Crew
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our certified teams arrive on time with all materials and
                  equipment for a seamless one-day install.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/50">
              <Image
                src="/images/hero-technician.png"
                alt="Technician completing garage door opener installation"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-5">
                <p className="font-semibold text-foreground">
                  Precision & Quality
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Every door is balanced, sealed, and tested to ensure quiet,
                  smooth, and safe operation from day one.
                </p>
              </div>
            </div>
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
              Trusted by Seattle Homeowners
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

      {/* Process */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="text-center font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
            Your New Door in 3 Easy Steps
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Free Consultation",
                desc: "We visit your home, take measurements, and help you choose the perfect door style and material.",
              },
              {
                step: "2",
                title: "Custom Quote",
                desc: "You receive a detailed, transparent quote with door options, installation cost, and financing info.",
              },
              {
                step: "3",
                title: "Expert Installation",
                desc: "Our certified crew installs your new door -- usually in a single day -- and ensures everything runs perfectly.",
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
            Ready to Transform Your Home&apos;s Curb Appeal?
          </h2>
          <p className="mt-3 text-base text-white/75">
            Get a free, no-obligation estimate on your new garage door installation today.
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
