import Posts from './components/Posts'

export const revalidate = 10

export default function Home() {

  return (
    <main className='px-6 mx-auto'>
      <h1 className='py-12 text-3xl text-center'>Hello world</h1>
      <Posts />
    </main>
  );
}
