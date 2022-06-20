import React from "react"
import beehive_1 from "../assets/paintings/Beehive-1.jpg"
import beehive_2 from "../assets/paintings/Beehive-2-and-boy.jpg"
import children_cows from "../assets/paintings/children-and-cows.jpg"
import dogs from "../assets/paintings/dogs.jpg"
import goats from "../assets/paintings/goats.jpg"
import horses from "../assets/paintings/horses.jpg"
import tailor from "../assets/paintings/skräddare.jpg"
import cross from "../assets/paintings/cross.jpg"
import giant from "../assets/paintings/giant-in-ornunga.jpg"
import doors from "../assets/paintings/doors.jpg"
import father_son from "../assets/paintings/father-and-son.jpg"
import galstad from "../assets/paintings/Galstad.jpg"
import tomtar from "../assets/paintings/tomtar.jpg"
import tomte_pigs from "../assets/paintings/tomte-och-grisar.jpg"

export const Gallery = () => {
  return (
    <article>
      <div className='wrapper-gallery'>
        <h1>GALLERI</h1>
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

          <img src={giant} alt='Två hästar' className='painting-gallery' />
          <img src={cross} alt='Två hästar' className='painting-gallery' />
          <img src={tailor} alt='Två hästar' className='painting-gallery' />

          <img src={father_son} alt='Två hästar' className='painting-gallery' />
          <img src={doors} alt='Två hästar' className='painting-gallery' />
          <img src={galstad} alt='Två hästar' className='painting-gallery' />
          <img src={tomtar} alt='Två hästar' className='painting-gallery' />
          <img src={tomte_pigs} alt='Två hästar' className='painting-gallery' />
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
