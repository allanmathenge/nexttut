import Posts from './components/Posts'

export const revalidate = 10

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello 👋 &nbsp;
      </p>
      <Posts />
    </main>
  )
}
