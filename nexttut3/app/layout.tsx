import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'App',
  description: 'Created by Allan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-300">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
