import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { getQuizzes } from './lib/services/quiz'
import Quiz from './pages/Quiz'
import Quizzes from './pages/Quizzes'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const getSanityData = () => {
    getQuizzes()
  }

  return (
    <Routes>
      {/* Gir konsistent Layout på alle ruter */}
      <Route element={<Layout />}>
        {/* /quiz */}
        <Route path="quiz">
          {/* /quiz */}
          <Route index element={<Quizzes />} />
          {/* quiz/et-eller-annet */}
          <Route path=":slug" element={<Quiz />} />
        </Route>
      </Route>
    </Routes>
  )
}
