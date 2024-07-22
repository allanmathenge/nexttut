'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

const Search = (props: Props) => {
    const router = useRouter()
    const [search, setSearch] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        await router.push(`/${search}`)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input 
                type="text"
                className="p-2 text-xl bg-gray-50 rounded-lg focus:outline-none"
                placeholder="Search ..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button type="submit" className="p-3 rounded-full text-xl bg-gray-50">📧</button>
        </form>
    </div>
  )
}

export default Search