import { useContext } from "react";
import cartContext from "../../context/cartContext.jsx";
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";


function CartContainer(){
  
  const { cartItems, removeItem, removeItemCompleto, clearCart, totalItemsInCart, totalPriceInCart } = useContext(cartContext); 

  async function handleCheckout(formData){
    const orderPrice = totalPriceInCart(); 

    const orderData = {
      buyer: formData,
      items: cartItems,
      price: orderPrice, 
      date: new Date()
    }

    console.log("Creando orden de compra...", formData);
    try {
      const newOrder = await createOrder(orderData);
      clearCart();
      alert( `Gracias por tu compra! Su número de orden es: ${newOrder.id}` );
    } catch (error) {
      console.error("Error al crear la orden:", error);
      alert("Hubo un error al procesar tu compra. Por favor, inténtalo de nuevo.");
    }
  }

  return (
    <div className="cart-container">
      <h3>Tu carrito</h3>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío. ¡Explora nuestros productos y agrega algo!</p>
      ) : (
        <>
          <div className="cart-items-list">
            {
              cartItems.map( item => (
                <div className="cart-item" key={item.id}>
                  <img width="100" src={item.img} alt={item.title}></img>
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p>Unidades: {item.count}</p>
                    <p>Precio Unitario: $ {item.price}</p> 
                    <p>Subtotal: $ {item.price * item.count}</p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={ () => removeItem(item.id)}>Quitar una unidad</button>
                    <button onClick={ () => removeItemCompleto(item.id)}>Quitar todas las unidades</button>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="cart-summary">
            <h4>Resumen del Carrito</h4>
            <p>Total de productos: {totalItemsInCart()} unidades</p>
            <p><strong>Total a pagar: ${totalPriceInCart().toFixed(2)}</strong></p>
            <button onClick={clearCart} className="clear-cart-button">Vaciar Carrito</button>
          </div>
          <FormCheckout handleCheckout={handleCheckout} />
        </>
      )}
    </div>
  )
}

export default CartContainer;