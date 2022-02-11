import "./style.css";

function Header() {
  return (
    <header className="top_header">
      <h1>
        <a href="#">HIOF</a>
      </h1>
      <nav>
        <a href="#">User</a>
      </nav>
    </header>
  );
}

function Form() {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />

      <label htmlFor="content">Content</label>
      <textarea id="content" rows="6"></textarea>

      <button type="submit">Add</button>
    </form>
  );
}

function TodoList() {
  return (
    <>
      <h2 id="todo_header">My To do's</h2>
      <section id="todo_grid">
        <SingleTodo />
      </section>
    </>
  );
}

function SingleTodo() {
  return (
    <article>
      <h3>To do title</h3>
      <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
      <Button />
    </article>
  );
}

function Button() {
  return <button id="complete_btn">Complete</button>;
}

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
