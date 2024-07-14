import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
        <h4>Sorry, user not found</h4>
        <Link href="/users">Back to users</Link>
    </>
  )
}
