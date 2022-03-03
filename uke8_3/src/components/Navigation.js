import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <header>
      <nav>
        <a href="#" id="logo">
          Logo
        </a>
        <ul>
          <li>
            <NavLink to="/">Hjem</NavLink>
          </li>
          <li>
            <NavLink to="posts">Produkter</NavLink>
          </li>
          <li>
            <NavLink to="services">Tjenester</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
