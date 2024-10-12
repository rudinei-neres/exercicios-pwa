import React from 'react';
import './NomesOrdenados.css';

export const NomesOrdenados = ({ nomes }) => {
  const nomesOrdenados = [...nomes].sort();
  return (
    <ol className="nomes-ordenados">
      {nomesOrdenados.map((nome, index) => <li key={index}>{nome}</li>)}
    </ol>
  );
};


export default NomesOrdenados;
