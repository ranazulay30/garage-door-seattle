"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "Call or Text",
    value: "(206) 555-1234",
    href: "tel:+12065551234",
    note: "Fastest response",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@localmastergaragedoor.com",
    href: "mailto:info@localmastergaragedoor.com",
    note: null,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Seattle & Greater Puget Sound",
    href: "#service-areas",
    note: "King, Snohomish & Pierce Counties",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 7AM–8PM",
    href: null,
    note: "24/7 Emergency Available",
  },
]

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get("name") as string
    const phone = data.get("phone") as string

    if (!name || !phone) {
      setError("Please fill in all required fields.")
      setSubmitting(false)
      return
    }

    // Simulate submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <section
      id="contact"
      className="bg-primary py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: info */}
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">Get In Touch</p>
            <h2
              id="contact-heading"
              className="mt-3 font-[var(--font-heading)] text-3xl font-bold tracking-tight md:text-4xl text-balance"
            >
              Get a Free Estimate Today
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Call, text, or fill out the form. We respond within <strong className="text-white">15 minutes</strong> during business hours — and 24/7 for emergencies.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {contactInfo.map(({ icon: Icon, label, value, href, note }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="size-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-white hover:underline text-[1.05rem]">
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-white text-[1.05rem]">{value}</p>
                    )}
                    {note && <p className="text-xs text-white/50 mt-0.5">{note}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Licensed & Insured", "Free Estimates", "Price Match Guarantee", "Warranty on All Work"].map((badge) => (
                <span key={badge} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 ring-1 ring-white/20">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl bg-white p-8 shadow-2xl lg:p-10" role="region" aria-label="Contact form">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8 gap-4">
                <CheckCircle className="size-16 text-accent" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-foreground">Request Received!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you! A technician will contact you within <strong>15 minutes</strong> to confirm your appointment. For urgent issues, call <a href="tel:+12065551234" className="text-primary font-semibold hover:underline">(206) 555-1234</a> now.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-foreground">Request a Free Estimate</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We respond within <strong>15 minutes</strong> · No obligation · Free diagnosis
                </p>

                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit} noValidate aria-label="Free estimate request form">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                        Full Name <span className="text-destructive" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        required
                        autoComplete="name"
                        className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                        Phone Number <span className="text-destructive" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(206) 555-0000"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      autoComplete="email"
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service...</option>
                      <option>Garage Door Repair</option>
                      <option>New Door Installation</option>
                      <option>Opener Installation / Repair</option>
                      <option>Spring Replacement</option>
                      <option>Safety Inspection</option>
                      <option>Emergency Service — ASAP</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="zip" className="mb-1.5 block text-sm font-medium text-foreground">
                      ZIP Code
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      placeholder="98101"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                      Describe the Issue
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="E.g., broken spring, door won't open, noisy opener..."
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
                      <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="mt-1 w-full rounded-full bg-accent py-6 text-base font-bold text-white hover:bg-accent/90 disabled:opacity-70 shadow-lg shadow-accent/20 transition-transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden="true" />
                        Sending…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="size-4" aria-hidden="true" />
                        Get My Free Estimate
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    🔒 Your info is safe. No spam. We respond within 15 minutes.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
