import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    color: #fff;
    text-decoration: none;
  }

  a.active {
    color: red;
  }

  li {

    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    display: none;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")}
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
 
    
   
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
        <NavLink to='/exhibitions'>Utsällningar</NavLink>
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
