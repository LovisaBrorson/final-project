import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Burger } from "./burger"
import { RightNav } from "./right-navbar"

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  a {
    color: blue;
    text-decoration: none;
  }

  a.active {
    color: red;
  }
`

export const Navbar = () => {
  return (
    <Nav>
      <h1>
        <Link to='/'>Börje Brorson</Link>
      </h1>
      <Burger />

      {/* <ul>
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
      </ul> */}
    </Nav>
  )
}
