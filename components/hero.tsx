import Image from "next/image"
import { Phone, ArrowRight, Shield, Clock, Star, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustBadges = [
  { icon: Shield, text: "Licensed & Insured WA" },
  { icon: Award, text: "15+ Years Experience" },
  { icon: Clock, text: "Same-Day Service" },
]

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-0"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* Left content */}
          <div className="flex flex-col gap-5">
            {/* Urgency pill */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent ring-1 ring-accent/20">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Available Now — Same-Day Appointments
            </div>

            <h1
              id="hero-heading"
              className="font-[var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.4rem] text-balance"
              itemProp="name"
            >
              Seattle&apos;s #1{" "}
              <span className="text-primary">Garage Door</span>{" "}
              Repair &amp; Installation
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground" itemProp="description">
              Fast, professional garage door repair and installation across the greater Seattle area. 
              Licensed technicians, upfront pricing, and a satisfaction guarantee on every job.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-8 text-base font-bold text-white hover:bg-accent/90 shadow-lg shadow-accent/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <a href="tel:+12065551234" aria-label="Call Local Master Garage Door at (206) 555-1234">
                  <Phone className="mr-2 size-4" aria-hidden="true" />
                  Call (206) 555-1234
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <a href="#contact">
                  Get Free Estimate
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>

            {/* Social proof row */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="flex items-center gap-2">
                <div className="flex" aria-label="4.9 out of 5 stars on Google">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">4.9/5</span>
                <span className="text-sm text-muted-foreground">· 347 Google Reviews</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-1">
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-foreground/70">
                  <Icon className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative" role="img" aria-label="Local Master Garage Door technician servicing a garage door in Seattle">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <Image
                src="/images/technician-door.png"
                alt="Local Master Garage Door technician performing garage door repair in Seattle, WA"
                width={600}
                height={600}
                className="aspect-square object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-border/50 md:-bottom-6 md:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="size-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">2,500+ Jobs Done</p>
                  <p className="text-xs text-muted-foreground">Serving Seattle Since 2009</p>
                </div>
              </div>
            </div>

            {/* Floating review card */}
            <div className="absolute -top-4 -right-3 rounded-xl bg-white p-3 shadow-lg ring-1 ring-border/50 md:-right-6 max-w-[170px]">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-xs font-semibold text-foreground leading-snug">&ldquo;Fixed in 1 hour. Amazing!&rdquo;</p>
              <p className="text-xs text-muted-foreground mt-0.5">— Sarah M., Ballard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="h-16 bg-secondary" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }} aria-hidden="true" />
    </section>
  )
}
