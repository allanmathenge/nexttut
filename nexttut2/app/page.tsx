import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  )
}
