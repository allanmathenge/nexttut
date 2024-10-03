import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky p-4 top-0 z-10 bg-slate-400 text-2xl font-bold shadow-sm">
        <div className="max-w-xl flex justify-between items-center mx-auto">
            <h2>
                <Link
                    href="/"
                    className="no-underline text-white/90 hover:text-white"
                >
                    Nextjs Todos
                </Link>
            </h2>
            <Link
                className="text-white/90 hover:text-white no-underline"
                href="/add"
            >Add</Link>
        </div>
    </nav>
  )
}
