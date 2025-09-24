import { useState, useEffect, use } from "react";

export default function StateComponent() {
  const [color, setColor] = useState("#000000");
  console.log("Renderizando State Comp");
useEffect(() => {
    console.warn("rojo, Tarea compleja, conexion a base de datos");
    console.warn("amarillo, acceso al DOM, fetch");
}, []);

  return (
    <div>
      <p>
        Selecciona tu color – Color activo:{" "}
        <span
          style={{
            display: "inline-block",
            width: "12px",
            height: "12px",
            backgroundColor: color,
            marginLeft: "6px",
          }}
        ></span>
      </p>
      <p>
        <button onClick={() => setColor("#060606ff")}>Negro</button>
        <button onClick={() => setColor("#0000ffff")}>Azul</button>
        <button onClick={() => setColor("#ff0000ff")}>Rojo</button>
      </p>
    </div>
  );
}
