import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './PetAdoption.css'

import CardTest from '../../IMGs/CardTest.jpg'

export default function PetAdoption() {

  const { id } = useParams();
  const [infoPet, setInfoPet] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Personality, setPersonality] = useState([]);

  const GET_InfoPet = async (idPet) => {
    const response = await fetch(`http://localhost:1337/api/pets/${idPet}?populate[picture][populate]=*&populate[personality][populate]=*`);
    const data = await response.json();


    setInfoPet(data.data);
    setLoading(true);
    setPersonality(data.data.attributes.personality.data.attributes);
  }

  useEffect(() => {
    GET_InfoPet(id);
  }, [])



  return (
    <>
      {!Loading ? 'CARGANDO' : (
        <main className='containerPet'>
          <img src={`http://localhost:1337${infoPet.attributes.picture.data.attributes.url}`} alt="" className='ImagenTest' />
          <article>
            <h2>Dale un hogar a <span className='namePet'>{infoPet.attributes.name}</span></h2>
            <h4><i className='descPet'>{infoPet.attributes.breed}</i></h4>
            <p>{infoPet.attributes.description}</p>
            <section className="containerAtributos">
              {Personality.isPlayful ? <div className="personalityContainer isPlayful">🏀 Es juguetón</div> : <span></span>}
              {Personality.isQuiet ? <div className="personalityContainer isQuiet">🌌 Es calmado</div> : <span></span>}
              {Personality.isgoodWithKids ? <div className="personalityContainer isgoodWithKids">👧🏻 Es bueno con los niños</div> : <span></span>}
              {Personality.isLoving ? <div className="personalityContainer isLoving">❤ Es amoroso</div> : <span></span>}
              {Personality.isSociable ? <div className="personalityContainer isSociable">✋🏻 Es sociable</div> : <span></span>}
              {Personality.isSpoiled ? <div className="personalityContainer isSpoiled">🧸 Es consentido</div> : <span></span>}
              {/* <div className="personalityContainer isPlayful">Es juguetón</div> */}

            </section>
            <button className='petBtn'>Adóptame</button>
          </article>
        </main>)
      }

    </>
  )
}
