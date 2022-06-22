import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Burger } from "./Burger"

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #b4cfb0;
  margin: 0;
  z-index: 2;
  border-bottom: solid #66806a 3px;

  h1 {
    font-size: 40px;
    font-family: "Imperial Script", cursive;
    margin-left: 27px;
    margin-top: 23px;
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
    transform: scaleX(1);
    transition: transform 0.3s;
  }

  li {
    font-size: 20px;
    padding-right: 20px;
    letter-spacing: 0.02em;
    margin-bottom: 50px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 50px;
      font-family: "Imperial Script", cursive;
      margin: 20px 0 0 35px;
      font-weight: 700;
    }
  }

  @media (min-width: 1024px) {
    font-size: 40px;

    li:last-of-type {
      padding-right: 55px;
    }
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
