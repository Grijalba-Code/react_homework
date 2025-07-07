"use client";

import "../css/StylesButton.css";

function addSuccess() {
  alert("Producto agregado al carrito");
}

function AddCarrito() {
  return (
    // boton para agregar al carrito

    <button className="btn-add" onClick={addSuccess}>
      + 🛒
    </button>
  );
}

export default AddCarrito;
