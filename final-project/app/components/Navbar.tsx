import Link from "next/link"
import React from "react"
import { FaGithub, FaLaptop, FaTwitter, FaYoutube } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="py-4 sticky drop-shadow-xl top-0 z-10 bg-slate-600">
        <div className="prose prose-xl md:px-6 mx-auto flex justify-between flex-col md:flex-row">
            <h1 className="text-3xl font-bold place-content-center mb-2 md:mb-0">
                <Link
                    className="text-white/80 hover:text-white no-underline transition-all delay-75"
                    href="/">
                    NextJs Blogs
                </Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl ">
                <Link 
                    className="text-white/80 hover:text-white no-underline transition-all delay-75"
                    href="https://youtube.com/@allanmathenge?si=RzdBuCYFG5xQ0OJJ"
                >
                    <FaYoutube />
                </Link>

                <Link
                    className="text-white/80 hover:text-white no-underline transition-all delay-75"
                    href="/"
                >
                    <FaLaptop />
                </Link>

                <Link
                    className="text-white/80 hover:text-white no-underline transition-all delay-75"
                    href="https://x.com/1mathenge?t=AweH1iu6aZTwVxi06Ie5pA&s=09"
                >
                    <FaTwitter />
                </Link>

                <Link 
                    className="text-white/80 hover:text-white no-underline transition-all delay-75"
                    href="https://github.com/allanmathenge/"
                >
                    <FaGithub />
                </Link>
            </div>
        </div>
    </nav>
  )
}
