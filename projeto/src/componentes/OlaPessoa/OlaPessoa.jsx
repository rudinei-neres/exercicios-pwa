import './OlaPessoa.css'; 



const OlaPessoa = ({ nome }) => {
  return (
    <>
    <div className="OlaPessoa">
    Olá, {nome}!
    </div>
    </>
  );
};

export default OlaPessoa;
