import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`

const StyleNotFond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: black;
  }

  p {
    color: black;
    font-size: 20px;
    align-self: center;
    margin: 5px 0 0;
  }

  button {
    cursor: pointer;
    align-self: center;
    margin: 1em;
  }
`

const NotFond = () => {
  const navigate = useNavigate()
  const onHomeButtonClick = () => {
    navigate("/")
  }

  return (
    <Container>
      <StyleNotFond>
        <p>Den här sidan finns tyvärr inte.</p>{" "}
        <p>Gå tillbaka till Börjes sida här.</p>
        <button onClick={onHomeButtonClick}>Börje Brorson</button>
      </StyleNotFond>
    </Container>
  )
}

export default NotFond
