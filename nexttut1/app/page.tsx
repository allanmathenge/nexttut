import { Inter } from '@next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>This is homepage <code>/</code></h1>
      <Link href="/about">Go to About page</Link>
    </main>
  )
}
