import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Burger } from "./Burger"

const Nav = styled.nav`
  // position: fixed;
  // top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #b4cfb0;
  margin: 0;

  h1 {
    font-size: 40px;
    font-family: "Imperial Script", cursive;
    margin: 27px;
    font-weight: 700;
  }

  a {
    color: #66806a;
    text-decoration: none;
  }

  a:active,
  a:hover {
    color: #495469;
    font-weight: 700;
  }

  li {
    font-size: 20px;
    padding-right: 20px;
    letter-spacing: 0.02em;
    margin-bottom: 50px;
  }

  li:last-of-type {
    padding-right: 55px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
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
