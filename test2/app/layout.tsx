import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/Navbar'
import MyProfile from './components/MyProfile'

export const metadata: Metadata = {
  title: "BLOG BY ALLAN",
  description: "Blog created by Allan Mathenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-slate-200">
        <Navbar />
        <MyProfile />
        {children}
      </body>
    </html>
  );
}
