import React from 'react'

import './Catalogue.css'
import NavBarPetludos from '../componentes/NavBarPetludos'
import HeaderFaq from '../componentes/FAQ/HeaderFaq'
import CardPet from '../componentes/Catalogue/CardPet'
import FooterPetludos from '../componentes/FooterPetludos'


export default function Catalogue() {
    return (
        <>
            <NavBarPetludos></NavBarPetludos>
            <HeaderFaq></HeaderFaq>
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
