import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Se utiliza email en lugar de username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      // 1. Autenticación: se envía el email como username (según lo que espera el backend)
      const authResponse = await api.post("/authenticate", { username: email, password });
      console.log("Respuesta de login:", authResponse.data);

      const token = authResponse.data;
      if (!token) {
        setError("Token no recibido. Revisa la respuesta del servidor.");
        return;
      }
      localStorage.setItem("token", token);

      // 2. Obtener información del usuario por email
      try {
        const userResponse = await api.get(`/usuarios/email/${email}`);
        const userData = userResponse.data;
        console.log("Datos del usuario:", userData);

        // Guardar la información relevante del usuario en localStorage
        localStorage.setItem("user", JSON.stringify({
            id: userData.id,
            nombre: userData.nombre || email,
            email: userData.email,
            rol: userData.rol
        }));

        // Redirigir al Home
        navigate("/");
      } catch (userError) {
        console.error("Error obteniendo datos del usuario:", userError);
        // En caso de error, si se tiene token, guardar al menos el email como fallback
        localStorage.setItem("user", JSON.stringify({ nombre: email }));
        navigate("/");
      }
    } catch (err) {
      console.error("Error en el login:", err);
      setError(err.response?.data?.message || "Credenciales inválidas");
    }
  };

  return (
    <div className="flex-1 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Iniciar sesión</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 text-white"
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-600 mb-2 "
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 text-white"
            placeholder="••••••••"
            required
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
