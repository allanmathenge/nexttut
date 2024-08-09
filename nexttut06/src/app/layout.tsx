import './globals.css'

export const metadata = {
  title: 'REST API',
  description: 'Created by Allan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-400">
        {children}
      </body>
    </html>
  )
}
