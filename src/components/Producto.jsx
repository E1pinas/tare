export const Producto = ({ nombre, precio }) => {
  return (
    <div className="border-2 border-gray-300 p-4 rounded bg-gray-100">
      <h4 className="text-lg font-bold text-amber-950">{nombre}</h4>
      <p className="text-md text-gray-700">Precio: ${precio}</p>
    </div>
  );
};
