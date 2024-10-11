import getFormattedDate from '@/lib/getFormattedDate'
import { getPostsMeta, getPostByName } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import "highlight.js/styles/github-dark.css"

export const revalidate = 0 // same as doing no-cache

type Props = {
  params: {
    postId: string
  }
}

// gerateStatic params and revalidate = 0 do not mix

// export async function generateStaticParams() {

//   const posts = await getPostsMeta() // deduped- all the fetches are deduped during the build 
// if (!posts) return []
//   return posts.map((post) => ({
//     postId: post.id
//   }))
// }

export async function generateMetadata({ params: { postId }}: Props) {

  const post = await getPostByName(`${postId}.mdx`) // deduped - all fetches are deduped during build

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.meta.title
  }
}

export default async function Post({ params: { postId }}: Props) {

  const post = await getPostByName(`${postId}.mdx`) // deduped - all fetches are deduped during build

  if (!post) notFound() // Our custom 404. No need for the return keyword coz typescript uses notFound() type as never

  const { meta, content } = post

  const pubDate = getFormattedDate(meta.date)

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
  ))

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">
        {pubDate}
      </p>
      <article>
        {content}
      </article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-grow gap-4 ">
          {tags}
        </div>
      </section>
      <p className="mb-10">
        <Link href="/" className='flex items-center gap-2'><FaArrowLeft /> back to Home</Link>
      </p>
    </>
  )
}
