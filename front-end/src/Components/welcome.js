import React from "react"
import header_img from "../assets/borje_header_1.jpg"

window.alert("Den här sidan använder små goda kakor 🍪")

export const Welcome = () => {
  return (
    <div>
      <div className='header_container'>
        <img
          src={header_img}
          alt='Borje infront of his desk, painting.'
          className='header_img'
        />
      </div>
      <article>
        <div className='wrapper-welcome'>
          <p>
            BÖRJE BRORSON är en illustratör och konstnär från Asklanda. I
            navistisk stil målar han djur och natur och även gårdsmålningar på
            beställning.
          </p>
        </div>
        <p>add picuters</p>
      </article>
    </div>
  )
}
