import { Boton } from "./extensiones/Boton";
import { Input } from "./extensiones/Input";
import { useState } from "react";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tareas, setTareas] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [nombreEdicion, setNombreEdicion] = useState("");
  const [emailEdicion, setEmailEdicion] = useState("");

  const datosNombres = (e) => {
    setNombre(e.target.value);
  };

  const datosEmail = (e) => {
    setEmail(e.target.value);
  };

  const datosNombresEdicion = (e) => {
    setNombreEdicion(e.target.value);
  };

  const datosEmailEdicion = (e) => {
    setEmailEdicion(e.target.value);
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    if (nombre.trim() && email.trim()) {
      setTareas([...tareas, { nombre, email }]);
      setNombre("");
      setEmail("");
    }
  };

  const eliminarTarea = (index) => {
    const tarea_eliminada = tareas.filter((_, i) => i !== index);
    setTareas(tarea_eliminada);
  };

  const editarTarea = (index) => {
    setEditandoIndex(index);
    setNombreEdicion(tareas[index].nombre);
    setEmailEdicion(tareas[index].email);
  };

  const confirmarEdicion = () => {
    const tareasActualizadas = tareas.map((tarea, index) =>
      index === editandoIndex
        ? { nombre: nombreEdicion, email: emailEdicion }
        : tarea
    );
    setTareas(tareasActualizadas);
    setEditandoIndex(null);
    setNombreEdicion("");
    setEmailEdicion("");
  };

  const cancelarEdicion = () => {
    setEditandoIndex(null);
    setNombreEdicion("");
    setEmailEdicion("");
  };

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <form onSubmit={enviarDatos} className="flex flex-col gap-2">
        <Input
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={datosNombres}
        />
        <Input
          placeholder="Escribe tu email"
          value={email}
          onChange={datosEmail}
        />
        <Boton evento={enviarDatos}>Agregar Usuario</Boton>
      </form>

      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold">
          {tareas.length >= 1
            ? `Usuarios registrados ${tareas.length}`
            : `Aún no tienes usuarios registrados`}
        </h1>

        {tareas.map((tarea, index) => (
          
          <div key={index} className="flex flex-col gap-1 p-3 border rounded">
            {editandoIndex === index ? (
              // Modo edición
              <div className="flex flex-col gap-2">
                <Input
                  value={nombreEdicion}
                  onChange={datosNombresEdicion}
                  placeholder="Editar nombre"
                />
                <Input
                  value={emailEdicion}
                  onChange={datosEmailEdicion}
                  placeholder="Editar email"
                />
                <div className="flex gap-2">
                  <Boton evento={confirmarEdicion}>Confirmar</Boton>
                  <Boton evento={cancelarEdicion}>Cancelar</Boton>
                </div>
              </div>
            ) : (
              // Modo visualización
              <>
                <p>{`Usuario: ${tarea.nombre}, Correo: ${tarea.email}`}</p>
                <div className="flex gap-2">
                  <Boton evento={() => editarTarea(index)}>Editar</Boton>
                  <Boton evento={() => eliminarTarea(index)}>Eliminar</Boton>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
