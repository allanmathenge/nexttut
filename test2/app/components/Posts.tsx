import React from 'react'
import { getSortedPostsData } from '@/lib/posts'
import ListItem from './ListItem'

export default function Posts() {
    const posts = getSortedPostsData()
    
    return (
    <section className='mx-auto max-w-2xl'>
        <h2 className='text-4xl font-bold text-black/80'>Blogs</h2>
        <ul className='w-full'>
            {posts.map((post) => (
                <ListItem key={post.id} post={post} />
            ))}
        </ul>
    </section>
  )
}
