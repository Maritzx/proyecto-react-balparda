import { Link } from "react-router";
import "./Item.css";
import StateComponent from "../ColorPick/StateComponent";



function Item( {id, title, img, price} ) {
    return (
        <div className="item-card">
            <h2 className="item-card-title" 
           > 
            {title}</h2>
           <img src={img} className="item-card-img" height="300px"
           alt={title} />

<h3 className="item-card-price">Precio: ${price}</h3>
<div style= {{textAlign: "center" }}> 
    <Link to={`/detalle/${id}`}>
        <button>Ir a ver el detalle</button>
    </Link>
</div>

                </div>);}

export default Item;