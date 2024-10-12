import React from 'react';
import './Multiplicacao.css';

export const Multiplicacao = ({ num1, num2 }) => {
  return (
    <div className="multiplicacao">
      Multiplicação: {num1 }* {num2}={num1 * num2}
    </div>
  );
};


export default Multiplicacao;
