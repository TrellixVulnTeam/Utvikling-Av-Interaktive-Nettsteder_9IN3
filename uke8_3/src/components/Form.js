import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
  const navigate = useNavigate()

  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Utfyllende måte å lage onChange på
  // const handleCommentChange = (event) => {
  //   setComment(event.currentTarget.value)
  // }

  // Funksjon som sender form
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
    console.log(comment)
    navigate('./produkter')
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <h2>Legg igjen en kommentar</h2>
      <label htmlFor="comment">
        Kommentar
        <textarea
          onChange={(e) => setComment(e.target.value)}
          id="comment"
          name="comment"
          cols={15}
          rows={5}
          value={comment}
        />
      </label>
      <button type="submit">{loading ? 'Sender...' : 'Send'}</button>
      {success ? <p>Kommentar sendt</p> : null}
    </form>
  )
}

export default Form
