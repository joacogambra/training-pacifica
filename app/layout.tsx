import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { LoadingScreen } from "@/components/loading-screen"
import { WhatsAppButton } from "@/components/whatsapp-button"

const fontSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Pacífica Swimwear",
  description: "Swimwear & beachwear produced sustainably",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-white font-sans antialiased", fontSans.variable)}>
        <LoadingScreen />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
