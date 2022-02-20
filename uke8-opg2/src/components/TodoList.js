import Todo from './Todo'

export default function TodoList({ todos, getStatus, removeTodo }) {
  return (
    <section className="todo-list">
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
  )
}
