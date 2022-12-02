import { getFileBySlug, getFiles } from '../../lib/mdx.js'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '../../components/MDX/MDXComponents.js'

export default function Post({ source, fromMatter }) {
  console.log({ fromMatter })
  return <MDXRemote {...source} components={MDXComponents} />
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
