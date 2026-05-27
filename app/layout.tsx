import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const SITE_URL = 'https://www.localmastergaragedoor.com'
const PHONE = '(206) 555-1234'
const PHONE_RAW = '+12065551234'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Garage Door Repair Seattle, WA | Local Master Garage Door | Same-Day Service',
    template: '%s | Local Master Garage Door',
  },
  description: 'Seattle\'s #1 garage door repair & installation company. Licensed & insured, same-day service, free estimates. Serving King, Snohomish & Pierce Counties. Call (206) 555-1234.',
  keywords: [
    'garage door repair seattle',
    'garage door repair near me',
    'garage door installation seattle',
    'emergency garage door repair',
    'broken spring replacement seattle',
    'garage door opener repair',
    'same day garage door repair',
    'local garage door company seattle',
    'overhead door repair seattle wa',
    'garage door service king county',
  ],
  authors: [{ name: 'Local Master Garage Door' }],
  creator: 'Local Master Garage Door',
  publisher: 'Local Master Garage Door',
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Local Master Garage Door',
    title: 'Garage Door Repair Seattle, WA | Same-Day Service | Local Master Garage Door',
    description: 'Seattle\'s #1 garage door repair & installation company. Licensed & insured, same-day service, free estimates. Serving King, Snohomish & Pierce Counties.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Local Master Garage Door - Seattle\'s Trusted Experts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garage Door Repair Seattle, WA | Local Master Garage Door',
    description: 'Same-day garage door repair & installation in Seattle. Licensed & insured. Free estimates. Call (206) 555-1234.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  themeColor: '#0C4A6E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// Local Business JSON-LD structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  "name": "Local Master Garage Door",
  "image": `${SITE_URL}/images/logo.png`,
  "description": "Professional garage door repair, installation, and maintenance in Seattle & surrounding areas. Same-day service, licensed technicians, and free estimates.",
  "url": SITE_URL,
  "telephone": PHONE_RAW,
  "email": "info@localmastergaragedoor.com",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "postalCode": "98101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6062,
    "longitude": -122.3321
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "07:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "17:00" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "347",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": [
    { "@type": "City", "name": "Seattle", "sameAs": "https://en.wikipedia.org/wiki/Seattle" },
    { "@type": "City", "name": "Bellevue" },
    { "@type": "City", "name": "Redmond" },
    { "@type": "City", "name": "Kirkland" },
    { "@type": "City", "name": "Renton" },
    { "@type": "City", "name": "Shoreline" },
    { "@type": "City", "name": "Everett" },
    { "@type": "City", "name": "Tacoma" }
  ],
  "serviceType": ["Garage Door Repair", "Garage Door Installation", "Garage Door Opener Repair", "Spring Replacement", "Emergency Garage Door Service"],
  "hasMap": "https://maps.google.com/?q=Local+Master+Garage+Door+Seattle+WA",
  "sameAs": [
    "https://www.facebook.com/localmastergaragedoor",
    "https://www.yelp.com/biz/local-master-garage-door-seattle",
    "https://www.google.com/maps?cid=YOUR_GOOGLE_CID"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Click-to-call for mobile */}
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:font-semibold">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
