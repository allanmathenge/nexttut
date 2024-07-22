import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: "Wiki-url params",
  description: "Build with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-red-500 ">
        <div className="top-0 fixed w-full">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
