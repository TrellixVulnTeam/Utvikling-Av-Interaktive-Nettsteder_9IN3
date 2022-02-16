import { useState } from 'react'

export default function Pokemon({ id, name }) {
  const [show, setShow] = useState(false)
  const showExperience = () => {
    setShow(!show)
    console.log(show)
  }

  return (
    <article>
      <h2>
        {name}
        {id}
      </h2>
      {show ? <p>Experience 22</p> : null}
      <button type="button" onClick={showExperience}>
        See experience
      </button>
    </article>
  )
}
