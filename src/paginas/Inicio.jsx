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

  const handleDelete = async (id) => {
    if (confirm("Desea eliminar el cliente")) {
      try {
        const url = `http://localhost:5000/clientes/${id}`;
        const respuesta = await fetch(url, {
          method: "DELETE",
        });
        await respuesta.json();
        const arrayUpdate = clientes.filter((cliente) => {
          if (cliente.id !== id) {
            return cliente;
          }
        });
        setClientes(arrayUpdate);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1 className="text-2xl font-black text-blue-900">Clientes</h1>
      <p className="mt-2">Administra tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inicio;
