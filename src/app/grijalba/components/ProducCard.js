import AddCarrito from "./Add";
import "../css/StylesButton.css";
import Product from "./Product";

export default function ProductCard() {
  return (
    <div className="containerCard">
      <h3>Ejemplo de Card</h3>
      <Product
        title="LENOVO"
        serial="123456"
        modelo="ThinkPad"
        categoria="Laptop"
        precio="1'000.000 $"
      />
    </div>
  );
}
