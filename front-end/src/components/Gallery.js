import React from "react"
import beehive_1 from "../assets/paintings/Beehive-1.jpg"
import beehive_2 from "../assets/paintings/Beehive-2-and-boy.jpg"
import children_cows from "../assets/paintings/children-and-cows.jpg"
import dogs from "../assets/paintings/dogs.jpg"
import goats from "../assets/paintings/goats.jpg"
import horses from "../assets/paintings/horses.jpg"

export const Gallery = () => {
  return (
    <article>
      <div className='wrapper-gallery'>
        <h1>Galleri</h1>
        <div className='wrapper-paintings'>
          <img
            src={beehive_1}
            alt='Bikupor och gäs'
            className='painting-gallery'
          />
          <img
            src={beehive_2}
            alt='Bikupor och pojke'
            className='painting-gallery'
          />
          <img
            src={children_cows}
            alt='Två barn och kor'
            className='painting-gallery'
          />
          <img
            src={dogs}
            alt='Borje infront of his desk, painting.'
            className='painting-gallery'
          />
          <img src={goats} alt='Getter' className='painting-gallery' />
          <img src={horses} alt='Två hästar' className='painting-gallery' />
        </div>
      </div>
      <div>
        <p className='copyright-text'>
          Allt bildmaterial © Börje Brorson. Konstverken är skyddade enligt
          upphovsrättslagen (SFS 1960:729). Kopiering och återgivning får inte
          ske utan upphovsmannens tillstånd.
        </p>
      </div>
    </article>
  )
}
