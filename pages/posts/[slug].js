import { useEffect } from 'react'
import Head from 'next/head.js'
import { MDXRemote } from 'next-mdx-remote'

// Get MDX Components
import MDXComponents from '../../components/MDX/MDXComponents.js'
//Get functions to get the Markdown Data from directory
import { getFileBySlug, getFiles } from '../../lib/mdx.js'

// Import Prismjs to highlight the code
import Prism from 'prismjs'

export default function Post({ source, fromMatter }) {
  useEffect(() => {
    if (window != undefined) {
      Prism.highlightAll()
    }
  }, [])
  return (
    <>
      <Head>
        <title>always.dev | {fromMatter.title}</title>
        <meta name="description" content={fromMatter.description} />
      </Head>
      <MDXRemote {...source} components={MDXComponents} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const { source, fromMatter } = await getFileBySlug(slug)

  return {
    props: { source, fromMatter }
  }
}

export async function getStaticPaths() {
  const posts = await getFiles()
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.replace(/\.mdx/, '')
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}
