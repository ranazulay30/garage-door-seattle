import { MetadataRoute } from 'next'
import { getAllCitySlugs } from '@/lib/cities'

const BASE_URL = 'https://www.localmastergaragedoor.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const citySlugs = getAllCitySlugs()

  const cityUrls = citySlugs.map((slug) => ({
    url: `${BASE_URL}/service-areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ppc`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/ppc/garage-door-repair`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/ppc/garage-door-installation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...cityUrls,
  ]
}
