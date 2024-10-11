import './globals.css'
import Navbar from './components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Created by Allan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-700">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
