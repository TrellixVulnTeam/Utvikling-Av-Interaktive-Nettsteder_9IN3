import { useState } from 'react'

export default function Todo({ id, text, removeTodo }) {
  const [status, setStatus] = useState(false)

  const getStatus = () => {
    setStatus(!status)
  }

  return (
    <article>
      <p>Id: {id}</p>
      <p>Todo: {text}</p>
      {/* <p>Status: {status}</p> */}
      <p>Status: {status === true ? 'Completed' : 'Not Started'}</p>
      <button hidden={status} type="button" onClick={getStatus}>
        Complete
      </button>
      <button type="button" onClick={() => removeTodo(id)}>
        Delete
      </button>
    </article>
  )
}
