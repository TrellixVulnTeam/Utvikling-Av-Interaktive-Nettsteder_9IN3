import { Link, NavLink } from 'react-router-dom'

function Navigation() {
  // Stiling ved aktiv navigasjon
  const linkStyle = ({ isActive }) => ({
    borderBottom: isActive ? '5px solid #e50914' : '0px solid #e50914',
  })

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={linkStyle}
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Hjem
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            style={linkStyle}
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            style={linkStyle}
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
