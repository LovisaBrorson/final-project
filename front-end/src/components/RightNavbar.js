import React from "react"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;

  li {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.02em;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #4a3c39;
    // #534340
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 6rem;
    transition: transform 0.3s ease-in-out;
    margin: 0;

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
  }
`

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href='/'>HEM</a>
      </li>
      <li>
        <a href='/guestbook'>GÄSTBOK</a>
      </li>
      <li>
        <a href='/contact'>KONTAKT</a>
      </li>
      <li>
        <a href='/info'>OM BÖRJE</a>
      </li>
      <li>
        <a href='/gallery'>GALLERI</a>
      </li>
      <li>
        <a href='/exhibit'>UTSTÄLLNINGAR</a>
      </li>
    </Ul>
  )
}
