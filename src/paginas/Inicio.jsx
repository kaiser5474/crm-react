import React, { useEffect, useState } from "react";
import Cliente from "../components/Cliente";

const Inicio = () => {
  //hooks
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    handleRead();
  }, []);

  const handleRead = async () => {
    try {
      const url = "http://localhost:5000/clientes";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setClientes(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-black text-blue-900">Clientes</h1>
      <p className="mt-2">Administra tus clientes</p>
      {clientes.map((cliente) => (
        <Cliente key={cliente.id} cliente={cliente} />
      ))}
    </>
  );
};

export default Inicio;
