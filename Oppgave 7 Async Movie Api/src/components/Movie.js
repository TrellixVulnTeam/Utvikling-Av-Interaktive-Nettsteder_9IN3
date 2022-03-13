function Movie({ title, alt, year, src }) {
  return (
    <li>
      <img src={src} alt={alt} />
      <h2>
        <span style={{ fontWeight: 'bold' }}>Title: </span>
        {title}
      </h2>
      <p>
        <span style={{ fontWeight: 'bold' }}>Release Date: </span>
        {year}
      </p>
    </li>
  )
}

export default Movie
