import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const VerCliente = () => {
  const navigate = useNavigate();
  const idParam = useParams().id;

  //hooks
  const [cliente, setCliente] = useState({});

  //destrunturing
  const { nombre, empresa, email, telefono, notas, id } = cliente;

  const handleRead = async () => {
    try {
      const url = `http://localhost:5000/clientes/${idParam}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setCliente(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRead();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-black text-blue-900">
        Ver Cliente: {nombre}
      </h1>
      <p className="mt-2">Informacion del Cliente</p>
      <div className="mb-3 mt-5">
        <span className="text-gray-700 font-bold text-2xl">Nombre: </span>
        {nombre}
      </div>
      <div className="mb-3">
        <span className="text-gray-700 font-bold text-xl">Empresa: </span>
        {empresa}
      </div>
      <div className="mb-3">
        <span className="text-gray-700 font-bold text-xl">Email: </span>
        {email}
      </div>
      <div className="mb-3">
        <span className="text-gray-700 font-bold text-xl">Teléfono: </span>
        {telefono}
      </div>
      <div className="mb-3">
        <span className="text-gray-700 font-bold text-xl">Notas: </span>
        {notas}
      </div>
      <div className="text-right mt-40">
        <button
          className="bg-blue-600 hover:bg-blue-700 p-2 mr-1 text-white font-bold uppercase rounded-md w-1/4"
          type="button"
          onClick={() => navigate(`../editar/${id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 p-2 mr-1 text-white font-bold uppercase rounded-md w-1/4"
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default VerCliente;
