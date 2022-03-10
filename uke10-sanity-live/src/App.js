import { getQuizzes } from './lib/services/quiz'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const getSanityData = () => {
    getQuizzes()
  }

  return (
    <main>
      <button type="button" onClick={getSanityData}>
        Hent Data
      </button>
    </main>
  )
}
