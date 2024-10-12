import React from 'react';
import './Subtracao.css';

export const Subtracao = ({ num1, num2 }) => {
  return (
    <div className="subtracao">
      Subtração: {num1}+{num2}  = {num1 - num2}
    </div>
  );
};


export default Subtracao;
