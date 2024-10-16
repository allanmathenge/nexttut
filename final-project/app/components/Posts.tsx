import React from "react"
import { getPostsMeta } from "@/lib/posts"
import ListItems from "./ListItems"

export default async function Posts() {

  const posts = await getPostsMeta()

  if (!posts) return <p>Sorry, no posts found</p>

  return (
    <section className="mt-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold dark:text-white/80">Blogs</h1>
      <ul className="list-none w-full p-0">
        {
          posts?.map((post) => (
            <ListItems key={post.id} post={post} />
          ))
        }
      </ul>
    </section>
  )
}
