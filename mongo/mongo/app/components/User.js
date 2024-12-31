import Link from 'next/link'
import React from "react"

export default function User({name, email, _id}) {
  return (
    <>
        {
            <div className="flex gap-3 justify-between">
                <Link href={`/user/${_id}`}>{email}</Link>
                <Link href={`/user/${_id}`}>{name}</Link>
            </div>
        }
    </>
  )
}
