import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import  ConfigureAmplifyClientSide  from './auth/config'

export const metadata: Metadata = {
  title: "Swift Lift Club",
  description: "Manage your lift club trips and fares",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ConfigureAmplifyClientSide />
        <Header />
        <Sidebar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}