export const Boton = ({ evento, children }) => {
  return (
    <button className="border" onClick={evento}>
      {children}
    </button>
  );
};
