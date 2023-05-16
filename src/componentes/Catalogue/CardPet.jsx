import React from 'react'

import './CardPet.css'

export default function CardPet({info:{attributes, id}}) {
  let urlPet = `http://localhost:1337${attributes.picture.data.attributes.url}`;

  return (
    <section className='CardPet'>
        <div className='CardImage'><img src={urlPet} alt={`CardImage${id}`}/></div>
        <div className='CardInfo'>
            <h4 className='CardTitle'>{attributes.name}</h4>
            <h4 className='CardTitle'>{console.log(urlPet)}</h4>
            <button className='CardBtn'>Conóceme</button>
        </div>


    </section>
  )
}
