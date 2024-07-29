
import Link from 'next/link'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
          <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
            <Link href="/" className="text-white/80 no-underline hover:text-white transition-all delay-75">
              Allan Mathenge
            </Link>
          </h1>
          <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
            <Link className="text-white/80 hover:text-white transition-all delay-75" href="https://youtube.com/@allanmathenge?si=RzdBuCYFG5xQ0OJJ"><FaYoutube /></Link>
            <Link className="text-white/80 hover:text-white transition-all delay-75" href="/"><FaLaptop /></Link>
            <Link className="text-white/80 hover:text-white transition-all delay-75" href="https://x.com/1mathenge?t=AweH1iu6aZTwVxi06Ie5pA&s=09"><FaTwitter /></Link>
            <Link className="text-white/80 hover:text-white transition-all delay-75" href="https://github.com/allanmathenge/"><FaGithub /></Link>
          </div>
        </div>
    </nav>
  )
}
