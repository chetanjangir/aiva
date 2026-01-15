import type { Metadata } from 'next'
import Script from 'next/script'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Suspense } from "react"
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'AIVA - AI Virtual Agent',
    template: '%s | AIVA',
  },
  description: 'Deploy your first AI Video Agent today! Boost engagement and automate conversations.',
  keywords: [
    'AI Video Agent',
    'Virtual Agent',
    'AIVA',
    'SaleAssist',
    'Chatbot',
    'Conversational AI',
  ],
  metadataBase: new URL('https://aiva.saleassist.ai'),
  robots: { index: true, follow: true },
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
  twitter: {
    card: 'summary_large_image',
    title: 'AIVA - AI Virtual Agent',
    description: 'Deploy your first AI Video Agent today!',
    images: [
      'https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/tryaivavideoagent',
    ],
    creator: '@salesassist_ai',
  },
  alternates: { canonical: 'https://aiva.saleassist.ai' },
  icons: {
    icon: [{ url: '/favicon.png' }],
    apple: '/apple-touch-icon.png',
  },
  generator: 'SaleAssist.ai',
}

const GTM_ID = 'GTM-WFFGHZKG'

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

        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* ✅ End Google Tag Manager */}

        {/* ✅ JSON-LD: Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AIVA',
              url: 'https://aiva.saleassist.ai',
              logo: 'https://aiva.saleassist.ai/images/design-mode/aiva-logo-new.png',
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

        {/* ✅ Optional: WebSite structured data */}
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
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* ✅ End Google Tag Manager (noscript) */}

        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
