import type React from "react"
import type { Metadata } from "next"
import { Manrope, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bundledws.com"),
  title: {
    default: "BundledWS - Enterprise SaaS Platform",
    template: "%s | BundledWS",
  },
  description: "The modern platform for teams who ship fast. Built for scale, designed for speed.",
  applicationName: "BundledWS",
  keywords: ["BundledWS", "work management", "SaaS", "team collaboration", "productivity"],
  openGraph: {
    title: "BundledWS - Enterprise SaaS Platform",
    description: "The modern platform for teams who ship fast. Built for scale, designed for speed.",
    url: "https://bundledws.com",
    siteName: "BundledWS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BundledWS - Enterprise SaaS Platform",
    description: "The modern platform for teams who ship fast. Built for scale, designed for speed.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${outfit.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
