
import React, { useState } from 'react';
import './App.css'
import ContadorSimple from './assets/contador/ContadorSimple'
import ListaTareas from './assets/lista/ListaTareas'
import RegistroForm from './assets/registroformulario/FormularioRegistro'


function App() {
  const [datosRegistro, setDatosRegistro] = useState(null);

   // Función para manejar el envío de datos desde RegistroForm
   const handleRegistro = (datos) => {
    // Actualiza el estado con los datos ingresados
    setDatosRegistro(datos);
  };

  return (
    <>
       <div className='padre'>
      <h1>Mi Aplicación de Contador</h1>
      <ContadorSimple></ContadorSimple>
      </div>
      <div className='padre'>
      <h1>Aplicacion de Listado de Tareas</h1>
      <ListaTareas></ListaTareas>
      </div>

      {/* Formulario */}
      <div className='padre'>
      <h1>Aplicación de Registro</h1>
      {/* Enviamos la función a través del atributo onSubmit */}
      <RegistroForm onRegistro={handleRegistro} />

      {/* Muestra los datos ingresados después de enviar el formulario en una tabla */}
      {datosRegistro && (
        <table className='tabla-datos'>
          <thead>
            <tr>
              <th>Campo</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nombre:</td>
              <td>{datosRegistro.nombre}</td>
            </tr>
            <tr>
              <td>Correo Electrónico:</td>
              <td>{datosRegistro.email}</td>
            </tr>
            <tr>
              <td>Contraseña:</td>
              <td>{datosRegistro.contrasena}</td>
            </tr>
          </tbody>
        </table>
      )}
      </div>
    
    </>
  )
}
export default App

