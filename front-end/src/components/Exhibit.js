import React from "react"
import exhibitionhome from "../assets/utställning-1.jpg"
import paintingwindow from "../assets/utställning-2.jpg"

export const Exhibit = () => {
  return (
    <article>
      <div className='wrapper-exhibit'>
        <h1>UTSTÄLLNINGAR</h1>
        <p>
          <span>24-25 september </span>ställer Börje ut på Logården, Odensåkers
          hembygdsgård.
        </p>
        <p>
          <span>26 juni - 3 juli </span> kan man se akvarellerna från Holleden i
          Vägkyrkan i Hol.
        </p>
        <div className='wrapper-paintings'>
          <img
            src={paintingwindow}
            alt='Hol-anslagstavla'
            className='painting-gallery'
          />
          <img
            src={exhibitionhome}
            alt='Hol-anslagstavla'
            className='painting-gallery'
          />
        </div>
      </div>
    </article>
  )
}
