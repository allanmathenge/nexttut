import React from "react"
import getFormattedDate from "@/lib/getFormattedDate"
import { getPostsByName, getPostsMeta } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

export const revalidate = 86400

type Props = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {

  const posts = await getPostsMeta() // deduped- all fetches are deduped during build

  if (!posts) return []

  return posts.map((post) => ({
    postId: post.id,
  }))

}

export async function generateMetadata({ params: { postId }}: Props) {

  const post = await getPostsByName(`${postId}.mdx`) // all fetches are deduped during build

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  return {
    title: post.meta.title,
  }
}

export default async function Post({ params: { postId }}: Props) {

  const post = await getPostsByName(`${postId}.mdx`) // deduped -> all fetches are deduped during build

  if (!post) notFound() // Custom 404, no need to use return keyword as typescript uses type: never
  
  const { meta, content } = post

  const pubDate = getFormattedDate(meta.date)

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
  ))

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm ">{pubDate}</p>
      <article>
        {content}
      </article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-grow gap-10">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/">Back Home</Link>
      </p>
    </>
  )
}
