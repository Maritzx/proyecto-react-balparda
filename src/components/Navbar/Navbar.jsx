import { Link } from "react-router";
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
      <span className="Bienvenida">Bienvenidos a bocannada store</span>
      </a>
      <div className="navbar-left">
        <img
          className="logo"
          src="/logoBocannada.jpeg"
          alt="Logo Bocannada"
          style={{ width: "100px", height: "auto" }}
        />
      </div>

     <ul className="navbar-links">
      <li><Link to="/Detalle"></Link></li>
  <li><Link to="/category/electrodomesticos">Electrodomésticos</Link></li>
  <li><Link to="/muebles">Muebles</Link></li>
  <li><Link to="/tecnologia">Tecnología</Link></li>
  <li><Link to="/juguetes">Juguetes</Link></li>
</ul>

      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
}
