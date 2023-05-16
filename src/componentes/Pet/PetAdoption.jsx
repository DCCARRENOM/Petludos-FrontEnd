import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './PetAdoption.css'

import CardTest from '../../IMGs/CardTest.jpg'

export default function PetAdoption() {

  const { id } = useParams();
  const [infoPet, setInfoPet] = useState([]);
  const [Loading, setLoading] = useState(false)

  const GET_InfoPet = async (idPet) => {
    console.log(`http://localhost:1337/api/pets/${idPet}?populate[picture][populate]=*`);
    const response = await fetch(`http://localhost:1337/api/pets/${idPet}?populate[picture][populate]=*`);
    const data = await response.json();


    setInfoPet(data.data);
    setLoading(true);
  }

  useEffect(() => {
    GET_InfoPet(id);
  }, [])



  return (
    <>
      {!Loading ? 'CARGANDO' :  (
        <section className='containerPet'>
          <img src={`http://localhost:1337${infoPet.attributes.picture.data.attributes.url}`} alt="" className='ImagenTest' />
          <article>
            <h2>Dale un hogar a <span className='namePet'>{infoPet.attributes.name}</span></h2>
            <h4><i className='descPet'>{infoPet.attributes.breed}</i></h4>
            <p>{infoPet.attributes.description}</p>
            <div className="containerAtributos"></div>
            <button className='petBtn'>Adóptame</button>
          </article>
        </section>)
      }

    </>
  )
}
