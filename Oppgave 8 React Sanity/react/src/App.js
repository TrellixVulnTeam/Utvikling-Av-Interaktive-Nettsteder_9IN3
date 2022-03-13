import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import Navigation from './components/Navigation'

export default function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  )
}
