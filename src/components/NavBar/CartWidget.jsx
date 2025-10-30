import { useContext } from "react";
import  cartContext  from "../../context/cartContext.jsx";
export default function CartWidget() {
  const { countItems } = useContext(cartContext);
{

  
}

  return (
    <div>
      <span role="img" aria-label="Carrito" style={{ fontSize: "50px" }}>
        🛒 {countItems()}
      </span>
    </div> 
  );
}

