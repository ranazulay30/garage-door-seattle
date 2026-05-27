import Image from "next/image"
import { Check, Award, Clock, ThumbsUp, Banknote, ShieldCheck, Users } from "lucide-react"

const reasons = [
  { icon: ShieldCheck, text: "Licensed, bonded & insured in Washington State" },
  { icon: Award, text: "15+ years of experience in the Seattle area" },
  { icon: Clock, text: "Same-day and 24/7 emergency service available" },
  { icon: Banknote, text: "Upfront, flat-rate pricing — no hidden fees ever" },
  { icon: ThumbsUp, text: "Warranty on all parts and labor" },
  { icon: Users, text: "Background-checked, certified technicians" },
]

const stats = [
  { value: "2,500+", label: "Doors Serviced" },
  { value: "15+", label: "Years in Seattle" },
  { value: "347", label: "Google Reviews" },
  { value: "4.9★", label: "Average Rating" },
]

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Stats bar */}
        <div className="mb-16 grid grid-cols-2 gap-4 rounded-2xl bg-primary p-6 text-white sm:grid-cols-4 lg:p-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold lg:text-3xl">{value}</p>
              <p className="mt-0.5 text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/hero-technician.png"
                alt="Local Master Garage Door certified technician inspecting a garage door opener in Seattle"
                width={600}
                height={500}
                className="aspect-[6/5] object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* BBB-style trust badge placeholder */}
            <div className="absolute -right-4 bottom-8 max-w-[160px] rounded-xl bg-white p-4 shadow-lg ring-1 ring-border/50 text-center md:-right-8">
              <Award className="mx-auto size-8 text-primary" aria-hidden="true" />
              <p className="mt-1 text-xs font-bold text-foreground">Angi Super Service Award 2024</p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
            <h2
              id="why-us-heading"
              className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
            >
              Seattle&apos;s Most Trusted Garage Door Company
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We&apos;re not just another garage door company. We&apos;re your neighbors — committed to honest, high-quality service that keeps your home safe and your day on track.
            </p>

            <ul className="mt-8 flex flex-col gap-4" aria-label="Our commitments">
              {reasons.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-foreground/85 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+12065551234"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm"
              >
                Call for Free Estimate
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition-colors"
              >
                Request Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
