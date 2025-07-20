import { useState } from "react";

export const Listas = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const funcionOnchage=(e)=>{
    setInputValue(e.target.value);

  }
  const click=()=>{
    if(!inputValue.trim()) return; // Prevent adding empty items
     // Add the input value to the list
    setItems([...items, inputValue]);
    setInputValue(""); 
     // Log each item in the list
  }
  return (
    <>
      <div className="flex flex-col ">
        <input type="text" value={inputValue} onChange={funcionOnchage} placeholder="Escribe Aqui"></input>
        <button onClick={click}>Presionar</button>
      </div>
      <div className="flex flex-col justify-center">
        {items.map((item, index) => (
          <div key={index} className="text-amber-950">
            <li>{item}</li>
          </div>
        ))}
      </div>
    </>
  );
};
