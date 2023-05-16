import React, { useState } from "react";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import Swal from 'sweetalert2';

import "./Register.css";

export default function Register() {
  const [persona, setPersona] = useState({
    k_numero: "",
    tipo: "",
    n_nombre: "",
    n_apellido: "",
    o_telefono: "",
    i_genero: "",
  });

  const handlePersona = (e) => {
    setPersona({
      ...persona,
      [e.target.name]: e.target.value,
    });
  };



  const handleSendResponsable = (e) => {
    // e.preventDefault();
    // let responsableCompleto;
    // persona.k_numero = Number(persona.k_numero);
    // persona.o_telefono = Number(persona.o_telefono);
    
    // responsable.es_propietario = true;
    // responsable.o_tel_residencia = Number(responsable.o_tel_residencia);
    // responsable.o_tel_trabajo = Number(responsable.o_tel_trabajo);
    // responsableCompleto = { persona, responsable, apartamento:Number(AptoDropdown) };
    // console.log(responsableCompleto);
    // sendResponsable(responsableCompleto);

    // successOrder();
  };

  const sendResponsable = async (object) => {
    const response = await fetch(
      "http://localhost:8081/persona/save_persona_responsable",
      {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };


  //Alert
  const successOrder = () =>{
    Swal.fire({
        title: "¡Usuario registrado!",
        icon: "success",
        button: "Aww yiss!",
      });
}

  return (
    <div className="containerFormResponsable">
      <h2>Registro nuevo usuario</h2>
      <form className="formLogin" onSubmit={handleSendResponsable}>
        <p>Username: </p>
        <input
          className="login-input"
          type="text"
          name="k_numero"
          onChange={handlePersona}
        />
        <p>Email: </p>
        <input
          className="login-input"
          type="text"
          name="tipo"
          onChange={handlePersona}
        />
        <p>Password: </p>
        <input
          className="login-input"
          type="text"
          name="n_nombre"
          onChange={handlePersona}
        />
        <p>Nombres: </p>
        <input
          className="login-input"
          type="text"
          name="n_apellido"
          onChange={handlePersona}
        />
        <p>Apellidos: </p>
        <input
          className="login-input"
          type="text"
          name="o_telefono"
          onChange={handlePersona}
        />
        <p>Telefono: </p>
        <input
          className="login-input"
          type="text"
          name="i_genero"
          onChange={handlePersona}
        />
        <button className="login-boton">Registrar</button>
      </form>
    </div>
  );
}