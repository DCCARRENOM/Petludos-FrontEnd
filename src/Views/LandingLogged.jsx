import React from "react";
import NavBarPetludosLogged from "../componentes/NavBarPetludosLogged";
import BodyPetludos from "../componentes/BodyPetludos";
import FooterPetludos from "../componentes/FooterPetludos";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function LandingLogged (){
    const {state} = useLocation();
    const UserID = state;
    return(
        <>
        <NavBarPetludosLogged UserID={UserID.id} />
        <BodyPetludos />
        <FooterPetludos />
        </>
    );
}

export default LandingLogged;