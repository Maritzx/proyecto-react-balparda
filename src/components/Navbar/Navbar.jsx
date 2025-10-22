import { Link } from "react-router";
import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
     <Link to="/">
      <span className="nombre-tienda">BOCANNADA STORE</span>
      </Link>
      
      <div className="navbar-left">
        <img
          className="logo"
          src="/logoBocannada.jpeg"
          alt="Logo Bocannada"
          style={{ width: "100px", height: "auto" }}
        />
      </div>

     <ul className="navbar-links">
      <li>
        <Link to="/Category/electrodomesticos">
        Electrodomésticos
        </Link>
        </li>
  <li>
    <Link to="/category/muebles">
    Muebles
    </Link>
    </li>
  <li
  ><Link to="/category/tecnologia"> 
  Tecnología
  </Link>
  </li>
  <li>
    <Link to="/category/juguetes">
    Juguetes
    </Link>
    </li>
   </ul>
    <Link to="/cart">
    <CartWidget/>
    </Link>
   </nav>  
   );
} 

export default NavBar