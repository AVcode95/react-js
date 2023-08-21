
// export default ContadorSimple;
import React, { useState } from 'react';
import './ContadorSimple.css'; // Importa los estilos CSS

const ContadorSimple = () => {
  const [contador, setContador] = useState(0);
  const [contadorIncrementos, setContadorIncrementos] = useState(0);
  const [contadorDecrementos, setContadorDecrementos] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
    setContadorIncrementos(contadorIncrementos + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
    setContadorDecrementos(contadorDecrementos + 1);
  };

  return (
    <div className="contador-container">
      <h1 className="contador-header">Contador Simple</h1>
      <p className="contador-value">Valor del contador: {contador}</p>
      <button className="contador-button" onClick={incrementarContador}>Incrementar</button>
      <button className="contador-button" onClick={decrementarContador}>Decrementar</button>

      {/* no lo pedia pero se lo agrege para practicar mas */}
      <div className="contador-registro">
        <h2 className="registro-label">Registro de click por Incrementos: <span className="registro-value">{contadorIncrementos}</span></h2>
        <h2 className="registro-label">Registro de click por Decrementos: <span className="registro-value">{contadorDecrementos}</span></h2>
      </div>
    </div>
  );
};

export default ContadorSimple;


