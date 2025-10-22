import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";
function CartContainer(){
  const { cartItems, removeItem, clearCart } = useContext(cartContext)

  async function handleCheckout(){
  const orderData = {
    buyer: formData,
    items: cartItems,
    price: 999,
    date: new Date()
  }

 
   console.log("Creando orden de compra...", formData);
   const newOrder = await createOrder(orderData);
   clearCart();
   alert( `Gracias por tu compra! Su número de orden es: ${newOrder.id}` )
    // Alternativas a ALERT
    // 1. Toast/sweetalert
    // 2. Renderizado condicional - > setOrderCreated(newOrder.id)
    //    { orderCreated ? "Gracias por tu compra" : ... }
    // 3. Redirigir al usuario /orders/orderid ( getDoc( ordersRef ) )
  }

  return (
    <div>
      <h3>Tu carrito</h3>
      <div>
        {
          cartItems.map( item => <div>
            <img width="100" src={item.imgURL}></img>
            <h4>{item.title}</h4>
            <p>Unidades: {item.count}</p>
            <p>$ {item.price * item.count}</p>
            <button onClick={ () => removeItem(item.id)}>Quitar del carrito</button>
          </div>
            )
        }
      </div>
      <FormCheckout handleCheckout={handleCheckout} />
    </div>
  )
}

export default CartContainer;