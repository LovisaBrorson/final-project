import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    color: black;
    text-decoration: none;
  }

  a.active {
    color: blue;
  }

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
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
        <NavLink to='/exhibition'>Utsällningar</NavLink>
      </li>
      <li>
        <NavLink to='/gallery'>Galleri</NavLink>
      </li>
      <li>
        <NavLink to='/guestbook'>Gästbok</NavLink>
      </li>
    </Ul>
  )
}
