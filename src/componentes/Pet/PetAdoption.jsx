import React from 'react'

import './PetAdoption.css'

import CardTest from '../../IMGs/CardTest.jpg'

export default function PetAdoption() {
  return (
    <>
    <section className='containerPet'>
      <img src={CardTest} alt="" className='ImagenTest'/>
        <article>
            <h2>Dale un hogar a <span className='namePet'>PANCHO</span></h2>
            <h4><i>Raza</i></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non magnam reprehenderit velit sequi recusandae. Veritatis facilis dolorem sapiente laboriosam nisi illo esse optio minima recusandae illum itaque nesciunt, voluptates delectus?</p>
            <div className="containerAtributos"></div>
            <button className='petBtn'>Adóptame</button>
        </article>
    </section>
    </>
  )
}
