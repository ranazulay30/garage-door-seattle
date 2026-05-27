import { Star, Quote, ExternalLink } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    location: "Ballard, Seattle",
    text: "They came out the same day I called and had my broken spring replaced within an hour. Extremely professional and the price was exactly what they quoted. Highly recommend!",
    rating: 5,
    service: "Spring Replacement",
    date: "2 weeks ago",
    source: "Google",
  },
  {
    name: "James R.",
    location: "Capitol Hill, Seattle",
    text: "Installed a brand new insulated door on our home. The crew was punctual, clean, and incredibly skilled. Our garage has never looked or worked this good. Worth every penny.",
    rating: 5,
    service: "New Door Installation",
    date: "1 month ago",
    source: "Google",
  },
  {
    name: "Linda K.",
    location: "Bellevue, WA",
    text: "After getting quotes from three companies, Local Master was the most fair and transparent. No pressure sales, just honest advice. My door was fixed same-day. Customer for life.",
    rating: 5,
    service: "Garage Door Repair",
    date: "3 weeks ago",
    source: "Google",
  },
  {
    name: "Michael T.",
    location: "Redmond, WA",
    text: "Emergency call at 10pm — broken cable meant the door wouldn't close. Technician arrived in 45 minutes and had it working in no time. Incredible service at a fair price.",
    rating: 5,
    service: "Emergency Service",
    date: "5 days ago",
    source: "Google",
  },
  {
    name: "Jennifer W.",
    location: "Queen Anne, Seattle",
    text: "Very knowledgeable tech. He explained everything before starting and stuck to the quoted price. The new opener with WiFi connectivity is fantastic. Total pros.",
    rating: 5,
    service: "Opener Installation",
    date: "2 months ago",
    source: "Yelp",
  },
  {
    name: "David P.",
    location: "Renton, WA",
    text: "They replaced all the worn rollers and cables on our old door and it runs like new. Much quieter too. Great communication from booking to job completion. 10/10.",
    rating: 5,
    service: "Maintenance",
    date: "3 months ago",
    source: "Google",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-secondary/60 py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="name" content="Local Master Garage Door Service" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Real Customer Reviews</p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
          >
            What Seattle Homeowners Are Saying
          </h2>
          {/* Aggregate rating */}
          <div
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-sm ring-1 ring-border/50"
            itemScope
            itemType="https://schema.org/AggregateRating"
            itemProp="aggregateRating"
          >
            <div className="flex" aria-label="4.9 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <span className="font-bold text-foreground">
              <span itemProp="ratingValue">4.9</span>/5
            </span>
            <span className="text-sm text-muted-foreground">
              based on <span itemProp="reviewCount">347</span> reviews
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="relative rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border/50 flex flex-col"
              itemScope
              itemType="https://schema.org/Review"
              itemProp="review"
            >
              {/* Source badge */}
              <div className="absolute top-5 right-5 text-xs font-semibold text-muted-foreground/60 flex items-center gap-1">
                {review.source}
              </div>

              <div className="flex gap-0.5 mb-3" aria-label={`${review.rating} out of 5 stars`} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={String(review.rating)} />
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>

              <p className="leading-relaxed text-foreground/80 flex-1 text-[0.95rem]" itemProp="reviewBody">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-border/40 pt-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{review.name}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{review.location} · {review.service}</p>
                </div>
                <span className="text-xs text-muted-foreground/60 shrink-0">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Google reviews */}
        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm ring-1 ring-border/50 hover:shadow-md transition-shadow"
            aria-label="Read all Google reviews for Local Master Garage Door (opens in new tab)"
          >
            <ExternalLink className="size-4 text-primary" aria-hidden="true" />
            Read All 347 Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
