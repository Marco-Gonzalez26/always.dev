import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
function Layout({ children }) {
  return (
    <div className="md:px-20 h-screen px-8">
      <Head>
        <title>always.dev | Home</title>
        <meta
          name="description"
          content="This blog is made with ❤️ by Marco González | always.dev"
        />
        <link rel="icon" href="/dev.png" />
      </Head>
      <Navbar />
      <main className="container">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
