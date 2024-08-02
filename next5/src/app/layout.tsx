import './globals.css'

export const metadata = {
  title: 'Route Handlers',
  description: 'Created by Allan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
