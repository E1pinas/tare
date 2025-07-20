import { useState } from "react";
export const Tarjeta=()=>{
  const personas={nombre:"daichi",edad:24}
  const [persona,_setPersona]=useState(personas)
  return (
    <div>
      <p>{persona.nombre}</p>
      <p>{persona.edad}</p>
    </div>
  )
}