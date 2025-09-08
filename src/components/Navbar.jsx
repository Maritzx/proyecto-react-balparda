import logo from "../assets/logoBocannada.jpeg";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={logo} alt="Logo Bocannada" style={{ width: "100px", height: "auto" }} />
        <h1 className="title">Bienvenidos a Bocannada Store</h1>
      </div>

      <ul className="navbar-buttons" style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><button>Electrodomésticos</button></li>
        <li><button>Muebles</button></li>
        <li><button>Tecnología</button></li>
        <li><button>Juguetes</button></li>
      </ul>

      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
}
