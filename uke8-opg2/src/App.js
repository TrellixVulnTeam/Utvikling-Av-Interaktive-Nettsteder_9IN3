import { useState } from 'react'
import { v4 as uuid } from 'uuid'
// import Form from './components/Form'
import TodoList from './components/TodoList'

export default function App({ status }) {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  // Funksjon for å fjerne todo
  // const removeTodo = (id) => {
  //   const oldTodos = [...todos];
  //   const todosLeft = oldTodos.filter((todos) => todos.id !== id);
  //   setTodos(todosLeft);
  // };

  // Funksjon for å fjerne todo
  const removeTodo = (id) => {
    const oldTodos = [...todos]
    const todosLeft = oldTodos.filter((todo) => todo.id !== id)
    setTodos(todosLeft)
  }

  const handleText = (e) => {
    setText(e.currentTarget.value)
    // console.log(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uuid()

    if (text === '') {
      alert('Skrive noe i inputfeltet')
    } else {
      setTodos((prev) => [...prev, { id, text, status }])
      setText('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Lag en ny oppgave</label>
        <input
          onChange={handleText}
          type="text"
          value={text}
          placeholder="Hva vil du utsette?"
          status="false"
        />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList todos={todos} status={status} removeTodo={removeTodo} />
    </>
  )
}
