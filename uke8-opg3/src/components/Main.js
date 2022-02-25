import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function Main() {
  // Lagrer kommentarer i en useState array
  const [comments, setComments] = useState([])
  const [text, setText] = useState('')

  const handleText = (e) => {
    setText(e.currentTarget.value)
    // console.log(e.currentTarget.value)
  }

  const handleSubmit = (event) => {
    console.log(comments)

    event.preventDefault()
    const id = uuid()

    if (text === '') {
      alert('Skriv noe i kommentarfeltet før du trykker send')
    } else {
      setComments((prev) => [...prev, { id, text }])
      setText('')
    }
  }

  return (
    <main>
      <h1>Overskrift</h1>
      <span>av Nora Nordman</span>
      <p>
        Humblebrag single-origin coffee tilde, +1 bespoke trust fund unicorn
        kombucha affogato etsy distillery viral pok pok. Tousled bespoke you
        probably haven't heard of them stumptown pour-over. Shaman taxidermy
        pickled austin readymade pinterest tumeric aesthetic viral keffiyeh
        quinoa venmo distillery tousled.
      </p>
      <form onSubmit={handleSubmit}>
        <h2>Legg igjen en kommentar</h2>
        <label htmlFor="comment">Kommentar </label>
        <textarea
          id="comment"
          onChange={handleText}
          value={text}
          cols={15}
          rows={5}
        />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}
