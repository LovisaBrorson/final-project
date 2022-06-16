import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;

  a {
    color: #66806a;
    text-decoration: none;
  }

  a.active {
    color: #495469;
    font-weight: 700;
  }

  li {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  // li a:after {
  //   content: "";
  //   display: block;
  //   transform: scaleX(0);
  //   transition: transform 0.3s;
  // }

  // li a:hover:after {
  //   transform: scaleX(1);
  //   transition: transform 0.3s;
  // }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #4a3c39;
    // #534340
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 6rem;
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
