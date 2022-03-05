import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <article>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <Link to="/produkter">Tilbake til liste med produkter</Link>
    </article>
  )
}

export default Product
