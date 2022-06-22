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
import santa from "../assets/paintings/tomtar.jpg"
import santa_pigs from "../assets/paintings/tomte-och-grisar.jpg"

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
            alt='Borje målar vid sitt skrivbord'
            className='painting-gallery'
          />
          <img src={goats} alt='Getter' className='painting-gallery' />
          <img src={horses} alt='Två hästar' className='painting-gallery' />

          <img
            src={giant}
            alt='Jätten vid Ornungasjön'
            className='painting-gallery'
          />
          <img src={cross} alt='Jesu kors' className='painting-gallery' />
          <img src={tailor} alt='Skräddare' className='painting-gallery' />

          <img
            src={father_son}
            alt='Far och son'
            className='painting-gallery'
          />
          <img src={doors} alt='Ett dörrpar' className='painting-gallery' />
          <img src={galstad} alt='Gårdsmålning' className='painting-gallery' />
          <img src={santa} alt='Tomtar och häst' className='painting-gallery' />
          <img
            src={santa_pigs}
            alt='Tomtar och grisar'
            className='painting-gallery'
          />
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
