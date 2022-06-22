import React from "react"
import phone from "../assets/telefonlur-2.jpg"
import instagram from "../assets/instagram-logga.png"

export const Contact = () => {
  return (
    <article>
      <div className='wrapper-contact'>
        <img src={phone} alt='Phone' className='phone' />

        <div className='contact-text'>
          <h1 tabindex='0'>KONTAKTA BÖRJE</h1>
          <p tabindex='0'>Mobil: 0729-380345 </p>
          <p tabindex='0'>Telefon: 0322-661064 </p>
          <p>
            <a className='email' href='mailto:broakern@gmail.com'>
              Mail: broakern@gmail.com
            </a>
          </p>
          <div className='wrapper-instagram'>
            <img
              src={instagram}
              alt='Instagram-logo'
              className='instagram'
              tabindex='0'
            />
            <spam tabindex='0'>Borje_Brorson_akvarell</spam>
          </div>
        </div>
      </div>
    </article>
  )
}
