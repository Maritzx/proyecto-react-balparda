
import "./Item.css";
import StateComponent from "../StateComponent";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";


function Item( {id, title, img, price} ) {
    return (
        <div className="item-card">
            <h3 className="item-card-title" 
            height="300px"> 
            {title}</h3>
           <img src={img} className="item-card-img"  
           alt={title} />
{/*Self closing tags      */ }
<h4 className="item-card-price">Precio: ${price}</h4>
<div style= {{textAlign: "center" }}> <button>Ir a ver el detalle</button></div>
<StateComponent/>
<ButtonAddToCart/>
                </div>);}

export default Item;