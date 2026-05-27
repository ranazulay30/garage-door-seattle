import Link from "next/link"
import { Wrench, DoorOpen, Settings, ShieldCheck, Zap, Cog, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Garage Door Repair",
    description: "Fast, reliable same-day repairs for broken springs, cables, rollers, panels, and openers. We fix all brands and models.",
    href: "/services/garage-door-repair",
    cta: "Learn More",
    badge: "Most Popular",
  },
  {
    icon: Zap,
    title: "Emergency Service",
    description: "Door stuck open at 2am? We offer 24/7 emergency response throughout the Seattle metro — typically on-site within 60 minutes.",
    href: "/services/emergency",
    cta: "Call Now",
    badge: "24/7",
  },
  {
    icon: Cog,
    title: "Spring Replacement",
    description: "Torsion and extension spring replacement by certified technicians using high-cycle springs engineered to last 10,000+ cycles.",
    href: "/services/spring-replacement",
    cta: "Learn More",
  },
  {
    icon: DoorOpen,
    title: "New Door Installation",
    description: "Expert installation of premium residential and commercial garage doors. Wide selection of styles, materials, and smart upgrades.",
    href: "/services/installation",
    cta: "View Options",
  },
  {
    icon: Settings,
    title: "Opener Systems",
    description: "Installation and repair of modern garage door openers including WiFi-enabled smart models and battery backup systems.",
    href: "/services/openers",
    cta: "Learn More",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspections",
    description: "Comprehensive 21-point safety inspections to keep your door operating reliably. Preventative maintenance plans available.",
    href: "/services/inspection",
    cta: "Book Inspection",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="bg-secondary py-20 lg:py-28"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</p>
          <h2
            id="services-heading"
            className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
          >
            Complete Garage Door Services in Seattle
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From urgent repairs to full door replacements — our certified Seattle technicians handle it all with upfront pricing and a parts &amp; labor warranty.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border/50 transition-all hover:shadow-lg hover:ring-primary/20 flex flex-col"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent ring-1 ring-accent/20">
                  {service.badge}
                </span>
              )}
              <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <service.icon className="size-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground" itemProp="name">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground flex-1" itemProp="description">
                {service.description}
              </p>
              <a
                href={service.title === "Emergency Service" ? "tel:+12065551234" : "#contact"}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                aria-label={`${service.cta} about ${service.title}`}
              >
                {service.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl bg-primary/5 ring-1 ring-primary/10 p-8 text-center">
          <p className="text-lg font-semibold text-foreground">Not sure what you need?</p>
          <p className="mt-1 text-muted-foreground">Call us and a technician will diagnose the problem — <strong>free of charge</strong>.</p>
          <a
            href="tel:+12065551234"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm"
          >
            Call (206) 555-1234 — Free Diagnosis
          </a>
        </div>
      </div>
    </section>
  )
}
