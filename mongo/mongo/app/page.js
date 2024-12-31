import Link from "next/link"
import React from "react"

export default function Home() {
  return (
    <section className="max-w-lg mx-auto flex flex-col h-[120px] border border-slate-400 mt-8 justify-center items-center text-slate-800">
      <Link href="/register" className="text-4xl ">Register</Link>
      <div className="border w-full border-slate-400 my-1"/>
      <Link href="/users" className="text-4xl ">Users</Link>
    </section>
  )
}
