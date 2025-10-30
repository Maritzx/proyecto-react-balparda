import StateComponent from "../ColorPick/StateComponent.jsx";
import { useParams } from "react-router";
import { getProductById } from "../../data/firebase";
import { useEffect, useState, useContext} from "react";
import  cartContext  from "../../context/cartContext.jsx";    
import ItemCount from "../ItemDetailContainer/ItemCount.jsx";


function ItemDetailContainer() {
  const { idParam } =  useParams();
  const [product,setProduct] = useState( { loading: true} );
  const { addToCart } = useContext(cartContext);
  
  useEffect( () => {
    getProductById(idParam)
    .then( response => setProduct(response))   
    .catch( error => alert(error))
  }, [idParam])

  function handleOnAdd(quantity) {
    addToCart(product, quantity);
  }

  // If con early return
  if ( product.loading ){
    return <p>Cargando...</p>
  }
   
const productStock = product.stock || 5; 

  return (<div className="item-card">
    <h2 className="item-card-title">{product.title}</h2>
    <img
      className="item-card-img"
      height="800"
      src={product.imgURL}
      alt={product.title}
    />
    <h3 className="item-card-price">Precio: $ {product.price}</h3>    
    <StateComponent />
    <div style={{ textAlign: "center" }}>    
      <p>{product.description}</p>
    </div>
    <div>
      <ItemCount stock={productStock} initial={1} onAdd={handleOnAdd} />
    </div>

  </div>)
}
  
export default ItemDetailContainer