import React from 'react';
import './TamanhoTexto.css';

export const TamanhoTexto = ({ texto }) => {
  return (
    <div className="tamanho-texto">
      O texto possui: {texto.length}caracteres
    </div>
  );
};


export default TamanhoTexto;