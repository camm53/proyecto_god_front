import React from 'react';

const Login = ({ onLogin }) => {
  // Podemos manejar el submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de validación o autenticación...
    onLogin(); // Llamamos la función que redirige al Home
  };

  return (
    <div className="flex-1 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        {/* Campo de Correo */}
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

        {/* Campo de Contraseña */}
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

        {/* Botón de Iniciar Sesión */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors"
        >
          Iniciar sesión
        </button>
      </form>

      {/* Separador con "o" */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-400">o</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Botones de Login Social */}
      <div className="flex gap-4 justify-center">
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          <span className="font-medium text-gray-600">Google</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          <span className="font-medium text-gray-600">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
