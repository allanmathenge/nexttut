import React from "react"

import { getPostsMeta } from "@/lib/posts"
import ListItems from "@/app/components/ListItems"
import Link from "next/link"

export const revalidate = 86400;

type Props = {
    params: {
        tag: string
    }
}

// export const revalidate = 0 and generateStaticParams() do not mix

export async function generateStaticParams() {

    const posts = await getPostsMeta() // all fetches are deduped during build

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}

export async function generateMetadata({ params: { tag }}: Props) {
    return {
        title: `Post about ${tag}`
    }
}

export default async function TagPosts({params: { tag }}: Props) {

    const posts = await getPostsMeta()

    if (!posts) return <p className="text-2xl mt-10 text-center">Sorry, no posts found!</p>

    const tagPosts = posts.filter((post) => post.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <div className="mt-10">
                <p className="text-center">
                    Sorry, not posts for that keyword!
                </p>
                <Link href="/">
                    Back to Home
                </Link>
            </div>
        )
    }

  return (
    <>
        <h2 className="text-3xl mt-4 mb-0">
            Results for: #{tag}
        </h2>

        <section className="mt-6 mx-auto max-w-2xl">
            <ul className="w-full list-none p-0">
                {
                    tagPosts.map((post) => (
                        <ListItems key={post.id} post={post} />
                    ))
                }
            </ul>
        </section>
    </>
  )
}
