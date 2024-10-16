import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='mt-10'>
      <h2 className='text-2xl text-center '>Sorry, the requested page does not exist!</h2>
      <Link href="/" className='text-2xl'>Back to Home</Link>
    </div>
  )
}
