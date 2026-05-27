import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Gallery } from "@/components/gallery"
import { ServiceAreas } from "@/components/service-areas"
import { Testimonials } from "@/components/testimonials"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.localmastergaragedoor.com",
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <ServiceAreas />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
