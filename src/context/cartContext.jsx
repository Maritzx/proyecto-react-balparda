import { createContext, useState } from "react";


const cartContext = createContext();

export function CartProvider(props) {
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems);
        
    function addToCart(newItem, quantity) {
        const newCartItems = structuredClone(cartItems);
        
        const isInCart = cartItems.some( item => item.id === newItem.id)
        
        if (isInCart) {
            const index = cartItems.findIndex( item => item.id === newItem.id);
            newCartItems[index].count = newCartItems[index].count + quantity;
        } 
        else {
            newCartItems.push({ ...newItem, count: quantity });
        }
        
        setCartItems(newCartItems);
        alert(`Se agregaron ${quantity} unidades de ${newItem.title} al carrito`);
    }

    function removeItem(idRemove) {
        let newCartItems = structuredClone(cartItems)

        const isInCart = cartItems.find( item => item.id === idRemove);
        if (!isInCart) return;
        const countInCart = isInCart.count;
        if (countInCart > 1){
            const index = cartItems.findIndex( item => item.id === idRemove);
            newCartItems[index].count--;
        }
        else {
                newCartItems = cartItems.filter( item => item.id !== idRemove)
        }
    setCartItems(newCartItems);
    }

    function removeItemCompleto(idRemove) {
        const newCart = cartItems.filter( item => item.id !== idRemove)
        setCartItems(newCart)
    }

    // Esta es la función que CartWidget espera
    function countItems() {
        let count = 0;
        cartItems.forEach( item => count += item.count);
        return count;
    }

    // Esta es la función que CartContainer espera
    function totalItemsInCart() {
        // En este caso, hace lo mismo que countItems, podrías llamarla directamente si quisieras,
        // pero la mantenemos separada si esperas que en el futuro puedan tener lógicas distintas.
        return countItems(); 
    }

    function totalPriceInCart() {
        let total = 0;
        cartItems.forEach( item => total += item.price * item.count);
        return total;
    }

    function clearCart(){
        setCartItems([])
    }

  return (
    <cartContext.Provider 
        value={ {
            cartItems, 
            addToCart, 
            removeItemCompleto, 
            countItems, // Exportamos countItems para CartWidget
            totalItemsInCart, // Exportamos totalItemsInCart para CartContainer
            totalPriceInCart, 
            removeItem, 
            clearCart
        }}
    >
       { props.children }
    </cartContext.Provider>
  )
}

export default cartContext;