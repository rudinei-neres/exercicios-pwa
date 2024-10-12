
import './ListaProdutos.css';  

const produtos = ['Celular Sansung', 'Noteboock accer', 'Smart TV LG', 'Impressoara HP', 'Tablet Multilaser', 'Monitor Dell'];

const ListaProdutos = () => {
    return (
      <ul className="ListaProdutos">
        {produtos.map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ul>
  );
};

export default ListaProdutos;













