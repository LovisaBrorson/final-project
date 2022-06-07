import React from "react"
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to='/'>Börje Brorson</Link>
      </h1>

      <ul>
        <li>
          <NavLink to='/'>Hem</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Kontakt</NavLink>
        </li>
        <li>
          <NavLink to='/info'>Om Börje</NavLink>
        </li>
        <li>
          <NavLink to='/exhibitions'>Utsällningar</NavLink>
        </li>
        <li>
          <NavLink to='/gallery'>Galleri</NavLink>
        </li>
        <li>
          <NavLink to='/guestbook'>Gästbok</NavLink>
        </li>
      </ul>
    </nav>
  )
}
