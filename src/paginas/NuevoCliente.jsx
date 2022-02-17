import React from "react";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  return (
    <>
      <h1 className="text-2xl font-black text-blue-900">Nuevo Cliente</h1>
      <p className="mt-2">
        Llena los siguientes campos para registrar un campo
      </p>
      <Formulario>Agregar Cliente</Formulario>
    </>
  );
};

export default NuevoCliente;
