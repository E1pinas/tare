// import { useState } from 'react'
import { Saludo } from "./components/Saludo";
import { Contador } from "./components/Contador";
import "./index.css";
import { Listas } from "./components/Listas";
import { Ocultar } from "./components/Ocultar";
import { Eventos } from "./components/Eventos";
import { Tarjeta } from "./components/Tarjeta";
import { Producto } from "./components/Producto";
import { useState } from "react";
const App = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const obtenerNombre = (e) => {
    setNombre(e.target.value);
  };

  const obtenerPrecio = (e) => {
    setPrecio(e.target.value);
  };

  const agregarProducto = () => {
    if (nombre && precio) {
      const nuevoProducto = {
        nombre: nombre,
        precio: parseFloat(precio),
      };
      setProductos([...productos, nuevoProducto]);
      // Limpiar los inputs
      setNombre("");
      setPrecio("");
    }
  };

  return (
    <div className="w-34 flex flex-col gap-2 justify-center items-center">
      <Saludo texto="Hola Mundo" />
      <Contador />
      <Listas />
      <Ocultar />
      <Eventos />
      <Tarjeta></Tarjeta>

      {/* Formulario para agregar productos */}
      <div className="border-2 p-4 rounded">
        <p>Nombre de producto</p>
        <input
          className="border-2 p-2"
          type="text"
          value={nombre}
          onChange={obtenerNombre}
          placeholder="Ingresa el nombre"
        />
        <p>Precio de producto</p>
        <input
          className="border-2 p-2"
          type="number"
          value={precio}
          onChange={obtenerPrecio}
          placeholder="Ingresa el precio"
        />
        <button
          className="border-2 bg-amber-950 text-white p-2 mt-2"
          onClick={agregarProducto}
        >
          Agregar Producto
        </button>
      </div>

      {/* Lista de productos */}
      <div className="flex flex-col gap-2">
        <h3>Lista de Productos:</h3>
        {productos.map((producto, index) => (
          <Producto
            key={index}
            nombre={producto.nombre}
            precio={producto.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
