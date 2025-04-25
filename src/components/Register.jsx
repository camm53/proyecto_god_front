import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "/api";

const Register = () => {
  const navigate = useNavigate();

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [esVendedor, setEsVendedor] = useState(false);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMensaje("");

    // Validar que las contraseñas coincidan
    if (contrasena !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Construir el objeto usuario con el rol según el checkbox
    const usuarioData = {
      nombre,
      email,
      contrasena,
      telefono,
      direccion,
      rol: esVendedor ? "VENDEDOR" : "CLIENTE",
    };

    try {
      const response = await api.post("/usuarios", usuarioData);
      console.log("Respuesta de registro:", response.data);
      setMensaje("Registro exitoso. Ahora puedes iniciar sesión.");
      // Redirigir o limpiar el formulario, según lo requieras
      // navigate("/login");
    } catch (err) {
      console.error("Error en el registro:", err);
      setError(err.response?.data?.message || "Error al registrar el usuario.");
    }
  };

  return (
    <div className="w-full p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Crear cuenta</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {mensaje && <p className="text-green-500 mb-4">{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 text-white"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">
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
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2 ">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 text-white"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-600 mb-2">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 text-white"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-sm font-semibold text-gray-600 mb-2">
            Teléfono
          </label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 text-white"
            placeholder="+569XXXXXXXX"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block text-sm font-semibold text-gray-600 mb-2">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 text-white"
            placeholder="Tu dirección"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="esVendedor"
            checked={esVendedor}
            onChange={(e) => setEsVendedor(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="esVendedor" className="text-sm text-gray-600">
            Registrarme como vendedor
          </label>
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
