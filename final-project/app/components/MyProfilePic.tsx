import React from "react"
import Image from "next/image"

export default function MyProfilePic() {
  return (
    <section>
      <Image
        className="border-4 border-black mx-auto dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mt-8"
        src="/images/hello.jpg"
        width={250}
        height={250}
        alt="Allan Mathenge Profile pic"
        priority={true}
      />
    </section>
  )
}
