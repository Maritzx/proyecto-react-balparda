import Item from '../Item/Item.jsx';
import getMockAPIdata from "../../data/mockAPI";
import { useEffect, useState } from 'react';

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getMockAPIdata()
      .then((productsList) => {
        console.log("Promesa terminada");
        setProducts(productsList);
      })
      .catch((error) => {
        console.log("Promesa rechazada");
        console.error(error);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <h2>{props.greeting}</h2>
      <div>
        <h4>Nuestros Productos</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {products.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
