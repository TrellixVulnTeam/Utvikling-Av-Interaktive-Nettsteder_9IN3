export default function PageLeft({ current }) {
  return (
    <section className="sectionLeft">
      <h1>{current.headerLeft}</h1>
      <img src={current.img} alt="" />
    </section>
  )
}
