import React from 'react'
import NavBarPetludos from "../componentes/NavBarPetludos";
import BodyPetludos from "../componentes/BodyPetludos";
import TestimonyPetludos from "../componentes/TestimonyPetludos";
import FooterPetludos from "../componentes/FooterPetludos";
import NavBarPetludosLogged from "../componentes/NavBarPetludosLogged";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";


export default function Landing() {
    const {state} = useLocation();
    const User = state;


    function validateLogin(User){
        if(User.id !== undefined){
            console.log("ENTROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
            return(<NavBarPetludosLogged UserID={User.id} />)
        }else{
            console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOENTROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
            return(<NavBarPetludos/>)
        }

    }
    return (
        <>
            {validateLogin(User)}
            <BodyPetludos />
            <TestimonyPetludos />
            <FooterPetludos />
        </>
    )
}
