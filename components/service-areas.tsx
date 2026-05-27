import Link from "next/link"
import { MapPin, ArrowRight, Phone } from "lucide-react"
import { cities } from "@/lib/cities"

// Group cities into featured (first 6) and secondary
const featuredCities = [
  "seattle", "bellevue", "redmond", "kirkland", "renton", "shoreline"
]

export function ServiceAreas() {
  const featured = cities.filter(c => featuredCities.includes(c.slug))
  const others = cities.filter(c => !featuredCities.includes(c.slug))

  return (
    <section
      id="service-areas"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="service-areas-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Where We Work</p>
          <h2
            id="service-areas-heading"
            className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
          >
            Garage Door Service Across Greater Seattle
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We serve homeowners and businesses throughout King, Snohomish, and Pierce Counties. Fast dispatch — most areas see same-day service.
          </p>
        </div>

        {/* Featured cities — larger cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="group relative flex flex-col gap-3 rounded-2xl bg-secondary/60 p-6 ring-1 ring-border/50 transition-all hover:bg-primary/5 hover:shadow-lg hover:ring-primary/20"
              aria-label={`Garage door service in ${city.name}, ${city.county}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <MapPin className="size-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{city.name}, WA</p>
                  <p className="text-xs text-muted-foreground">{city.county}</p>
                </div>
                <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {city.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Other cities — compact grid */}
        <div className="mt-6 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {others.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="group flex items-center gap-2.5 rounded-xl bg-secondary/40 px-4 py-3 text-sm font-medium text-foreground/80 ring-1 ring-border/30 transition-all hover:bg-primary/5 hover:text-primary hover:ring-primary/20"
              aria-label={`Service in ${city.name}`}
            >
              <MapPin className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
              <span className="truncate">{city.name}</span>
            </Link>
          ))}
        </div>

        {/* Service area CTA */}
        <div className="mt-12 rounded-2xl bg-primary/5 ring-1 ring-primary/10 p-8 text-center">
          <p className="text-base font-semibold text-foreground">Don&apos;t see your city?</p>
          <p className="mt-1 text-sm text-muted-foreground">We likely serve your area. Call us to confirm — service available throughout Western Washington.</p>
          <a
            href="tel:+12065551234"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call (206) 555-1234 to Check Your Area
          </a>
        </div>
      </div>
    </section>
  )
}
