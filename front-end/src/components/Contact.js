import React from "react"
import phone from "../assets/telefonlur-2.jpg"
import instagram from "../assets/instagram-logga.png"

export const Contact = () => {
  return (
    <article>
      <div className='wrapper-contact'>
        <img src={phone} alt='Phone' className='phone' />

        <div className='contact-text'>
          <h1>KONTAKTA BÖRJE</h1>
          <p>Mobil: 0729-380345 </p>
          <p>Telefon: 0322-661064 </p>

          <p>Mail: broakern@gmail.com</p>
          <div className='wrapper-instagram'>
            <img src={instagram} alt='Instagram' className='instagram' />
            <spam>Borje_Brorson_akvarell</spam>
          </div>
        </div>
      </div>
    </article>
  )
}
