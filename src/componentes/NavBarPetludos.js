import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../CSS/NavBarPetludos.css';
import perro from '../IMGs/NavBar.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function NavBarPetludos () {
    return(
<Navbar expand="lg" id="principalNav">
    <Navbar.Brand>
            <img
              src={perro}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Brand className="NavBar-Text" id="pageName"><strong className="Bold">PET</strong>LUDOS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link className="NavBar-Text">Inicio</Nav.Link>
            <Nav.Link className="NavBar-Text">Testimonios</Nav.Link>
            <Nav.Link className="NavBar-Text">Adopción</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="NavBar-Text">
          <FontAwesomeIcon className="NavBar-Icon" icon={faGear} style={{color: "#ffffff",}} />
          <FontAwesomeIcon className="NavBar-Icon" icon={faBell} style={{color: "#ffffff"}} />
            <b className="handHover">Ingresar</b>
          </Navbar.Text>
        </Navbar.Collapse>
        
    </Navbar>
    );
}

export default NavBarPetludos;