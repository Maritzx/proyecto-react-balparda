
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import  { CartProvider  }  from "./context/cartContext.jsx"; 
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import app, { getProducts } from './data/firebase';



 
export default function App() {
    console.log("Init Firebase", app)
  getProducts();
  
  
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
   
        <Routes>

   <Route path="/" element={<ItemListContainer>Bienvenidos a mi tienda</ItemListContainer>}/>
    <Route path="/category/:categParam" element={<ItemListContainer  />} />
    <Route path="/detalle/:idParam" element={<ItemDetailContainer />} />
    <Route path="/cart" element={<CartContainer />} />
    <Route path="*" element={<h1>404 Not Found: Página no encontrada</h1>} />
 
</Routes>

</BrowserRouter>
    </CartProvider>
  );
}

function MyButton(props) {
  return (
    <button>
      {props.children}
    </button>
  );
}

