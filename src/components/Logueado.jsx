import { Input } from "./extensiones/Input";
import { Boton } from "./extensiones/Boton";
import { useState } from "react";
export const Logueado = () => {
  const [confirmacion, setConfirmacion] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const datosUsuario = (e) => {
    setUsuario(e.target.value);
  };
  const datosContrasena = (e) => {
    setContrasena(e.target.value);
  };

  const confirmar = () => {
    if (usuario === "admin" && contrasena === "1234") {
      setConfirmacion(true);
      alert("Bienvenido");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center text-center">
      {confirmacion ? (
        <div className="text-green-500">
          <h1 className="text-2xl">¡Acceso Concedido!</h1>
          <p>Bienvenido, {usuario}</p>
        </div>
      ) : (
        <>
          <Input
            onChange={datosUsuario}
            value={usuario}
            type="text"
            placeholder="Nombre de Usuario"
          />
          <Input
            onChange={datosContrasena}
            value={contrasena}
            type="password"
            placeholder="Contraseña"
          />
          <Boton evento={confirmar}>Iniciar Sesión</Boton>
        </>
      )}
    </div>
  );
};
