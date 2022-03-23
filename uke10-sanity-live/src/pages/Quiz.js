import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Answer from '../components/Answer'
import Question from '../components/Question'
import { getQuizBySlug, createGame } from '../lib/services/quiz'

function Quiz() {
  const [current, setCurrent] = useState(0)
  const [content, setContent] = useState(null)
  const [answers, setAnswers] = useState([])
  const currentQuestion = content?.questions[current]
  const checkedAnswer = answers?.[current]
  const isFail = !checkedAnswer?.correct
  const { slug } = useParams()

  useEffect(() => {
    const getQuiz = async () => {
      const data = await getQuizBySlug(slug)
      setContent(data)
    }
    getQuiz()
  }, [slug])

  const updateAnswer = (answer) => {
    // setAnswers((prev) => [...prev, answer])
    console.log([...answers.slice(0, current)])
    console.log([answer])
    setAnswers([
      ...answers.slice(0, current),
      answer,
      ...answers.slice(current + 1),
    ])
  }
  //TODO asdadasdads
  const progress = async () => {
    if (current + 1 > content?.questions?.length) {
      const result = await createGame({
        email: 'joakim.vu@hiof.no',
        quizId: content?._id,
      })
    } else {
      setCurrent((prev) => prev + 1)
    }
  }

  return (
    <div>
      <h1 className="mb3 text-2xl font-bold text-white">Quiz</h1>
      {JSON.stringify(answers)}
      <section key={currentQuestion?._key}>
        <Question title={currentQuestion?.title} />
        {currentQuestion?.answers?.map((answer) => (
          <Answer
            key={answer._key}
            answer={answer}
            updateAnswer={updateAnswer}
            checkedAnswer={checkedAnswer}
            isFail={isFail}
          />
        ))}
        <button
          type="button"
          className="mt-4 rounded bg-orange-400 px-4 py-2 text-white"
          onClick={progress}
        >
          Neste
        </button>
      </section>
    </div>
  )
}

export default Quiz
