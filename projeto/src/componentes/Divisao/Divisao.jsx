import React from 'react';
import './Divisao.css';

export const Divisao = ({ num1, num2 }) => {
  return (
    <div className="Divisao">
      Divisão: {num1} / {num2}={num1 / num2}
    </div>
  );
};


export default Divisao;
