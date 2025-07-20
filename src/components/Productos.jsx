import { Input } from "./extensiones/Input";
import { useState } from "react";
import  {Boton} from "./extensiones/Boton";
export const Productos = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
   const [productos, setProductos] = useState([]);
  const obtenerNombre=(e)=>{
    setNombre(e.target.value)
  }

  const obtenerPrecio=(e)=>{
    setPrecio(e.target.value)
  }

  const agregarProducto=()=>{
    if(nombre.trim()==="" || precio.trim()==="")return
    console.log(nombre,precio)
    const nuevoProducto={
      name:nombre,
      price:precio
    }

    setProductos([...productos,nuevoProducto])
    setNombre("")
    setPrecio("")
  }
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center text-center">
      <h2 className="w-3xl ">Nombre de Producto</h2>
      <Input type="text" value={nombre} onChange={obtenerNombre}></Input>
      <h2>Precio de Producto</h2>
      <Input className="w-full" type="nunber" value={precio} onChange={obtenerPrecio}></Input>
      <Boton evento={agregarProducto}>Agregar Producto</Boton>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.name} - ${producto.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
