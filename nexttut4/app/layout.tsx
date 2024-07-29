import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
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
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
