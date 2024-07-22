'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        await router.push(`/${search}/`)
    }

  return (

    <form
        onSubmit={handleSubmit}
        className="w-50 flex justify-center md:justify-between">
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none p-2 bg-gray-500 w-80 text-xl rounded-xl"
            placeholder="Search..."
        />
        <button type="submit" className="p-2 text-xl rounded-full bg-slate-300 ml-2 font-bold">
            🚀
        </button>
    </form>
  )
}
