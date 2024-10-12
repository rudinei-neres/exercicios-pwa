import React from 'react';
import './Calculadora.css';

export const Calculadora = ({ num1, num2, operacao }) => {
  let resultado;
  let simbolo;

  switch (operacao) {
    case 'soma':
      resultado = num1 + num2;
      simbolo = '+';
      break;
    case 'subtracao':
      resultado = num1 - num2;
      simbolo = '-';
      break;
    case 'multiplicacao':
      resultado = num1 * num2;
      simbolo = '*';
      break;
    case 'divisao':
      resultado = num1 / num2;
      simbolo = '/';
      break;
    default:
      return <div className="Calculadora">Operação inválida</div>;
  }

  return (
    <div className="Calculadora">
      {num1} {simbolo} {num2} = {resultado}
    </div>
  );
};

export default Calculadora;

