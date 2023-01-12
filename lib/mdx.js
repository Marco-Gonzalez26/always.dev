import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { Feed } from 'feed'
import dotenv from 'dotenv'
import { getAlgoliaIndexes } from '../lib/algolia.js'
dotenv.config()

const root = process.cwd()

export const getFiles = () => fs.readdirSync(path.join(root, 'data'))

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, 'data', `${slug}.mdx`),
    'utf-8'
  )

  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {})

  return {
    source,
    fromMatter: {
      slug,
      ...data
    }
  }
}

export const getAllFilesMetaData = () => {
  const files = getFiles()

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(path.join(root, 'data', postSlug))
    const { data } = matter(mdxSource)

    return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts]
  }, [])
}

export const createRssFeed = async () => {
  const posts = await getAllFilesMetaData()
  const siteUrl = process.env.WEBSITE_URL
  const date = new Date()
  const author = {
    name: 'Marco Gonzalez',
    email: 'magp260602@gmail.com'
  }

  const feed = new Feed({
    title: "Always-dev's Blog",
    description: '',
    id: siteUrl,
    link: siteUrl,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteUrl}/index.xml`,
      json: `${siteUrl}/index.json`
    },
    author
  })

  await posts.forEach(async (post) => {
    const url = `${siteUrl}/posts/${post.slug}`

    await feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      author: [author],
      contributor: [author],
      date: new Date(post.date)
    })

    fs.mkdirSync('./public', { recursive: true })
    fs.writeFileSync('./public/index.xml', feed.rss2())
    fs.writeFileSync('./public/index.json', feed.json1())
  })

  await getAlgoliaIndexes()
}
