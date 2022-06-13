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
  background-color: #b4cfb0;

  h1 {
    font-size: 55px;
    font-family: "Imperial Script", cursive;
    margin: 8px;
    font-weight: 700;
  }

  a {
    color: #66806a;
    text-decoration: none;
  }

  a.active {
    color: #525e75;
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
