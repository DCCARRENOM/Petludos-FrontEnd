import React from 'react'
import NavBarPetludos from "../componentes/NavBarPetludos";
import BodyPetludos from "../componentes/BodyPetludos";
import TestimonyPetludos from "../componentes/TestimonyPetludos";
import FooterPetludos from "../componentes/FooterPetludos";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";


export default function Landing() {
    return (
        <>
            <NavBarPetludos />
            <BodyPetludos />
            <TestimonyPetludos />
            <FooterPetludos />
        </>
    )
}
