import { useState } from "react"
export const Contador=()=>{
  const [count,setCount]=useState(0)
  const funcionContar=()=>{
    setCount(count+1)
  }
  return (
    <button className="bg-amber-900 border-2 border-amber-600 " onClick={funcionContar}> {`Sube ${count}`}</button>
  )
}