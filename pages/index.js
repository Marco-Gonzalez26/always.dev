import Head from 'next/head'
import { createRssFeed, getAllFilesMetaData } from '../lib/mdx.js'
import ListOfPosts from 'components/ListOfPosts.js'
import ListOfBooks from 'components/ListOfBooks.js'
import Sidebar from 'components/Sidebar.js'
// import ListOfCourses from 'components/ListOfCourses.js'

export default function Home({ posts }) {
  return (
    <div className=" flex  w-full relative">
      <Head>
        <title>always.dev | Home</title>
        <meta
          name="description"
          content="This blog is made with ❤️ by Marco always.dev"
        />
        <link rel="icon" href="/dev.png" />
      </Head>

      <section className="flex flex-col relative w-2/3 sm:w-full">
        <ListOfPosts posts={posts} />
        {/* <ListOfCourses /> */}
        <ListOfBooks />
      </section>
      <aside>
        <Sidebar />
      </aside>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetaData()
  await createRssFeed()
  return {
    props: {
      posts
    }
  }
}

