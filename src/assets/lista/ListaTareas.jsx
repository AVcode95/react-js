import React, { useState } from 'react';
import './ListasTareas.css'; // Importa los estilos CSS

const ListaTareas = () => {
  // Estado para mantener la lista de tareas
  const [tareas, setTareas] = useState([]);

  // Estado para almacenar la nueva tarea que se está escribiendo
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Función para agregar una nueva tarea a la lista de tareas
  const agregarTarea = () => {
    // Verifica que la nueva tarea no esté en blanco
    if (nuevaTarea.trim() !== '') {

      // Crea una nueva tarea y la agrega a la lista de tareas
      setTareas([...tareas, { descripcion: nuevaTarea, completada: false }]);

      // Limpia el campo de entrada para la próxima tarea
      setNuevaTarea('');
    }
  };

  // Función para eliminar una tarea de la lista
  const eliminarTarea = (indice) => {

    // Crea una copia de la lista de tareas
    const nuevasTareas = [...tareas];
    
    // Elimina la tarea en el índice especificado
    nuevasTareas.splice(indice, 1);

    // Actualiza la lista de tareas
    setTareas(nuevasTareas);
  };

  // Función para marcar una tarea como completada o no completada
  const marcarTareaComoCompletada = (indice) => {
    // Crea una copia de la lista de tareas
    const nuevasTareas = [...tareas];
    // Cambia el estado de completada de la tarea en el índice especificado
    nuevasTareas[indice].completada = !nuevasTareas[indice].completada;
    // Actualiza la lista de tareas
    setTareas(nuevasTareas);
  };

  return (
    <div className='padre'>
      <h1>Lista de Tareas</h1>
      <div>
        {/* Input para agregar una nueva tarea */}
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        {/* Botón para agregar una nueva tarea */}
        <button className="btn" onClick={agregarTarea}>Agregar Tarea</button>
      </div>

      {/* Tabla de tareas */}
      <table className="tareas-table">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea, indice) => (
            <tr key={indice}>
              <td>{tarea.descripcion}</td>
              <td>
                <button className="btn" onClick={() => marcarTareaComoCompletada(indice)}>
                  {tarea.completada ? 'No Completada' : 'Completada'}
                </button>
                <button className="btn" onClick={() => eliminarTarea(indice)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaTareas;
