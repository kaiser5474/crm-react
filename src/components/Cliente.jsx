import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const navigate = useNavigate();
  const { nombre, email, empresa, telefono, notas, id } = cliente;
  return (
    <>
      <tr className="border-b hover:bg-gray-100">
        <td className="p-2">{nombre}</td>
        <td>
          <p>
            <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
            {email}
          </p>
          <p>
            <span className="text-gray-800 uppercase font-bold">Tel:</span>{" "}
            {telefono}
          </p>
        </td>
        <td>{empresa}</td>
        <td className="text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 p-2 mr-0.5 text-white font-bold uppercase rounded-md text-xs"
            type="button"
          >
            Edit
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 p-2 mr-0.5 text-white font-bold uppercase rounded-md text-xs"
            type="button"
          >
            Delete
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 p-2 mr-0.5 text-white font-bold uppercase rounded-md text-xs"
            type="button"
            onClick={() => navigate(`/clientes/${id}`)}
          >
            Watch
          </button>
        </td>
      </tr>
    </>
  );
};

export default Cliente;
