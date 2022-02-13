import "./style.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  // Funksjon for å fjerne todo
  const removeTodo = (id) => {
    const oldTodos = [...todos];
    const todosLeft = oldTodos.filter((todos) => todos.id !== id);
    setTodos(todosLeft);
  };

  return (
    <>
      <Header />
      <main>
        <Form setTodos={setTodos} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </main>
    </>
  );
}
