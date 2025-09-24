
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/NavBar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";


export default function App() {
  
  
  return (
    <BrowserRouter>
  <Navbar />
  
<Routes>
  
   <Route path="/" element={<ItemListContainer greeting="Tu tienda online" />} />
    <Route path="/electrodomesticos" element={<ItemListContainer greeting="Electrodomésticos" />} />
    <Route path="/muebles" element={<ItemListContainer greeting="Muebles" />} />
    <Route path="/tecnologia" element={<ItemListContainer greeting="Tecnología" />} />
    <Route path="/juguetes" element={<ItemListContainer greeting="Juguetes" />} />
    <Route path="/Detalle" element={<h1>Ir a ver el detalle</h1>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
 
</Routes>

</BrowserRouter>
  );
}

import { useState } from "react";