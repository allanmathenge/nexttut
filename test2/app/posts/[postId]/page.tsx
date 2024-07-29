import React from 'react'
import Link from 'next/link'
import { getSortedPostsData, getPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate'

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map(post => {
        postId: post.id
    })
}

export function generateMetadata({ params }: { params : { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if(!post) {
        return {
            title: 'Post not found'
        }
    }

    return {
        title: post.title
    }
}

export default async function Posts({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData() //deduped request
    const { postId } = params

    if (!posts.find((post) => post.id === postId )) {
        notFound()
    }

    const { title, date, contentHtml } = await getPostsData(postId);

    const pubDate = getFormattedDate(date);

    return (
        <main className='px-6 prose prose-xl prose-slate mx-auto'>
            <h1 className='mt-4 mb-0 text-3xl'>{title}</h1>
            <p className='mt-0'>{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{__html: contentHtml}} />
                <p>
                    <Link href='/'>Back Home</Link>
                </p>
            </article>
        </main>
    )
}
