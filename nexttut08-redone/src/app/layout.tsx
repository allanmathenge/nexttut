import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Data Mutation in Nextjs",
  description: "Learning series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main className="mx-auto max-w-xl bg-stone-200 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
