import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ireland's Top Betting Sites 2025 | Best Irish Bookmakers | IETopBettingSites",
  description:
    "Discover Ireland's most trusted betting sites with exclusive bonuses for Irish players. Expert reviews, verified licenses, and the best odds. Updated daily for 2025.",
  keywords:
    "Irish betting sites, Ireland bookmakers, best betting sites Ireland, Irish gambling, sports betting Ireland, online betting Ireland, Irish casino bonuses",
  authors: [{ name: "IETopBettingSites Team" }],
  creator: "IETopBettingSites",
  publisher: "IETopBettingSites",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://ietopbettingsites.com",
    siteName: "IETopBettingSites",
    title: "Ireland's Top Betting Sites 2025 | Best Irish Bookmakers",
    description:
      "Discover Ireland's most trusted betting sites with exclusive bonuses for Irish players. Expert reviews, verified licenses, and the best odds.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Ireland+Top+Betting+Sites",
        width: 1200,
        height: 630,
        alt: "Ireland's Top Betting Sites 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IETopBetting",
    creator: "@IETopBetting",
    title: "Ireland's Top Betting Sites 2025 | Best Irish Bookmakers",
    description:
      "Discover Ireland's most trusted betting sites with exclusive bonuses for Irish players. Expert reviews, verified licenses, and the best odds.",
    images: ["/placeholder.svg?height=630&width=1200&text=Ireland+Top+Betting+Sites"],
  },
  alternates: {
    canonical: "https://ietopbettingsites.com",
  },
  other: {
    "geo.region": "IE",
    "geo.country": "Ireland",
    "geo.placename": "Ireland",
    language: "en-IE",
    "target-audience": "Irish players, Irish bettors, Ireland gambling",
    "content-language": "en-IE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IE">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#007F5F" />
        <meta name="msapplication-TileColor" content="#007F5F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data for Irish Betting Sites */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "IETopBettingSites",
              alternateName: "Ireland's Top Betting Sites",
              url: "https://ietopbettingsites.com",
              description:
                "Ireland's most trusted betting comparison site with expert reviews of licensed Irish bookmakers",
              inLanguage: "en-IE",
              audience: {
                "@type": "Audience",
                geographicArea: {
                  "@type": "Country",
                  name: "Ireland",
                },
              },
              publisher: {
                "@type": "Organization",
                name: "IETopBettingSites",
                url: "https://ietopbettingsites.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://ietopbettingsites.com/logo.png",
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
