export default function Input() {
  return (
    <>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />

      <label htmlFor="content">Content</label>
      <textarea id="content" rows="6"></textarea>

      <button type="submit">Add</button>
    </>
  );
}
