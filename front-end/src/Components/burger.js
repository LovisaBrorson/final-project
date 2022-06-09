import React, { useState } from "react"
import { RightNav } from "./right-navbar"
import styled from "styled-components"

const StyledBurger = styled.div`
width: 2rem;
heigt: 2rem;
position: fixed;
top: 15px;
right 20px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;

div {
    width: 2rem;
    height: 0.25rem;
    backgroundcolor: ${({ open }) => (open ? "#555" : "1B07FB")}
    border-radius 10px; 
}
`

export const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}
