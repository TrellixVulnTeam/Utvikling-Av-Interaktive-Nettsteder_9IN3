import { Route, Routes } from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Layout from './components/Layout'
import NoMatch from './components/NoMatch'

export default function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hjem" element={<Home />} />
          {/* Muliggjør /produkter */}
          <Route path="produkter" element={<Products />}>
            {/* Muliggjør /produkter/dynamisk-id */}
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="om" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}
