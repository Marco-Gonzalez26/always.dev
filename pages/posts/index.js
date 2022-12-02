import ListOfPosts from 'components/ListOfPosts.js'
import React from 'react'
import { getAllFilesMetaData } from 'lib/mdx.js'

function Posts({ posts }) {
  return <ListOfPosts posts={posts} />
}

export default Posts

export async function getStaticProps() {
  const posts = await getAllFilesMetaData()
  return {
    props: {
      posts
    }
  }
}
