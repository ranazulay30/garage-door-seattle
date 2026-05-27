export interface CityData {
  slug: string
  name: string
  county: string
  description: string
  longDescription: string
  highlights: string[]
  neighborhoods: string[]
  metaDescription: string
}

export const cities: CityData[] = [
  {
    slug: "seattle",
    name: "Seattle",
    county: "King County",
    description:
      "As our home base, we provide the fastest response times throughout Seattle. From Capitol Hill to Ballard, West Seattle to the University District, our technicians know every neighborhood.",
    longDescription:
      "Seattle is the heart of our operation. With over 15 years of experience serving the Emerald City, Local Master Garage Door has built a reputation for reliable, honest, and professional garage door services. Whether you live in a charming Craftsman bungalow in Wallingford, a modern townhome in South Lake Union, or a classic home in Magnolia, we understand the unique architectural styles and garage door needs of Seattle homeowners. Our centrally located team ensures rapid response times, and we offer same-day service for most repair calls within the city limits.",
    highlights: [
      "Same-day service for most Seattle addresses",
      "Familiar with all Seattle architectural styles",
      "Emergency 24/7 response within 60 minutes",
      "Hundreds of 5-star reviews from Seattle homeowners",
    ],
    neighborhoods: [
      "Capitol Hill",
      "Ballard",
      "Fremont",
      "West Seattle",
      "Magnolia",
      "Queen Anne",
      "University District",
      "Wallingford",
      "Greenwood",
      "South Lake Union",
      "Beacon Hill",
      "Columbia City",
    ],
    metaDescription:
      "Professional garage door repair and installation in Seattle, WA. Same-day service, free estimates, and 24/7 emergency response. Call Local Master Garage Door today!",
  },
  {
    slug: "bellevue",
    name: "Bellevue",
    county: "King County",
    description:
      "Serving Bellevue's upscale residential communities with premium garage door solutions. Expert installation of high-end doors and smart opener systems.",
    longDescription:
      "Bellevue is one of the fastest-growing cities in Washington, and Local Master Garage Door is proud to serve its discerning homeowners. Known for its beautiful neighborhoods, top-rated schools, and thriving downtown, Bellevue demands premium-quality garage door services. We specialize in high-end door installations that complement the elegant architecture found throughout communities like Somerset, Bridle Trails, and Enatai. Our technicians are experienced with oversized custom doors, modern glass panel designs, and smart home integrations popular in Bellevue homes.",
    highlights: [
      "Specialists in high-end custom garage doors",
      "Smart home opener integration experts",
      "Serving all Bellevue neighborhoods daily",
      "Premium materials and extended warranties",
    ],
    neighborhoods: [
      "Downtown Bellevue",
      "Somerset",
      "Bridle Trails",
      "West Bellevue",
      "Enatai",
      "Crossroads",
      "Factoria",
      "Newport",
      "Woodridge",
      "Wilburton",
    ],
    metaDescription:
      "Expert garage door repair and installation in Bellevue, WA. Premium custom doors, smart openers, and same-day service. Call Local Master Garage Door!",
  },
  {
    slug: "tacoma",
    name: "Tacoma",
    county: "Pierce County",
    description:
      "Reliable garage door repair and installation across Tacoma and surrounding Pierce County communities. Trusted by homeowners for fast, honest service.",
    longDescription:
      "Tacoma, the City of Destiny, is home to a diverse mix of historic and modern homes that all require dependable garage door service. Local Master Garage Door extends our commitment to quality and integrity to every Tacoma neighborhood. From the charming Proctor District to the revitalized Stadium District, we handle everything from spring replacements on older homes to brand-new installations on modern builds. Our team understands the unique weather conditions of the South Sound and recommends insulated, weather-resistant doors that stand up to Tacoma's coastal climate.",
    highlights: [
      "Full service coverage across Pierce County",
      "Weather-resistant door recommendations",
      "Experience with historic Tacoma homes",
      "Competitive pricing with honest quotes",
    ],
    neighborhoods: [
      "Stadium District",
      "Proctor District",
      "North End",
      "Old Town",
      "Hilltop",
      "South Tacoma",
      "Lincoln District",
      "6th Avenue",
      "Ruston",
      "University Place",
    ],
    metaDescription:
      "Garage door repair and installation in Tacoma, WA. Fast response, honest pricing, and quality work. Call Local Master Garage Door for a free estimate!",
  },
  {
    slug: "redmond",
    name: "Redmond",
    county: "King County",
    description:
      "Serving Redmond's tech-savvy homeowners with modern garage door solutions including WiFi-connected openers and sleek contemporary designs.",
    longDescription:
      "Redmond, home to some of the world's leading tech companies, attracts homeowners who value innovation and quality. Local Master Garage Door meets that standard by offering the latest in garage door technology alongside time-tested craftsmanship. We specialize in smart garage door systems that integrate with popular home automation platforms, energy-efficient insulated doors, and sleek modern designs that complement Redmond's contemporary homes. From the established neighborhoods of Education Hill to the newer communities in Overlake, we deliver service that matches Redmond's forward-thinking spirit.",
    highlights: [
      "Smart garage door technology specialists",
      "Energy-efficient insulated door options",
      "Experience with modern Redmond architecture",
      "Fast response across all Redmond neighborhoods",
    ],
    neighborhoods: [
      "Education Hill",
      "Overlake",
      "Downtown Redmond",
      "Idylwood",
      "Grass Lawn",
      "Bear Creek",
      "Redmond Ridge",
      "Willows",
      "Southeast Redmond",
      "Sammamish Valley",
    ],
    metaDescription:
      "Smart garage door solutions in Redmond, WA. Modern installations, WiFi openers, and expert repairs. Call Local Master Garage Door today!",
  },
  {
    slug: "kirkland",
    name: "Kirkland",
    county: "King County",
    description:
      "Expert garage door services in Kirkland's charming waterfront community. From Juanita to Houghton, we keep your home's curb appeal and security top-notch.",
    longDescription:
      "Kirkland's beautiful waterfront setting and tree-lined neighborhoods make it one of the most desirable cities in the Pacific Northwest. Local Master Garage Door helps Kirkland homeowners maintain the charm and functionality of their properties with expert garage door services. Whether you need a repair for your cottage-style door in Juanita or a full replacement to match your lakefront property in Houghton, our technicians deliver craftsmanship that enhances your home's curb appeal. We understand that Kirkland homeowners take pride in their properties, and we treat every project with the care and attention it deserves.",
    highlights: [
      "Curb appeal-focused door consultations",
      "Waterfront and luxury home experience",
      "Quick response from nearby Eastside base",
      "Wide selection of residential door styles",
    ],
    neighborhoods: [
      "Downtown Kirkland",
      "Juanita",
      "Houghton",
      "Totem Lake",
      "Norkirk",
      "Market",
      "Finn Hill",
      "Kingsgate",
      "Rose Hill",
      "Bridle Trails",
    ],
    metaDescription:
      "Professional garage door services in Kirkland, WA. Repair, installation, and curb appeal upgrades. Call Local Master Garage Door for a free estimate!",
  },
  {
    slug: "renton",
    name: "Renton",
    county: "King County",
    description:
      "Dependable garage door repair and installation in Renton. From The Landing to Kennydale, our team serves all of Renton with quick turnarounds and fair pricing.",
    longDescription:
      "Renton is a dynamic city at the southern tip of Lake Washington, blending suburban comfort with urban convenience. Local Master Garage Door provides reliable, affordable garage door services throughout Renton's diverse neighborhoods. Whether you live in the established homes of Kennydale, the growing communities near The Landing, or the family neighborhoods of Benson Hill, we deliver consistent quality and transparent pricing. Our team is experienced with the full range of residential garage doors found in Renton, from classic raised-panel steel doors to carriage-house styles and modern flush designs.",
    highlights: [
      "Affordable pricing with no hidden fees",
      "Experienced with all Renton home styles",
      "Convenient south King County location",
      "Fast same-day service available",
    ],
    neighborhoods: [
      "Kennydale",
      "The Landing",
      "Benson Hill",
      "Highlands",
      "Renton Hill",
      "Downtown Renton",
      "Cascade",
      "Fairwood",
      "Talbot Hill",
      "Skyway",
    ],
    metaDescription:
      "Reliable garage door repair and installation in Renton, WA. Fair pricing, fast service, and quality work. Call Local Master Garage Door!",
  },
  {
    slug: "everett",
    name: "Everett",
    county: "Snohomish County",
    description:
      "Extending our trusted service north to Everett and Snohomish County. Professional garage door solutions for homes across the greater Everett area.",
    longDescription:
      "Everett, the largest city in Snohomish County, is a vibrant waterfront community with a rich mix of historic and contemporary homes. Local Master Garage Door proudly extends our services to Everett and the surrounding area, bringing the same commitment to quality and honesty that has made us Seattle's top choice. From the charming historic homes near Rucker Hill to the newer developments in Silver Lake, we provide comprehensive garage door services tailored to each home's unique needs. Our team is familiar with the challenges of Snohomish County's climate and recommends solutions built to last.",
    highlights: [
      "Full Snohomish County service coverage",
      "Experience with Pacific Northwest weather",
      "Historic and modern home expertise",
      "Reliable scheduling and on-time arrivals",
    ],
    neighborhoods: [
      "Downtown Everett",
      "Bayside",
      "Boulevard Bluffs",
      "Riverside",
      "Pinehurst",
      "Silver Lake",
      "Lowell",
      "Port Gardner",
      "Delta",
      "Glacier View",
    ],
    metaDescription:
      "Professional garage door services in Everett, WA. Repair, installation, and maintenance for Snohomish County homes. Call Local Master Garage Door!",
  },
  {
    slug: "kent",
    name: "Kent",
    county: "King County",
    description:
      "Trusted garage door repair and installation in Kent. Serving residential and commercial properties throughout the Green River Valley.",
    longDescription:
      "Kent, nestled in the Green River Valley, is one of south King County's largest and most diverse cities. Local Master Garage Door serves Kent homeowners and businesses with professional, reliable garage door services. The city's mix of established residential neighborhoods and growing commercial areas means we handle everything from single-car residential door repairs to multi-bay commercial installations. Our technicians are experienced with the specific needs of Kent properties, including wind-resistant doors for valley properties and insulated options for energy-conscious homeowners.",
    highlights: [
      "Residential and commercial service",
      "Wind-resistant door options for valley homes",
      "Serving all of south King County",
      "Free estimates with same-day availability",
    ],
    neighborhoods: [
      "East Hill",
      "West Hill",
      "Downtown Kent",
      "Meridian",
      "Kent Station area",
      "Panther Lake",
      "Scenic Hill",
      "Canyon Ridge",
      "Lake Meridian",
      "Covington",
    ],
    metaDescription:
      "Garage door repair and installation in Kent, WA. Residential and commercial service with free estimates. Call Local Master Garage Door today!",
  },
  {
    slug: "federal-way",
    name: "Federal Way",
    county: "King County",
    description:
      "Serving Federal Way and south King County with reliable, professional garage door services. Same-day appointments and honest pricing guaranteed.",
    longDescription:
      "Federal Way, located between Seattle and Tacoma along the I-5 corridor, is a thriving suburban community with a wide variety of residential properties. Local Master Garage Door provides comprehensive garage door services to Federal Way homeowners, from emergency spring replacements to complete door upgrades. Our team understands the diverse housing stock in Federal Way, from the established neighborhoods near Steel Lake to the newer developments near the Commons. We offer a wide range of door styles and materials to match any home and budget, always with transparent pricing and quality workmanship.",
    highlights: [
      "Convenient I-5 corridor location",
      "Wide range of door styles and budgets",
      "Transparent pricing with written quotes",
      "Emergency service available 24/7",
    ],
    neighborhoods: [
      "Steel Lake",
      "Twin Lakes",
      "Camelot",
      "Mirror Lake",
      "Adelaide",
      "Star Lake",
      "Redondo",
      "Lakota",
      "Federal Way Commons area",
      "Marine Hills",
    ],
    metaDescription:
      "Garage door services in Federal Way, WA. Repair, installation, and 24/7 emergency service. Call Local Master Garage Door for a free estimate!",
  },
  {
    slug: "sammamish",
    name: "Sammamish",
    county: "King County",
    description:
      "Premium garage door services for Sammamish's beautiful plateau homes. Expert installations that match the elegance of your property.",
    longDescription:
      "Sammamish, perched on the scenic Sammamish Plateau, is known for its stunning homes, excellent schools, and family-friendly atmosphere. Local Master Garage Door is the preferred choice for Sammamish homeowners who expect nothing less than premium quality. We specialize in the types of doors that complement Sammamish's upscale properties: wood and wood-composite carriage doors, insulated steel with decorative hardware, and modern aluminum-and-glass designs. Our technicians take extra care with every installation and repair, understanding that your garage door is a major component of your home's first impression.",
    highlights: [
      "Premium door selection for luxury homes",
      "Carriage house and custom door specialists",
      "Quiet belt-drive opener installations",
      "Pristine jobsite cleanup guaranteed",
    ],
    neighborhoods: [
      "Pine Lake",
      "Klahanie",
      "Sahalee",
      "Beaver Lake",
      "Inglewood Hill",
      "Southeast Sammamish",
      "Northeast Sammamish",
      "Trossachs",
      "Aldarra",
      "Timberline",
    ],
    metaDescription:
      "Premium garage door installation and repair in Sammamish, WA. Custom doors, expert service, and free estimates. Call Local Master Garage Door!",
  },
  {
    slug: "bothell",
    name: "Bothell",
    county: "King / Snohomish County",
    description:
      "Professional garage door service in Bothell and the Canyon Park area. Quick response from our Eastside team for repairs and installations.",
    longDescription:
      "Bothell, straddling both King and Snohomish counties, is a growing city with a wonderful blend of established neighborhoods and new construction. Local Master Garage Door provides reliable service to Bothell homeowners, whether you live in the historic downtown area, the master-planned communities near Canyon Park, or the wooded neighborhoods along the Burke-Gilman trail corridor. Our proximity on the Eastside means fast response times, and our experience with both older homes and modern builds ensures we can handle any garage door project with skill and efficiency.",
    highlights: [
      "Serving both King and Snohomish County sides",
      "Quick Eastside response times",
      "New construction and retrofit experience",
      "Full range of residential services",
    ],
    neighborhoods: [
      "Downtown Bothell",
      "Canyon Park",
      "North Creek",
      "Beardslee",
      "Queensborough",
      "Norway Hill",
      "Brickyard",
      "Maltby area",
      "Fernwood",
      "Maywood",
    ],
    metaDescription:
      "Garage door repair and installation in Bothell, WA. Fast response, quality service, and free estimates. Call Local Master Garage Door today!",
  },
  {
    slug: "issaquah",
    name: "Issaquah",
    county: "King County",
    description:
      "Serving Issaquah and the Issaquah Highlands with expert garage door services. Mountain-area specialists who understand local home styles.",
    longDescription:
      "Issaquah, nestled at the base of the Cascades foothills, offers a unique blend of natural beauty and suburban convenience. Local Master Garage Door serves Issaquah homeowners with an understanding of the area's distinctive character. From the charming historic downtown to the modern developments in Issaquah Highlands and Talus, we provide garage door services that match the quality of life residents expect. Our technicians are experienced with the steeper driveways and unique architectural styles found in foothill communities, and we recommend insulated doors well-suited to Issaquah's slightly cooler mountain-adjacent climate.",
    highlights: [
      "Foothill and mountain community specialists",
      "Insulated doors for cooler climates",
      "Experience with steep driveway installations",
      "Serving Issaquah Highlands and Talus",
    ],
    neighborhoods: [
      "Downtown Issaquah",
      "Issaquah Highlands",
      "Talus",
      "Gilman Village area",
      "Olde Town",
      "Squak Mountain",
      "Montreux",
      "Providence Point",
      "Tiger Mountain area",
      "Maple Lane",
    ],
    metaDescription:
      "Expert garage door services in Issaquah, WA. Repair, installation, and foothill home specialists. Call Local Master Garage Door for a free estimate!",
  },
  {
    slug: "lynnwood",
    name: "Lynnwood",
    county: "Snohomish County",
    description:
      "Trusted garage door repair and installation in Lynnwood. Conveniently located to serve all of south Snohomish County with fast turnarounds.",
    longDescription:
      "Lynnwood, a key hub of south Snohomish County, is undergoing exciting growth and transformation. Local Master Garage Door is proud to serve Lynnwood's evolving community with top-quality garage door services. Whether you own a mid-century rambler near Lynnwood Bowl or a newer townhome near the City Center development, our team delivers fast, professional service at fair prices. With the new light rail bringing even more development to the area, we help homeowners upgrade their garage doors to boost curb appeal and home value. Our Snohomish County coverage ensures we're always close by when you need us.",
    highlights: [
      "Central south Snohomish County location",
      "Curb appeal upgrades for home value",
      "Fast turnaround on repairs",
      "Townhome and single-family home service",
    ],
    neighborhoods: [
      "City Center",
      "Alderwood",
      "Martha Lake",
      "North Lynnwood",
      "Meadowdale",
      "Perrinville",
      "Larch Way",
      "196th Street corridor",
      "Scriber Lake area",
      "South Lynnwood",
    ],
    metaDescription:
      "Garage door repair and installation in Lynnwood, WA. Fast service, fair pricing, and quality work. Call Local Master Garage Door today!",
  },
  {
    slug: "olympia",
    name: "Olympia",
    county: "Thurston County",
    description:
      "Bringing Local Master quality to Washington's capital city. Professional garage door services for Olympia and Thurston County homeowners.",
    longDescription:
      "Olympia, Washington's state capital, is a city rich in history, government, and natural beauty. Local Master Garage Door extends our service footprint to Olympia and the greater Thurston County area, bringing the same quality and professionalism that Seattle homeowners have relied on for over 15 years. Olympia's mix of historic homes near the Capitol campus, established neighborhoods in South Capitol, and newer developments in the Westside make it an area where versatile garage door expertise is essential. We offer a full range of services from emergency repairs to complete door and opener system installations.",
    highlights: [
      "Full Thurston County service area",
      "Historic and modern home experience",
      "State employee discount available",
      "Comprehensive repair and installation",
    ],
    neighborhoods: [
      "Downtown Olympia",
      "South Capitol",
      "Westside",
      "Eastside",
      "Tumwater",
      "Lacey",
      "Hawks Prairie",
      "Indian Summer",
      "Southeast Olympia",
      "Boulevard Road area",
    ],
    metaDescription:
      "Professional garage door services in Olympia, WA. Repair, installation, and maintenance for Thurston County. Call Local Master Garage Door!",
  },
  {
    slug: "spokane",
    name: "Spokane",
    county: "Spokane County",
    description:
      "Expanding our reach to Eastern Washington's largest city. Quality garage door services for Spokane homeowners and businesses.",
    longDescription:
      "Spokane, the Lilac City and the largest city in Eastern Washington, represents our commitment to serving homeowners across the entire state. Local Master Garage Door brings our Seattle-proven standards of quality and customer service to Spokane and the surrounding Inland Empire. Spokane's distinct four-season climate, with cold winters and warm summers, means garage door insulation and weather-sealing are especially important. Our technicians recommend and install doors designed for Spokane's temperature extremes, ensuring energy efficiency and reliable operation year-round. From the elegant homes of South Hill to the family neighborhoods of North Spokane, we provide complete garage door solutions.",
    highlights: [
      "Climate-optimized door recommendations",
      "Full four-season insulation expertise",
      "Serving the greater Inland Empire",
      "Same quality standards as our Seattle service",
    ],
    neighborhoods: [
      "South Hill",
      "North Spokane",
      "Browne's Addition",
      "Manito",
      "Comstock",
      "Lincoln Heights",
      "Perry District",
      "Garland District",
      "Indian Trail",
      "Spokane Valley",
    ],
    metaDescription:
      "Garage door repair and installation in Spokane, WA. Climate-optimized solutions and expert service. Call Local Master Garage Door for a free estimate!",
  },
]

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug)
}
