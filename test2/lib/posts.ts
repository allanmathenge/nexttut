import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import html from 'remark-html'
import { remark } from 'remark'

const postsDirectory = path.join(process.cwd(), 'blogPosts')

export function getSortedPostsData() {

    // get file names under /blogPosts
    const fileNames = fs.readdirSync(postsDirectory)

    const allPostsData = fileNames.map((fileName) => {
        // Remove .md file extension to get the file name as the id

        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as a string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combining the data with the id
        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        }

        return blogPost
    })

    // Sort postsData by date
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}

// Remark and remark-html generates the html for the markdown files
export async function getPostsData(id: string) {

    const fullPath = path.join(postsDirectory, `${id}.md`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString();

    // combine data with id
    const blogPostsWithHtml: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    }

    return blogPostsWithHtml
}
