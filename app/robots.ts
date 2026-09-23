import type { MetadataRoute } from 'next'

const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'ClaudeBot',
  'anthropic-ai',
  'Amazonbot',
  'GoogleOther',
  // Explicit Allow for AEO: Gemini / AI Overviews training-adjacent features.
  // Change to disallow only if you intentionally opt out of Google AI use.
  'Google-Extended',
  'Applebot-Extended',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /en/blogg is also 308-redirected in middleware/next.config — belt and braces
        disallow: ['/api/', '/admin/', '/en/blogg', '/en/blogg/'],
      },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: '/' as const })),
    ],
    sitemap: 'https://www.frameflow.no/sitemap.xml',
  }
}
