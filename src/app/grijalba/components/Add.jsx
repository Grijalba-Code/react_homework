"use client";

function btnCarrito() {
  alert("Producto agregado al carrito");
}

function AddCarrito() {
  return (
    <button className="btn btn-success" onClick={btnCarrito}>
      🛒
    </button>
  );
}

export default AddCarrito;
