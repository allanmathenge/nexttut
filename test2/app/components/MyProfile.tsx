import React from 'react'
import Image from 'next/image'

export default function MyProfile() {
  return (
    <section className="w-full mx-auto">
        <Image
            src="/images/headphones_a_4.webp"
            width={200}
            height={200}
            className="border-[1px] border-black drop-shadow-xl shadow-black mt-8 rounded-full mx-auto"
            alt="Allan Mathenge profile"
            priority={true}
        />
    </section>
  )
}
