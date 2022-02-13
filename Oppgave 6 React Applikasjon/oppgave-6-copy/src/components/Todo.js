export default function Todo({ title, content, removeTodo, id }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{content}</p>
      <button
        className="complete_btn"
        type="button"
        onClick={() => removeTodo(id)}
      >
        Complete
      </button>
    </article>
  );
}
