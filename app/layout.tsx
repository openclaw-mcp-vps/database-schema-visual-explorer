import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SchemaViz — Interactive Database Schema Explorer',
  description: 'Connect to your database, generate interactive schema diagrams, explore relationships, and export documentation. Built for backend developers working with complex databases.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f9c5ccaa-1e18-47bd-831b-d44ec3c7da49"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
