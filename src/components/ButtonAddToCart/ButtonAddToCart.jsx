import { useState } from "react";

export default function ButtonAddToCart() {
  const [statusInCart, setStatusInCart] = useState("No agregaste este item al carrito");

  function handleClick() {
    setStatusInCart("Item agregado al carrito");
  }

  return (
    <div>
      <button onClick={handleClick}>Agregar al carrito</button>
      <p>{statusInCart}</p>
    </div>
  );
}
