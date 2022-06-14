import React from "react"
import { useNavigate } from "react-router-dom"
import header_img from "../assets/borje_header_1.jpg"
import cow from "../assets/paintings/cow.jpg"
import family from "../assets/paintings/family.jpg"
import fox from "../assets/paintings/Fox-1.jpg"
import man_in_door from "../assets/paintings/man-in-the-door.jpg"

// window.alert("Den här sidan använder små goda kakor 🍪")

export const Welcome = () => {
  const navigate = useNavigate()
  const goToGallery = () => {
    navigate("/gallery")
  }

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
            <span className='welcome-text-span'>BÖRJE BRORSON</span> är
            illustratör och konstnär ifrån Asklanda. I navistisk stil målar han
            djur och natur och även gårdsmålningar på beställning.
          </p>

          <img
            src={cow}
            alt='Children and cows'
            className='painting-welcomepage'
          />
          <img src={family} alt='Family' className='painting-welcomepage' />
          <img src={fox} alt='Fox' className='painting-welcomepage' />
          <img
            src={man_in_door}
            alt='Children and cows.'
            className='painting-welcomepage'
          />
          <button className='goToGalleryButton' onClick={goToGallery}>
            Till Galleriet
          </button>
        </div>
      </article>
    </div>
  )
}
