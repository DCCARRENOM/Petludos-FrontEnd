import React, { useState } from "react";
import "./Login.css";
import "react-widgets/styles.css";

import Swal from "sweetalert2";
import { Routes, Route, useNavigate, Link } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const [user, setInput] = useState({
    identifier: "",
    password: "",
  });

  const handleLogin = (e) => {
    setInput({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendLogin = (e) => {
    e.preventDefault();
    sendLogin(user);
  };

  const navigateToRegister = (e) => {
    e.preventDefault()
    navigate("/register")
  }


  const sendLogin = async (user) => {
    try{
        user.id = parseInt(user.id)
        const response = await fetch(`http://localhost:1337/api/auth/local`, {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        console.log(data)
        if(data.jwt !=""){
          Swal.fire({
            title: "¡Login exitoso!",
            icon: "success",
            button: "Aww yiss!",
          });
            navigate('/', {state: {id: user.id}});
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '¡Credenciales incorrectas!',
            })
          
          }
    
      }catch (error){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      }

  return (
    <div className="containerFormLogin">
      <h1>Ingreso de administrador
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="76" height="35" viewBox="0 0 24 24" stroke-width="2" stroke="#D9560B" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
     </svg>
      </h1>
      <hr></hr>
      <form className="formLogin" onSubmit={handleSendLogin}>
        <input
          className="login-input"
          type="text"
          placeholder="Ingrese su username"
          name="identifier"
          onChange={handleLogin}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Ingrese su contraseña"
          name="password"
          onChange={handleLogin}
        />
        <Link onClick={(e) => navigateToRegister(e)}>Registrate</Link>
        <button className="login-boton">Ingresar</button>
      </form>
    </div>
  );
}
