import StateComponent from "../ColorPick/StateComponent.jsx";
import { useParams } from "react-router";
import { getProductById } from "../../data/firebase";
import { useEffect, useState, useContext} from "react";
import  cartContext  from "../../context/cartContext.jsx";    

function ItemDetailContainer() {
  const { idParam } =  useParams();
  const [product,setProduct] = useState( { loading: true} );
  const context = useContext(cartContext);
  
  useEffect( () => {
    getProductById(idParam)
    .then( response => setProduct(response))   
    .catch( error => alert(error))
  }, [])

  // If con early return
  if ( product.loading ){
    return <p>Cargando...</p>
  }

  return (<div className="item-card">    
    <h2 className="item-card-title">{product.title}</h2>
    <img
      className="item-card-img"
      height="800"
      src={product.imgURL}
    />
    <h3 className="item-card-price">Precio: $ {product.price}</h3>    
    <StateComponent />
    <div style={{ textAlign: "center" }}>    
      <p>{product.description}</p>
    </div>
    <div>
      <button onClick={ () => context.addToCart(product) }>Agregar al carrito</button>
    </div>

  </div>)
}
  
export default ItemDetailContainer