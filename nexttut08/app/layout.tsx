import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "Todos List",
  description: "Created for learning NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="dark:bg-slate-400 font-thin">
          <Navbar />
          <main className="mx-auto max-w-xl bg-stone-200 min-h-screen">
            {children}
          </main>
        </body>
    </html>
  );
}
