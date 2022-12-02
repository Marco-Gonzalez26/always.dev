import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
function Layout({ children }) {
  return (
    <div className="px-6 h-screen">
      <Navbar />
      <main className="container">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
