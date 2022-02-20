import Todo from './Todo'

export default function TodoList({ todos, getStatus, removeTodo }) {
  return (
    <>
      <h2 id="todo_header">My To do's</h2>
      <section id="todo_grid">
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              getStatus={getStatus}
              removeTodo={removeTodo}
            />
          ))
        ) : (
          <p>Ingen todos</p>
        )}
      </section>
    </>
  )
}
