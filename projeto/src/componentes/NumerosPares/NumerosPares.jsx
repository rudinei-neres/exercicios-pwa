import React from 'react';
import './NumerosPares.css';

export const NumerosPares = ({ numeros }) => {
  const pares = numeros.filter(numero => numero % 2 === 0);
  return (
    <ul className="numeros-pares">
      {pares.map((numero, index) => <li key={index}>{numero}</li>)}
    </ul>
  );
};


export default NumerosPares;
