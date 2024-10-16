import React from "react"
import getFormattedDate from "@/lib/getFormattedDate"
import Link from "next/link"

type Props = {
    post: Meta
}

export default function ListItems({ post }: Props) {

    const { id, title, date } = post

    const formatDate = getFormattedDate(date)

  return (
    <li className="mt-4 text-2xl text-white/90">
        <Link
            className="underline hover:text-black/80 transition-all delay-75" 
            href={`/posts/${id}`}>
            {title}
        </Link>
        <br />
        <p className="text-sm mt-1">{formatDate}</p>
    </li>
  )
}
