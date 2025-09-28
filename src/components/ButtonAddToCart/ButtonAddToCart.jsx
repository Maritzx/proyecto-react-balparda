import { useState } from "react";

export default function ButtonAddToCart() {
  let [statusInCart, setStatusInCart] = useState("No agregaste este item al carrito");

  function handleClick() {
    setStatusInCart("Item agregado al carrito");
  }

  return (
    <div className= "ButtonAddToCart">
      {    }
      <button onClick={handleClick}>Agregar al carrito</button>
      <p>{statusInCart}</p>
      <br />
      <small>{statusInCart}</small>
    </div>
  );
}
