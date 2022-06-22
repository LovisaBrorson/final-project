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
          <a href='https://google.com'>
            <p>Telefon: 0322-661064 </p>{" "}
          </a>

          <a className='email' href='mailto:broakern@gmail.com'>
            broakern@gmail.com
          </a>
          <p>Mail:</p>
          <div className='wrapper-instagram'>
            <img src={instagram} alt='Instagram-logo' className='instagram' />
            <spam>Borje_Brorson_akvarell</spam>
          </div>
        </div>
      </div>
    </article>
  )
}
