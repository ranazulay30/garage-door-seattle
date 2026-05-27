import Image from "next/image"
import { ArrowRight } from "lucide-react"

const galleryItems = [
  {
    src: "/images/technician-door.png",
    alt: "Local Master Garage Door technician repairing a residential garage door spring in Seattle",
    caption: "Spring Replacement — Ballard, Seattle",
  },
  {
    src: "/images/hero-technician.png",
    alt: "Certified technician installing a new garage door opener system",
    caption: "Opener Installation — Bellevue, WA",
  },
  {
    src: "/images/seattle-truck.png",
    alt: "Local Master Garage Door service vehicle dispatched to a customer in the Seattle area",
    caption: "Same-Day Dispatch — Redmond, WA",
  },
  {
    src: "/images/technician-repair.png",
    alt: "Technician performing a comprehensive safety inspection on a garage door",
    caption: "Safety Inspection — Kirkland, WA",
  },
]

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Work</p>
          <h2
            id="gallery-heading"
            className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
          >
            Recent Jobs Across Seattle
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real work by our certified technicians — clean, professional, and done right the first time.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <figure key={item.caption} className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-border/50">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <figcaption className="bg-secondary/60 px-4 py-2.5 text-xs font-medium text-muted-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition-colors"
          >
            Get a Free Quote for Your Project
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
