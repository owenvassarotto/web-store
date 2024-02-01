import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen -mt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Página no encontrada</h1>
        <p className="text-lg text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe.</p>
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2"
        >
          Volver
        </button>
        <Link
          to={"/"}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md inline-block"
        >
          Ir a la página de inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
