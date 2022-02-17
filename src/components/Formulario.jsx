import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "./Error";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Formulario = ({ children, cliente, cargando }) => {
  const navigate = useNavigate();
  const handleOnSubmit = async (values) => {
    try {
      if (cliente.id) {
        //Editando un registro
        const url = `${import.meta.env.VITE_API_URL}/${cliente.id}`;
        const respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
        navigate("/clientes");
      } else {
        //Nuevo Registro
        const url = `${import.meta.env.VITE_API_URL}`;
        const respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
        navigate("/clientes");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(30, "El nombre es muy largo")
      .required("El nombre del cliente es Obligatorio"),
    empresa: Yup.string().required("El nombre de la empresa es Obligatorio"),
    email: Yup.string()
      .email("Email no valido")
      .required("El email es Obligatorio"),
    telefono: Yup.number()
      .positive("Número no valido")
      .integer("Número no valido")
      .required("El telefono es obligatorio"),
  });
  return cargando ? (
    <Spinner />
  ) : (
    <div className="bg-white mt-10 py-10 px-5 md:w-4/5 mx-auto rounded-md shadow-md">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {children}
      </h1>
      <Formik
        initialValues={{
          nombre: cliente?.nombre ?? "",
          empresa: cliente?.empresa ?? "",
          email: cliente?.email ?? "",
          telefono: cliente?.telefono ?? "",
          notas: cliente?.notas ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleOnSubmit(values);
          resetForm();
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="nombre" className="text-gray-700">
                  Nombre:{" "}
                </label>
                <Field
                  id="nombre"
                  name="nombre"
                  className="w-full mt-2 bg-gray-50 p-3 block"
                  type="text"
                  placeholder="Nombre del cliente"
                />
                {errors.nombre && touched.nombre ? (
                  <Error mensaje={errors.nombre} />
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="empresa" className="text-gray-700">
                  Empresa:{" "}
                </label>
                <Field
                  id="empresa"
                  name="empresa"
                  className="w-full mt-2 bg-gray-50 p-3 block"
                  type="text"
                  placeholder="Empresa del cliente"
                />
                {errors.empresa && touched.empresa ? (
                  <Error mensaje={errors.empresa} />
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-700">
                  Email:{" "}
                </label>
                <Field
                  id="email"
                  name="email"
                  className="w-full mt-2 bg-gray-50 p-3 block"
                  type="email"
                  placeholder="Email del cliente"
                />
                {errors.email && touched.email ? (
                  <Error mensaje={errors.email} />
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="telefono" className="text-gray-700">
                  Teléfono:{" "}
                </label>
                <Field
                  id="telefono"
                  name="telefono"
                  className="w-full mt-2 bg-gray-50 p-3 block"
                  type="tel"
                  placeholder="Teléfono del cliente"
                />
                {errors.telefono && touched.telefono ? (
                  <Error mensaje={errors.telefono} />
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="notas" className="text-gray-700">
                  Notas:{" "}
                </label>
                <Field
                  as="textarea"
                  id="notas"
                  name="notas"
                  className="w-full mt-2 bg-gray-50 p-3 block h-32"
                  type="text"
                  placeholder="Notas del cliente (opcional)"
                />
              </div>
              <input
                type="submit"
                value={children}
                className="w-full text-lg bg-blue-900 shadow-md px-10 py-2 rounded-md text-white font-bold hover:bg-blue-700 uppercase"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

Formulario.defaultProps = {
  cliente: {},
  cargando: false,
};

export default Formulario;
