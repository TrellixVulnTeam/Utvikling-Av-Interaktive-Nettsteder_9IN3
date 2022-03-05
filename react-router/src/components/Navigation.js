import { NavLink } from 'react-router-dom'

function Navigation() {
  // Demo for å gi litt styling
  const linkStyle = ({ isActive }) => ({
    border: isActive ? 'px solid #a9a9a9' : 'none',
  })

  return (
    <nav>
      <ul>
        {/* Her oppdateres klassen basert på om linken er aktiv eller ikke */}
        {/* Kan enten gi en styl eller klasse (viser begge deler her) */}
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
          <NavLink to="/om" style={linkStyle}>
            Om
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
