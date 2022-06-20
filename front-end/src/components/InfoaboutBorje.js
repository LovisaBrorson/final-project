import React from "react"
import borje_summer from "../assets/profilpic-to-infoaboutBorje.jpg"
import colors from "../assets/colors.jpg"
import cow from "../assets/cow-black-and-white.jpg"

export const Info = () => {
  return (
    <article>
      <div className='wrapper-infoaboutBorje'>
        <h1>OM BÖRJE</h1>

        <div className='wrapper-img-infoaboutBorje'>
          <img
            src={borje_summer}
            alt='Borje painting'
            className='img-infoaboutBorje'
          />
          <div className='wrapper-img-infoaboutBorje-2'>
            <img src={colors} alt='colors' className='colors-infoaboutBorje' />
            <img src={cow} alt='cow' className='cow-infoaboutBorje' />
          </div>
        </div>
        <p>
          Måla och teckna har varit mitt stora intresse sedan barndomen. I
          slutet av 60-talet studerade jag illustration och grafisk formgivning
          på distans vid Famous Artist School, Amsterdam.
        </p>
        <p>
          Jag har medverkat med bilder och illustrationer i ett flertal
          tidskrifter och böcker och är upphovsman till Gäsene Mejeris första
          ostloggor. Jag har haft flertalet utställningar på bland annat Korpens
          Lustgård i Alingsås, Vänga Kvarn utanför Fristad och Dahlbogården i
          Hol.
        </p>

        <p>
          När vandringsleden i Hol fick en ny sträckning 2021 tecknade jag
          bilderna till informationskyltarna längs leden. 2021 gjorde även Leif
          Brunnegård en bok om mig och gamla ting som jag illustrerade.
        </p>

        <p>
          År 1997 målade jag tidningen Lands Jultallrik och 2004 fick jag
          Vårgårda kommuns kulturpris som Bygdens konstnär.
        </p>
        <div className='citat-card'>
          <h3>
            Lien och mulen vårdar landskapet, nu rostar lien och mulen är kall.
          </h3>
          <p className='citat-Erik'>
            Erik Sjödin - husdjurskonsulent och författare
          </p>
        </div>
      </div>
    </article>
  )
}
