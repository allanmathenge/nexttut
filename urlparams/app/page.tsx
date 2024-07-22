import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} max-w-lg mx-auto mt-24`}>
      <h2 className="">Hello world!</h2>
    </main>
  );
}
