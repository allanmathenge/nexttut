import React from 'react'
import Link from 'next/link'
import { FaYoutube, FaGithub, FaTwitter, FaLaptop } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className='bg-gray-400 drop-shadow-xl sticky p-4 z-10'>
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold grid place-content-center mb-2 ">
                <Link className="no-underline uppercase text-white/80 hover:text-white transition-all delay-100" href='/'>Allan Mathenge</Link>
            </h1>
            <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-3xl lg:text-3xl'>
                <Link href='https://youtube.com/@allanmathenge?si=RzdBuCYFG5xQ0OJJ' className='text-white/80 hover:text-white transition-all delay-100'>< FaYoutube /></Link>
                <Link href='https://x.com/1mathenge?t=AweH1iu6aZTwVxi06Ie5pA&s=09' className='text-white/80 hover:text-white transition-all delay-100'>< FaTwitter /></Link>
                <Link href='https://github.com/allanmathenge/' className='text-white/80 hover:text-white transition-all delay-100'>< FaGithub /></Link>
                <Link href='/' className='text-white/80 hover:text-white transition-all delay-100'>< FaLaptop /></Link>
            </div>
        </div>
    </nav>
  )
}
