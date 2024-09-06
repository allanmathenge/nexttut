"use client"

import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <h1>Hello to next.js routers</h1>
      <Link href="/feedback">Give us your feedback</Link>
    </main>
  );
}
