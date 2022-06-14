import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    color: #66806a;
    text-decoration: none;
  }

  a.active {
    color: #525e75;
    font-weight: 700;
  }

  li {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  @media (max-width: 375px) {
    flex-flow: column nowrap;
    background-color: #534340;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #534340;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    margin: 0;
  }
`

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink to='/'>HEM</NavLink>
      </li>
      <li>
        <NavLink to='/guestbook'>GÄSTBOK</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>KONTAKT</NavLink>
      </li>
      <li>
        <NavLink to='/info'>OM BÖRJE</NavLink>
      </li>
      <li>
        <NavLink to='/exhibit'>UTSTÄLLNINGAR</NavLink>
      </li>
      <li>
        <NavLink to='/gallery'>GALLERI</NavLink>
      </li>
    </Ul>
  )
}
