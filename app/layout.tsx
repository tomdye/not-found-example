import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SearchBar } from "@/components/search-bar"
import "./globals.css"
import { Suspense } from "react"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <header className="border-b border-border bg-background">
            <div className="container mx-auto px-4 py-4 flex items-center justify-center">
              <SearchBar />
            </div>
          </header>
        </Suspense>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
