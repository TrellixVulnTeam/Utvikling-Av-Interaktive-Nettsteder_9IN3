import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function Main() {
  // Lagrer kommentarer i en useState array
  const [comments, setComments] = useState([])
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = uuid()

    if (comments === '') {
      alert('Skriv noe i kommentarfeltet før du trykker send')
    } else {
      setComments((prev) => [...prev], { id, comments })
      setText('')
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const id = uuid()

  //   if (text === '') {
  //     alert('Skrive noe i inputfeltet')
  //   } else {
  //     setTodos((prev) => [...prev, { id, text, status }])
  //     setText('')
  //   }
  // }
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
      <form method="POST">
        <h2>Legg igjen en kommentar</h2>
        <label htmlFor="comment">Kommentar </label>
        <textarea id="comment" value={text} cols={15} rows={5} />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}
