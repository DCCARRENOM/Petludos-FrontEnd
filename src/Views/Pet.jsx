import React from 'react'
import NavBarPetludos from '../componentes/NavBarPetludos'
import HeaderFaq from '../componentes/FAQ/HeaderFaq'
import PetAdoption from '../componentes/Pet/PetAdoption'
import FooterPetludos from '../componentes/FooterPetludos'

export default function Pet() {
  return (
    <>
      <NavBarPetludos></NavBarPetludos>
      <HeaderFaq></HeaderFaq>
      <PetAdoption></PetAdoption>
      <FooterPetludos></FooterPetludos>
      
    </>
  )
}
