
import { compileMDX } from "next-mdx-remote/rsc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import CustomImage from "@/app/components/CustomImage"
import Video from "@/app/components/Video"

type Filetree = {
    "tree": [
        {
            "path": string
        }
    ]
}

export async function getPostsByName(fileName: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/allanmathenge/mdx/master/${fileName}`, {
        headers: {
           Accept: 'application/vnd.github+json',
           Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
           'X-Github-Api-Version': '2022-11-28'
        }
    })

    if (!res.ok) return undefined

    const rawMDX = await res.text()

    if (rawMDX === '404: Not Found') return undefined

    const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[]}>({
        source: rawMDX,
        // video and image customs to be added later
        components: {
            CustomImage,
            Video,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                ]
            }
        }
    })

    const id = fileName.replace(/\.mdx$/, '')

    const blogPostObj: BlogPost = { meta: { id, date: frontmatter.date, title: frontmatter.title, tags: frontmatter.tags}, content}

    return blogPostObj
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
   const res = await fetch('https://api.github.com/repos/allanmathenge/mdx/git/trees/master?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-Github-Api-Version': '2022-11-28'
        }
   })

   if (!res.ok) return undefined

   const repoFiletree: Filetree = await res.json()

//    console.log(repoFiletree)

   const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

   const posts: Meta[] = []

   for (const file of filesArray) {
    const post = await getPostsByName(file)
    if (post) {
        const { meta } = post
        posts.push(meta)
    }
   }

   return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}
