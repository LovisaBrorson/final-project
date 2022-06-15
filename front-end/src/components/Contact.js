import React from "react"
import phone from "../assets/telefonlur-2.jpg"
import instagram from "../assets/instagram-logga.png"

export const Contact = () => {
  return (
    <article>
      <div className='wrapper-contact'>
        <img src={instagram} alt='Phone' className='instagram' />
        <img src={phone} alt='Phone' className='phone' />

        <div className='contact-text'>
          <h1>Kontakta Börje</h1>
          <p>Telefon: 0322-661064 </p>
          <p>Mobil: 0729-380345 </p>
          <p>Mail: broakern@gmail.com</p>
        </div>
      </div>
    </article>
  )
}
