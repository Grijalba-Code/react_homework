"use client";

import "../css/StylesButton.css";

function AddCarrito() {
  function addSuccess() {
    alert("Producto agregado al carrito");
  }
  return (
    <button className="btn-add" onClick={addSuccess}>
      + 🛒
    </button>
  );
}

export default AddCarrito;
