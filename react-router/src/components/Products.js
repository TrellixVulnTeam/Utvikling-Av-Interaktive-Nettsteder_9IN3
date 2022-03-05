import { Link, Outlet } from 'react-router-dom'
import { products } from '../data/products'

function Products() {
  return (
    <section>
      {/* Bruker .map for å skrive ut listen med produkter */}
      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.title}</h2>
          {/* Linker til produkt */}
          <Link to={`${product.id}`}>Gå til produkt</Link>
        </article>
      ))}
      {/* Ved å bruke outlet vises Product sammen med Products */}
      {/* Får med andre ord ikke en egen side */}
      <Outlet />
    </section>
  )
}

export default Products
