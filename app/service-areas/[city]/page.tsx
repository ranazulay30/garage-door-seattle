import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin, Phone, ArrowRight, Check, Wrench, DoorOpen,
  Settings, ShieldCheck, Zap, Cog, ChevronRight, Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cities, getCityBySlug, getAllCitySlugs } from "@/lib/cities"

interface CityPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}

  const title = `Garage Door Repair ${city.name}, WA | Same-Day Service | Local Master`
  const description = city.metaDescription

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.localmastergaragedoor.com/service-areas/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.localmastergaragedoor.com/service-areas/${slug}`,
      type: 'website',
    },
  }
}

const services = [
  { icon: Wrench, title: "Garage Door Repair", desc: "Same-day repair for springs, cables, panels, and rollers." },
  { icon: DoorOpen, title: "New Door Installation", desc: "Premium residential and commercial door installations." },
  { icon: Settings, title: "Opener Systems", desc: "Smart WiFi openers and belt/chain drive systems." },
  { icon: ShieldCheck, title: "Safety Inspections", desc: "21-point inspection and preventative maintenance." },
  { icon: Zap, title: "Emergency Service", desc: "24/7 response, typically on-site within 60 minutes." },
  { icon: Cog, title: "Spring Replacement", desc: "High-cycle torsion and extension springs installed right." },
]

const reviews = [
  { name: "Sarah M.", text: "Same day service, great price, very professional. Highly recommend!", rating: 5 },
  { name: "James R.", text: "Fixed our broken spring in under an hour. Fair and transparent pricing.", rating: 5 },
  { name: "Linda K.", text: "Best garage door company in the area. No pressure, honest advice.", rating: 5 },
]

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)

  if (!city) notFound()

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 6)

  // City-specific structured data
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Local Master Garage Door",
    "description": `Professional garage door repair and installation in ${city.name}, WA. Same-day service, free estimates.`,
    "url": `https://www.localmastergaragedoor.com/service-areas/${city.slug}`,
    "telephone": "+12065551234",
    "areaServed": { "@type": "City", "name": city.name, "addressRegion": "WA" },
    "address": { "@type": "PostalAddress", "addressLocality": "Seattle", "addressRegion": "WA", "addressCountry": "US" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "347" },
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-0" aria-labelledby={`city-hero-${city.slug}`}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="py-12 lg:py-20">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
              <Link href="/#service-areas" className="hover:text-primary transition-colors">Service Areas</Link>
              <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
              <span className="text-foreground font-medium">{city.name}, WA</span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col gap-5">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  <MapPin className="size-4" aria-hidden="true" />
                  {city.county}, Washington
                </div>

                <h1
                  id={`city-hero-${city.slug}`}
                  className="font-[var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl text-balance"
                >
                  Garage Door Repair &amp; Installation in{" "}
                  <span className="text-primary">{city.name}</span>, WA
                </h1>

                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                  {city.description}
                </p>

                {/* Star rating inline */}
                <div className="flex items-center gap-2">
                  <div className="flex" aria-label="4.9 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">4.9/5</span>
                  <span className="text-sm text-muted-foreground">· 347 Google Reviews in {city.county}</span>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="rounded-full bg-accent px-8 text-base font-bold text-white hover:bg-accent/90 shadow-lg shadow-accent/20">
                    <a href="tel:+12065551234" aria-label={`Call for garage door service in ${city.name}`}>
                      <Phone className="mr-2 size-4" aria-hidden="true" />
                      Call (206) 555-1234
                    </a>
                  </Button>
                  <Button asChild size="lg" className="rounded-full bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90">
                    <Link href="/#contact">
                      Get Free Estimate
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["Same-Day Service", "Free Estimates", "Licensed & Insured", "Parts & Labor Warranty"].map((badge) => (
                    <span key={badge} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
                <Image
                  src="/images/seattle-truck.png"
                  alt={`Local Master Garage Door service truck in ${city.name}, WA`}
                  width={600}
                  height={450}
                  className="aspect-[4/3] w-full object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-bold text-white">Proudly Serving {city.name}</p>
                  <p className="text-sm text-white/80">Fast, reliable garage door service — same day available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 bg-secondary" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }} aria-hidden="true" />
      </section>

      {/* City-specific content */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Our {city.name} Service</p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Why {city.name} Homeowners Trust Us
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{city.longDescription}</p>
              <ul className="mt-8 flex flex-col gap-4" aria-label={`Benefits for ${city.name} customers`}>
                {city.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="size-3.5 text-accent" aria-hidden="true" />
                    </div>
                    <span className="text-foreground/85">{highlight}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+12065551234"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call for Same-Day Service in {city.name}
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border/50 lg:p-10">
              <h3 className="text-xl font-bold text-foreground">{city.name} Neighborhoods We Serve</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our technicians are familiar with every corner of {city.name}.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {city.neighborhoods.map((neighborhood) => (
                  <div key={neighborhood} className="flex items-center gap-2 rounded-lg bg-secondary/60 px-4 py-2.5">
                    <MapPin className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground/80 truncate">{neighborhood}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Garage Door Services in {city.name}, WA
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Full-service residential and commercial garage door solutions — all available in {city.name} with same-day scheduling.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group flex items-start gap-4 rounded-2xl bg-secondary/60 p-6 ring-1 ring-border/50 transition-all hover:shadow-md hover:ring-primary/20">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15">
                  <service.icon className="size-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local reviews */}
      <section className="bg-secondary/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What Customers Say</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
              Reviews from {city.county} Homeowners
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border/50">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-4 text-xs font-semibold text-foreground">{r.name} · {city.name}, WA</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
            Need Garage Door Service in {city.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            Same-day service available for most {city.name} addresses. Call now or request a free estimate online.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-accent px-8 text-base font-bold text-white hover:bg-accent/90 shadow-lg">
              <a href="tel:+12065551234">
                <Phone className="mr-2 size-4" aria-hidden="true" />
                Call (206) 555-1234 — Free Estimate
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 px-8 text-base font-semibold text-white hover:bg-white/10">
              <Link href="/#contact">Request Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">More Service Areas</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">We Also Serve These Cities</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherCities.map((c) => (
              <Link key={c.slug} href={`/service-areas/${c.slug}`}
                className="group flex items-center gap-4 rounded-2xl bg-white px-6 py-5 ring-1 ring-border/50 transition-all hover:shadow-md hover:ring-primary/20"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15">
                  <MapPin className="size-5 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">{c.name}, WA</p>
                  <p className="text-sm text-muted-foreground">{c.county}</p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-transform" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/#service-areas" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition-colors">
              ← View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
