"use client"

import React, { useState, useTransition, ChangeEvent, MouseEvent} from "react"
import { FaTrash } from "react-icons/fa"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Todo(todo: Todo) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isMutating = isFetching || isPending

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {

    setIsFetching(true)
    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...todo, completed: !todo.completed
      })
    })

    await res.json()
    setIsFetching(false)

    startTransition(() => {
      // Refresh the current route and fetch data from the server without losing the client-side browser or react-state
      router.refresh()
    })
  }

  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    setIsFetching(true)

    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: todo.id
      })
    })

    await res.json()
    setIsFetching(false)
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without losing the client-side browser or react-state
      router.refresh()
    })
  }

  return (
    <article
      className="my-4 flex justify-between items-center"
      style={{ opacity: !isMutating ? 1 : 0.7 }}
    >
      <label className="text-2xl hover:underline capitalize">
        <Link
          href={`/edit/${todo.id}`}>
          {todo.title}
        </Link>
      </label>
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          id="completed"
          name="completed"
          onChange={handleChange}
          disabled={isPending}
          className="min-w-[2rem] min-h-[2rem]"
        />
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300"
        >
          <FaTrash />
        </button>
      </div>
    </article>
  )
}
