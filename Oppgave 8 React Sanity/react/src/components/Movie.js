function Movie({ title, actor }) {
  return (
    <li className="mb-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-base ">{actor}</p>
    </li>
  )
}

export default Movie
