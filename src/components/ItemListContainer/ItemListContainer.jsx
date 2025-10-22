import Item from '../Item/Item.jsx';
import { getProducts, getProductsByCateg } from '../../data/firebase';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import "./ItemListContainer.css";

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const { categParam } = useParams();


  useEffect(() => {
    setIsloading(true);

if (categParam) {
  getProductsByCateg(categParam)
  .then( ProductsByCateg => setProducts(ProductsByCateg) )
  .catch( error => alert(error) )
  .finally( () => setIsloading(false) );
}
else
    getProducts()
      .then((productsList) => {
        console.log("Promesa terminada");
        setProducts(productsList);
      })
      .catch((error) => {
        console.log("Error solicitando los datos", error);
        alert("Algo salio mal buscando los productos")
      })
      .finally(() => {
        console.log("Promesa finalizada");
        setIsloading(false);
      });
      
  }, [ categParam]);

 
  return (
    <div className="item-list-container" >
        <h2>{props.greeting}</h2>
        { isLoading 
          ? <p className="item-list-container__loading">Cargando...</p> 
          : ""
        }
        <div>
        <h4>Nuestros productos</h4>   
        <div  className="item-list">
        {
          products.map(item =>  <Item key={item.id} {...item} /> )
        }     
        </div>
      </div>
    </div>
  )
}
