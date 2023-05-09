import React from "react";
import FooterImage from '../IMGs/TestimonyFooter.png'
import Facebook from '../IMGs/Facebook.png'
import Github from '../IMGs/Github.png'
import Instagram from '../IMGs/Instagram.png'
import '../CSS/FooterPetludos.css'

function FooterPetludos () {
    return(
        <>
        <div className="FooterImageContainer">
            <img className="FooterImage" src={FooterImage} />
        </div>
        <div className="FooterBar">
            <h1><strong>PET</strong>LUDOS</h1>
            <div className="FooterIcons">
                <img className="GitFooter" src={Github}/>
                <img className="InstagramFooter" src={Instagram}/>
                <img className="FacebookFooter" src={Facebook}/>
            </div>
        </div>
        <div className="FooterEnd">
            <p>2023</p>
        </div>
        </>
    );
}

export default FooterPetludos;