"use client"

import React, { useState, useTransition, ChangeEvent, FormEvent } from "react"
import { useRouter, usePathname } from "next/navigation"

const initState: Partial<Todo> = {
    userId: 1,
    title: ""
}

export default function AddTodo() {

    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    const [data, setData] = useState(initState)

    const isMutating = isPending || isFetching

    const { userId, title } = data

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsFetching(true)
        const res = await fetch(`http://127.0.0.1:3500/todos`, {
            method: 'POST',
            headers: {
                'Content-Tye': 'application/json'
            },
            body: JSON.stringify({
                userId, title
            })
        })
        // console.log(title)
        setIsFetching(false)
        await res.json()

        setData((prevData) => ({
            ...prevData, title:""
        }))

        startTransition(() => {
            if (pathname === "/add") {
                router.push("/")
            } else {
                // Router refresh fetch data without losing the client side data or react-state
                router.refresh()
            }
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        setData(prevData => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const content = (
        <form
            onSubmit={handleSubmit}
            className="flex gap-2 items-center p-2"
            style={{ opacity: !isMutating ? 0.7 : 1 }}
        >
            <input
                type="text"
                id="title"
                name="title"
                value={data.title}
                onChange={handleChange}
                className="text-2xl p-1 rounded-lg flex-grow w-full outline-none border-solid border border-black/80"
                placeholder="New Todo"
                autoFocus
            />
            <button
                type="submit"
                className="p-2 border border-black/80 bg-green-300 hover:bg-green-500 rounded-lg text-white font-bold"
            >
                Submit
            </button>
        </form>
    )

  return content
}
