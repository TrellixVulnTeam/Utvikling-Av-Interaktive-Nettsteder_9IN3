import Todo from "./Todo";

export default function TodoList() {
  return (
    <>
      <h2 id="todo_header">My To do's</h2>
      <section id="todo_grid">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </section>
    </>
  );
}
