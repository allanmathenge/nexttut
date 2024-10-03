import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Data Mutation",
  description: "Data mutation series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-slate-500"
      >
        <Navbar />
        <main className="max-w-xl mx-auto bg-stone-200 h-[100vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
