export default function PageRight({ current }) {
  return (
    <section className="sectionRight">
      <h1>{current.headerRight}</h1>
      <p>{current.text}</p>
    </section>
  )
}
