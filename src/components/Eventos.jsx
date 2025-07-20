import {  useState } from "react";
export const Eventos =()=>{
  const [items,_setItems]=useState(["daichi","cookie","uwu"]);
  const mostrarMensaje=(nombre)=>{
    alert(`Hola ${nombre}` );
  }
  return (
    <>
      <ul>
        {items.map((item,index)=>(
          <li onClick={() => mostrarMensaje(item)} key={index} className="text-amber-950">{item}</li>
        ))}
      </ul>
    </>)

}