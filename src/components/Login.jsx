import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Tarjeta principal */}
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex">
        {/* Sección de Iniciar Sesión */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Iniciar sesión
          </h2>

          <form>
            {/* Correo */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            {/* Contraseña */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors"
            >
              Iniciar sesión
            </button>
          </form>

          {/* Separador para "o" */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">o</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Botones sociales */}
          <div className="flex gap-4 justify-center">
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              {/* Aquí podrías agregar un ícono de Google */}
              <span className="font-medium text-gray-600">Google</span>
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
              {/* Aquí podrías agregar un ícono de Facebook */}
              <span className="font-medium text-gray-600">Facebook</span>
            </button>
          </div>
        </div>

        {/* Sección Derecha: "Crear cuenta" */}
        <div className="w-1/3 bg-purple-50 p-8 flex flex-col justify-center items-center rounded-r-xl">
          <h3 className="text-xl font-bold text-purple-700 mb-4">
            ¿Nuevo aquí?
          </h3>
          <p className="text-gray-700 mb-6 text-center">
            Crea tu cuenta para disfrutar de todos nuestros beneficios
          </p>
          <a
            href="/register"
            className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors"
          >
            Crear cuenta
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
