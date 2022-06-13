import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Burger } from "./Burger"

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  padding-left: 55px;
  padding-right: 55px;

  h1 {
    font-size: 35px;
    font-family: "Imperial Script", cursive;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a.active {
    color: blue;
  }
`

export const Navbar = () => {
  return (
    <Nav>
      <div>
        <h1>
          <Link to='/'>Börje Brorson</Link>
        </h1>
      </div>
      <Burger />
    </Nav>
  )
}
