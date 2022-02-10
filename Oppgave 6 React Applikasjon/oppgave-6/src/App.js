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
      <label for="title">Title</label>
      <input type="text" id="title" />

      <label for="content">Content</label>
      <textarea id="content" rows="6"></textarea>

      <input type="submit" value="Add" id="add_btn" />
    </form>
  );
}

function Todos() {
  return (
    <>
      <h2 id="todo_header">My To do's</h2>
      <section id="todo_grid">
        <article>
          <h3>To do title</h3>
          <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
          <button value="Complete" id="complete_btn">
            Complete
          </button>
        </article>
        <article>
          <h3>To do title</h3>
          <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
          <button value="Complete" id="complete_btn">
            Complete
          </button>
        </article>
        <article>
          <h3>To do title</h3>
          <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
          <button value="Complete" id="complete_btn">
            Complete
          </button>
        </article>
        <article>
          <h3>To do title</h3>
          <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
          <button value="Complete" id="complete_btn">
            Complete
          </button>
        </article>
        <article>
          <h3>To do title</h3>
          <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
          <button value="Complete" id="complete_btn">
            Complete
          </button>
        </article>
        <article>
          <h3>To do title</h3>
          <p>I'm a baby sriracha hot chicken mixtape pabst organic air...</p>
          <button type="submit" value="Complete" id="complete_btn">
            Complete
          </button>
        </article>
      </section>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Form />
        <Todos />
      </main>
    </>
  );
}
