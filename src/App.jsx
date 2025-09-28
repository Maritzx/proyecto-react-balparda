

import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer.jsx"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  
  
  return (
    <BrowserRouter>
  <Navbar />
  
<Routes>
  
   <Route path="/" element={<ItemListContainer greeting="Bienvenido a tu tienda online" />} />
    <Route path="/category/:categParam" element={<ItemListContainer  />} />
    <Route path="/detalle/:idParam" element={<ItemDetailContainer />} />
    <Route path="*" element={<h1>404 Not Found: Página no encontrada</h1>} />
 
</Routes>

</BrowserRouter>
  );
}

import { useState } from "react";