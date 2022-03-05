function Movie({ title, alt, year, src }) {
  return (
    <li>
      <img src={src} alt={alt} />
      <h2>Title: {title}</h2>
      <p>Release Date: {year}</p>
    </li>
  )
}

export default Movie
