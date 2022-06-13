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
        <p>
          HÄR ÄR BÖRJE! Lorem ipsum dolor sit amet. Aut quisquam deleniti qui
          illo voluptas et quia ut adipisci similique. Sed ratione iste et eius
          voluptatibus At dolorem odit qui illo laudantium eum nemo labore 33
          dicta voluptas id excepturi perferendis.
        </p>
        <p>add picuters</p>
      </article>
    </div>
  )
}
