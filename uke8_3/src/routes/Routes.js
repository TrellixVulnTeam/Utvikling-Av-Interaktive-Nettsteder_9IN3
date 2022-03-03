import { Routes, Route } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Post from '../pages/Post'
import Posts from '../pages/Posts'

function PageRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="posts">
          <Route index element={<Posts />} />
          <Route path=":id" element={<Post />} />
        </Route>
        {/* <Route path="produkter" element={<Tjenester />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default PageRoutes
