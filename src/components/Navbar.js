import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link className="f-vogue-32-22" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="f-vogue-32-22" to="/experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="f-vogue-32-22" to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="f-vogue-32-22" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar