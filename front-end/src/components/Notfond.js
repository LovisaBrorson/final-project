import React from "react"
import { useNavigate } from "react-router-dom"
import lien from "../assets/paintings/lien.jpg"

const NotFond = () => {
  const navigate = useNavigate()
  const backToHomeButtonClick = () => {
    navigate("/")
  }

  return (
    <div className='wrapper-notfond'>
      <p>Den här sidan finns tyvärr inte. </p>
      <p>Gå tillbaka till Börjes sida..</p>
      <button className='button-nofond' onClick={backToHomeButtonClick}>
        HÄR
      </button>
      <img src={lien} alt='Redskap i en lada' className='painting-notfond' />
    </div>
  )
}

export default NotFond
