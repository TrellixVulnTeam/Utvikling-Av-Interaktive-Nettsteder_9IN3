import { Routes, Route } from 'react-router-dom'
import Event from './pages/Event'
import Events from './pages/Events'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import DefaultLayout from './layout/DefaultLayout'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="hjem" element={<Home />} />
          <Route path="events">
            <Route index element={<Events />} />
            <Route path=":slug" element={<Event />} />
          </Route>
          <Route path="kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
