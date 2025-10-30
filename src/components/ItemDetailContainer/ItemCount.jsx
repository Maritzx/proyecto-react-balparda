import { useState } from "react";
import "./ItemCount.css"; 

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function handleIncrement() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button onClick={handleDecrement} disabled={count === 1}>
          -
        </button>
        <span className="item-count__quantity">{count}</span>
        <button onClick={handleIncrement} disabled={count === stock}>
          +
        </button>
      </div>
      <button
        className="item-count__add-button"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin Stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}

export default ItemCount;