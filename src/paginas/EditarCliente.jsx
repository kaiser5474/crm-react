import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
  const idParam = useParams().id;
  //hooks
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(false);

  const handleRead = async () => {
    try {
      setCargando(!cargando);
      const url = `http://localhost:5000/clientes/${idParam}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setCliente(resultado);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  useEffect(() => {
    handleRead();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-black text-blue-900">Editar Cliente</h1>
      <p className="mt-2">{cliente.id ? 'Utiliza este formulario para editar el cliente' : 'Id de cliente no valido'}</p>
      {cliente.id && 
        <Formulario cliente={cliente} cargando={cargando}>
          Editar Cliente
        </Formulario>
      }
    </>
  );
};

export default EditarCliente;
