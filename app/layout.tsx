import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akash Kumar Singh - Automation & Cybersecurity Expert",
  description:
    "Professional automation and cybersecurity expert with 1+ years of experience. Specializing in CRM automation, network security, and digital marketing campaigns.",
  keywords: "cybersecurity, automation, CRM, GoHighLevel, HubSpot, Meta Ads, network security, workflow automation",
  authors: [{ name: "Akash Kumar Singh" }],
  openGraph: {
    title: "Akash Kumar Singh - Automation & Cybersecurity Expert",
    description:
      "Professional automation and cybersecurity expert specializing in CRM automation and network security.",
    url: "https://akashsingh.me",
    siteName: "Akash Kumar Singh Portfolio",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
