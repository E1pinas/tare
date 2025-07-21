// import { useState } from 'react'
import { Saludo } from "./components/Saludo";
import { Contador } from "./components/Contador";
import "./index.css";
import { Listas } from "./components/Listas";
import { Ocultar } from "./components/Ocultar";
import { Eventos } from "./components/Eventos";
import { Tarjeta } from "./components/Tarjeta";
import { Productos } from "./components/Productos";
import { Logueado } from "./components/Logueado";
import { Formulario } from "./components/Formulario";
const App = () => {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      {/* <Saludo texto="Hola Mundo" />
      <Contador />
      <Listas />
      <Ocultar />
      <Eventos />
      <Tarjeta></Tarjeta>
      <Productos />
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold">Ejemplo de Tarjeta</h1>
        <Tarjeta
          titulo="Título de la Tarjeta"
          contenido="Este es el contenido de la tarjeta."
        />
      </div>
      <Logueado /> */}
    <Formulario></Formulario>
    </div>

);
};

export default App;
