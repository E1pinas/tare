import { useState } from "react";
export const Ocultar = () => {
  const [ocultar, setOcultar] = useState(true);
  const mostrarFuncion=()=>{
    setOcultar(!ocultar)
  }
  return <>
    <button className="bg-amber-800"  onClick={mostrarFuncion}>Presionar Aqui</button>
    {ocultar ? <p>El texto esta aqui</p> :""}
  </>;
};
