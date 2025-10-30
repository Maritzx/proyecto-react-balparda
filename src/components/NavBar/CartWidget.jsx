import { useContext } from "react";
import  cartContext  from "../../context/cartContext.jsx"; 

export default function CartWidget() {
  const { countItems } = useContext(cartContext);     
  const numberOfItems = countItems(); 

  return (
    <div>
      <span role="img" aria-label="Carrito" style={{ fontSize: "50px" }}>
        🛒 {numberOfItems > 0 && <span className="cart-bubble">{numberOfItems}</span>} 
      </span>
    </div> 
  );
}   