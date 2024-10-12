import React from 'react';
import './Soma.css';

export const Soma = ({ num1, num2 }) => {
  return (
    <div className="soma">
      Soma: {num1} + {num2} = {num1 + num2}
    </div>
  );
};


export default Soma;
