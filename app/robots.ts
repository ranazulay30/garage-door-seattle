import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/ppc/', '/api/'],
      },
    ],
    sitemap: 'https://www.localmastergaragedoor.com/sitemap.xml',
    host: 'https://www.localmastergaragedoor.com',
  }
}
