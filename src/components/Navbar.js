import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar__ul">
        <li className="Navbar__li">
          <NavLink className="Navbar__link f-vogue-26-18" activeClassName="is-active" exact={true} to="/">
            Home
          </NavLink>
        </li>
        <li className="Navbar__li">
          <NavLink className="Navbar__link f-vogue-26-18" activeClassName="is-active" to="/experience">
            Experience
          </NavLink>
        </li>
        <li className="Navbar__li">
          <NavLink className="Navbar__link f-vogue-26-18" activeClassName="is-active" to="/skills">
            Skills
          </NavLink>
        </li>
        <li className="Navbar__li">
          <NavLink className="Navbar__link f-vogue-26-18" activeClassName="is-active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar