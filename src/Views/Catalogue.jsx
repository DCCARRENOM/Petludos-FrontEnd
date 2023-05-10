import React from 'react'
import { useState, useEffect } from 'react';

import './Catalogue.css'
import NavBarPetludos from '../componentes/NavBarPetludos'
import HeaderCatalogue from '../componentes/Catalogue/HeaderCatalogue'
import CardPet from '../componentes/Catalogue/CardPet'
import FooterPetludos from '../componentes/FooterPetludos'


export default function Catalogue() {
    
    const [catalogoPets, setCatalogoPets] = useState([])

    useEffect(() => {
      GET_Pets();
    }, [])
    

    const GET_Pets = async() => {
        const response = await fetch('http://localhost:1337/api/pets/');
        const data = await response.json();
        
        console.log(data);

        setCatalogoPets(data);
    }


    return (
        <>
            <NavBarPetludos></NavBarPetludos>
            <HeaderCatalogue></HeaderCatalogue>
            <article className='containerCardPet'>
                <CardPet></CardPet>
                <CardPet></CardPet>
                <CardPet></CardPet>
                <CardPet></CardPet>
            </article>
            <FooterPetludos></FooterPetludos>
        </>
    )
}
