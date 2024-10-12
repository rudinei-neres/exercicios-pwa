
import './VerificarIdade.css';

const VerificarIdade = () => {
    const idades = [20, 16]; 

    return (
      <div>
        {idades.map((idade, index) => (
          <div key={index} className={idade >= 18 ? "maiorIdade" : "menorIdade"}>
            {idade} anos, {idade >= 18 ? "é maior de idade" : "é menor de idade"}
          </div>
        ))}
      </div>
    );
};

export default VerificarIdade;