import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <h1>Hello world</h1>
      <Link href='/feedback'>Fill our form</Link>
    </main>
  )
}
