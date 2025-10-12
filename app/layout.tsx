import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Suspense } from "react"
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  // ✅ Global Title & Template
  title: {
    default: 'AIVA - AI Virtual Agent',
    template: '%s | AIVA',
  },

  // ✅ Global Description
  description: 'Deploy your first AI Video Agent today! Boost engagement and automate conversations.',

  // ✅ Keywords help in semantic search (not a ranking factor but good practice)
  keywords: [
    'AI Video Agent',
    'Virtual Agent',
    'AIVA',
    'SaleAssist',
    'Chatbot',
    'Conversational AI',
  ],

  // ✅ Base URL — important for OG & Canonical links
  metadataBase: new URL('https://aiva.saleassist.ai'),

  // ✅ Robots settings (Allow indexing)
  robots: {
    index: true,
    follow: true,
  },

  // ✅ Open Graph — Social sharing (Facebook, LinkedIn etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiva.saleassist.ai',
    siteName: 'AIVA',
    title: 'AIVA - AI Virtual Agent',
    description: 'Deploy your first AI Video Agent today!',
    images: [
      {
        url: 'https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/tryaivavideoagent',
        width: 1200,
        height: 630,
        alt: 'AIVA Video Agent OG Banner',
      },
    ],
  },

  // ✅ Twitter Card — Social sharing (Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: 'AIVA - AI Virtual Agent',
    description: 'Deploy your first AI Video Agent today!',
    images: [
      'https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/tryaivavideoagent',
    ],
    creator: '@salesassist_ai',
  },

  // ✅ Canonical URL — avoid duplicate content issues
  alternates: {
    canonical: 'https://aiva.saleassist.ai',
  },

  // ✅ Icons — favicon + PWA icons
  icons: {
    icon: [
      { url: '/favicon.png' }
    ],
    apple: '/apple-touch-icon.png', // 📌 also add this in /public
  },

  generator: 'SaleAssist.ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="SaleAssist.ai" />
        <meta name="copyright" content="SaleAssist.ai © 2025" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <script src="https://static.saleassist.ai/vtiles/swidget.min.js"></script>


        {/* ✅ JSON-LD: Organization Structured Data (For rich search results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AIVA',
              url: 'https://aiva.saleassist.ai',
              logo: 'https://aiva.saleassist.ai/images/design-mode/aiva-logo-new.png', // 📌 replace with actual logo URL
              sameAs: [
                'https://x.com/salesassist_ai',
                'https://www.linkedin.com/company/safemeet/',
                'https://www.facebook.com/SaleAssistAI/',
                'https://www.instagram.com/sale.assist/',
                'https://www.youtube.com/@saleassist4711'
              ],
            }),
          }}
        />

        {/* ✅ Optional: WebSite structured data for site search enhancements */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AIVA',
              url: 'https://aiva.saleassist.ai',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://aiva.saleassist.ai/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>

      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} hero-gradient min-h-screen`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        
      </body>
    </html>
  )
}
