import "./style.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Form />
        <TodoList />
      </main>
    </>
  );
}
