"use client"

import Image from "next/image"
import { Send, Shield, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PPCLeadForm({ headline }: { headline?: string }) {
  return (
    <div
      id="lead-form"
      className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-border/60 lg:p-8"
    >
      {/* Logo at the top of form */}
      <div className="mb-5 flex justify-center">
        <Image
          src="/images/logo.png"
          alt="Local Master Garage Door"
          width={200}
          height={70}
          className="h-16 w-auto lg:h-20"
        />
      </div>

      <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
        <Clock className="size-3" />
        Limited Time: $50 OFF Any Service
      </div>

      <h3 className="mt-3 text-xl font-bold text-foreground lg:text-2xl">
        {headline || "Get Your Free Quote Now"}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill out this short form. We respond within 15 minutes.
      </p>

      <form
        className="mt-5 flex flex-col gap-3.5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmlFor="ppc-name" className="sr-only">
            Full Name
          </label>
          <input
            id="ppc-name"
            type="text"
            placeholder="Full Name *"
            required
            className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="ppc-phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="ppc-phone"
            type="tel"
            placeholder="Phone Number *"
            required
            className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="ppc-service" className="sr-only">
            Service Needed
          </label>
          <select
            id="ppc-service"
            className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            defaultValue=""
          >
            <option value="" disabled>
              What do you need? *
            </option>
            <option>Garage Door Repair</option>
            <option>New Door Installation</option>
            <option>Opener Repair / Install</option>
            <option>Spring Replacement</option>
            <option>Emergency Service</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="ppc-zip" className="sr-only">
            ZIP Code
          </label>
          <input
            id="ppc-zip"
            type="text"
            placeholder="ZIP Code *"
            required
            className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-1 w-full rounded-full bg-primary py-6 text-base font-bold text-white hover:bg-primary/90"
        >
          <Send className="mr-2 size-4" />
          Get My Free Quote
        </Button>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Shield className="size-3 text-accent" />
          No obligation
        </span>
        <span className="flex items-center gap-1">
          <Clock className="size-3 text-accent" />
          15 min response
        </span>
        <span className="flex items-center gap-1">
          <Star className="size-3 text-amber-400" />
          4.9/5 on Google
        </span>
      </div>
    </div>
  )
}
