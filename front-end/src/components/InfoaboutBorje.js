import React from "react"
import borje_summer from "../assets/Borje_Brorson_summer.jpg"

export const Info = () => {
  return (
    <article>
      <div className='wrapper-infoaboutBorje'>
        <h1>Om Börje</h1>
        <img
          src={borje_summer}
          alt='Borje in hat and sunshades'
          className='Img-Borje_Brorson_summer'
        />

        <p>
          Lorem ipsum dolor sit amet. Et tempora ratione 33 odit molestiae sed
          repellendus similique et nostrum aliquid est maiores ipsam. Qui
          expedita quae ut voluptatem explicabo eos voluptate enim. Ut odit
          distinctio et laboriosam neque non sint nihil hic nostrum. Eos
          sapiente veniam est consequatur ratione sit enim fuga et rerum
          perspiciatis non iste reiciendis aut atque voluptas.
        </p>
        <div className='citat-card'>
          <h3>
            Lien och mulen vårdar landskapet, nu rostar lien och mulen är kall
          </h3>
          <p className='citat-Erik'>
            Erik Sjödin - husdjurskonsulent och författare
          </p>
        </div>
      </div>
    </article>
  )
}
