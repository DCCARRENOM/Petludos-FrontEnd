import React, { useState } from "react";
import "react-widgets/styles.css";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {

  const navigate = useNavigate();

  const [persona, setPersona] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
    phone: "",
  });

  const handlePersona = (e) => {
    setPersona({
      ...persona,
      [e.target.name]: e.target.value,
    });
  };

  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate("/login")
  }

  const handleRegisterUser = (e) => {
    e.preventDefault();
    let newUser;
    console.log("zszzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",persona)
    newUser = persona;
    console.log(newUser);
    registerUser(newUser);
    successOrder();
    navigateToLogin(e);
  };

  const registerUser = async (object) => {
    const response = await fetch(
      "http://localhost:1337/api/auth/local/register",
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
      <form className="formLogin" onSubmit={handleRegisterUser}>
        <p>Username: </p>
        <input
          className="login-input"
          type="text"
          name="username"
          onChange={handlePersona}
        />
        <p>Email: </p>
        <input
          className="login-input"
          type="text"
          name="email"
          onChange={handlePersona}
        />
        <p>Password: </p>
        <input
          className="login-input"
          type="text"
          name="password"
          onChange={handlePersona}
        />
        <p>Nombres: </p>
        <input
          className="login-input"
          type="text"
          name="name"
          onChange={handlePersona}
        />
        <p>Apellidos: </p>
        <input
          className="login-input"
          type="text"
          name="lastname"
          onChange={handlePersona}
        />
        <p>Telefono: </p>
        <input
          className="login-input"
          type="text"
          name="phone"
          onChange={handlePersona}
        />
        <button className="login-boton">Registrar</button>
      </form>
    </div>
  );
}