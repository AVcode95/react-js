import React, { useState } from 'react';
import './FormularioRegistro.css'

const RegistroForm = ({ onRegistro }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const [mensajeErrorNombre, setMensajeErrorNombre] = useState('');
  const [mensajeErrorEmail, setMensajeErrorEmail] = useState('');
  const [mensajeErrorContrasena, setMensajeErrorContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    let valid = true;

    if (nombre === '') {
      setMensajeErrorNombre('El nombre es obligatorio');
      valid = false;
    } else {
      setMensajeErrorNombre('');
    }

    // Validación de correo electrónico
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setMensajeErrorEmail('El correo electrónico no es válido');
      valid = false;
    } else {
      setMensajeErrorEmail('');
    }

    // Validación de contraseña (mínimo 6 caracteres)
    if (contrasena.length < 6) {
      setMensajeErrorContrasena('La contraseña debe tener al menos 6 caracteres');
      valid = false;
    } else {
      setMensajeErrorContrasena('');
    }

    // Si todas las validaciones pasan, llama a la función onRegistro
    if (valid) {
      const datos = {
        nombre,
        email,
        contrasena,
      };
      onRegistro(datos);
    }
  };

  return (
    <div className='padre'>
      <h1>Formulario de Registro </h1>
      <form onSubmit={handleSubmit}>
        <div className='padre'>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <p className="mensaje-error">{mensajeErrorNombre}</p>
        </div>
        <div className='padre'>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="mensaje-error">{mensajeErrorEmail}</p>
        </div>
        <div className='padre'>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <p className="mensaje-error">{mensajeErrorContrasena}</p>
        </div>
        <button type="submit">Registrarse</button>
      </form>

      
    </div>
  );
};

export default RegistroForm;

