"use client"

import Link from "next/link"
import React, { useEffect } from "react"

export default function Error({ error, reset}: { error: Error, reset: () => void}) {

  useEffect(() => {
    // clg error to a reporting service
    console.log(error)
  }, [error])

  return (
    <main className="bg-slate-200 mx-auto mx-w-lg py-1 px-4 min-h-screen">
      <h2 className="text-2xl font-bold my-4">Something went wrong!</h2>
      <button className="mb-4 p-4 bg-red-500 text-white text-2xl rounded-lg"
      onClick={
        // trying to re-render the segment
        () => reset()
      }
      >
        Try again
      </button>
      <p>
        Or go back <Link href="/" className="underline">Home</Link>
      </p>
    </main>
  )
}
