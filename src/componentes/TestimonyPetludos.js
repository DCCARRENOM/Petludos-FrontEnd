import React from "react";
import TestimonyCard from "./TestimonyCard";
import '../CSS/TestimonyPetludos.css'

function TestimonyPetludos () {
    return( 
        <>
        <div className="TestimonyTitle">
            <h1 >Testimonios</h1>
        </div>
        <div className="TestimonyCards">
            <TestimonyCard Nombre="Tommy"/>
            <TestimonyCard Nombre="Pancho"/>
            <TestimonyCard Nombre="Botitas"/>
            <TestimonyCard Nombre="Oreo"/>
        </div>
        </>
    );
}

export default TestimonyPetludos;