import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import html from 'remark-html'
import { remark } from 'remark'

const postsDirectory = path.join(process.cwd(), 'blogPosts')

export function getSortedPostsData() {
    // Get file names under /blogPosts
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {

        // Remove .md name extension to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readdirSync(fullPath, 'utf8')

        // Use gray matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // combine the post with the id
        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        }

        return blogPost
    })
    // sort posts by date
    return getSortedPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}

