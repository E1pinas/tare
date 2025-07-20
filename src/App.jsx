// import { useState } from 'react'
import { Saludo } from "./components/Saludo";
import { Contador } from "./components/Contador";
import "./index.css";
import { Listas } from "./components/Listas";
import { Ocultar } from "./components/Ocultar";
import { Eventos } from "./components/Eventos";
import { Tarjeta } from "./components/Tarjeta";
import { Productos } from "./components/Productos"
const App = () => {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <Saludo texto="Hola Mundo" />
      <Contador />
      <Listas />
      <Ocultar />
      <Eventos />
      <Tarjeta></Tarjeta>
      <Productos />
      
    </div>
  );
};

export default App;
