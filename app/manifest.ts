import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Frameflow – Markedsføringsbyrå i Bergen',
    short_name: 'Frameflow',
    description: 'Webdesign, foto og video, sosiale medier og branding i Bergen.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2172b5',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
      { src: '/logo.png', sizes: '500x500', type: 'image/png' },
    ],
  }
}
