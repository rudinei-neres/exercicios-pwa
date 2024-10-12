import React from 'react';
import './NumerosImpares.css';

export const NumerosImpares = ({ numeros }) => {
  const impares = numeros.filter(numero => numero % 2 !== 0);
  return (
    <ul className="numeros-impares">
      {impares.map((numero, index) => <li key={index}>{numero}</li>)}
    </ul>
  );
};


export default NumerosImpares;
