import React from "react";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  return (
    <>
      <h1 className="text-2xl font-black text-blue-900">Nuevo Cliente</h1>
      <p>Llena los siguientes campos para registrar un campo</p>
      <Formulario />
    </>
  );
};

export default NuevoCliente;
