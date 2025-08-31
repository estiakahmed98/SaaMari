import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "SaaMari — Elevating Health, Wellness & Humanity",
  description:
    "A luxury health, wellness & health-tech company building our global flagship. Welcoming visionary partners worldwide.",
  generator: "SaaMari",
  keywords: ["health", "wellness", "health-tech", "luxury", "premium", "SaaMari"],
  authors: [{ name: "SaaMari" }],
  creator: "SaaMari",
  publisher: "SaaMari",
  openGraph: {
    title: "SaaMari — Elevating Health, Wellness & Humanity",
    description: "A luxury health, wellness & health-tech company building our global flagship.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaMari — Elevating Health, Wellness & Humanity",
    description: "A luxury health, wellness & health-tech company building our global flagship.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfair.variable} ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
