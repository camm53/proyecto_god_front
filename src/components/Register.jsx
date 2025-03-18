import React from 'react';

const Register = () => {
  return (
    <div className="w-full p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Crear cuenta</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
            placeholder="••••••••"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-600 mb-2">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors"
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default Register;
