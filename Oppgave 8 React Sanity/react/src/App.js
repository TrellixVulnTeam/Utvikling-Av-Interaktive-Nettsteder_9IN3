import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import Navigation from './components/Navigation'
import Actors from './components/Actors'
import ActorInfo from './components/ActorInfo'

export default function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/actors/:actorname" element={<ActorInfo />} />
      </Routes>
    </>
  )
}
