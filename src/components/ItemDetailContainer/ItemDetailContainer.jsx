import StateComponent from "../ColorPick/StateComponent.jsx";
import { useParams } from "react-router";
import { getProductById } from "../../data/firebase";
import { useEffect, useState, useContext} from "react";
import  cartContext  from "../../context/cartContext.jsx";    

function ItemDetailContainer() { 
    const { idParam } = useParams();
    const [product, setProduct] = useState( {loading: true} );
    const context = useContext(cartContext);

    useEffect(() => {
        getProductById(idParam)
        .then( response => setProduct (response)) 
        .catch( error => alert(error)) 
    }, []) 

    if ( product.loading)
{
    return <p>Cargando..</p>
}

return ( <div className="itemCard" > 
    <h2 className="itemCardTitle">{product.title}</h2>
        <img 
        className="itemCardImg"
    height="700"
    src={product.img}
    alt={product.title}
    />
    <h3 className="itemCardPrice">Precio: ${product.price}</h3>
    <StateComponent />
    <div style={{ textAlign: "center"}}>
        <p>{product.description}</p>
    </div>
    <div>
    <button onClick={() => context.addToCart(product)}>Agregar al carrito</button>
   </div>
</div>
)
}

export default ItemDetailContainer;