import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Burger } from "./Burger"

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  background-color: #b4cfb0;

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

  a.active {
    color: #525e75;
  }

  li {
    padding: 0px 10px;
    font-size: 20px;
    padding-right: 20px;
    letter-spacing: 0.02em;
  }

  li:last-of-type {
    padding-right: 55px;
  }

  @media (min-width: 768px) {
    font-size: 45px;
  }

  @media (min-width: 1024px) {
    padding-left: 55px;

    h1 {
      margin-top: 25px;
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
