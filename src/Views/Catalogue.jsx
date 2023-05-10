import React from 'react'

import './Catalogue.css'
import NavBarPetludos from '../componentes/NavBarPetludos'
import HeaderCatalogue from '../componentes/Catalogue/HeaderCatalogue'
import CardPet from '../componentes/Catalogue/CardPet'
import FooterPetludos from '../componentes/FooterPetludos'


export default function Catalogue() {
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
