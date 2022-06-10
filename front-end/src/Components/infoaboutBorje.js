import React from "react"
import borje_summer from "../assets/Borje_Brorson_summer.jpg"

export const Info = () => {
  return (
    <article>
      <div className='wrapper'>
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
        <h3>Citat</h3>
      </div>
    </article>
  )
}
