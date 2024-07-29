import React from 'react'
import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black mx-auto dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mt-8"
        src="/images/headphones_c_1.webp"
        alt="Allan Mathenge profile"
        width={200}
        height={200}
        priority={true}
      />
    </section>
  )
}
