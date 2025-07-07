"use client";

function addSuccess() {
  alert("Producto agregado al carrito");
}

function AddCarrito() {
  return (
    <button className="btn btn-success" onClick={addSuccess}>
      + 🛒
    </button>
  );
}

export default AddCarrito;
