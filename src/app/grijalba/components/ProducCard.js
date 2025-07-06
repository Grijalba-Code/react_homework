import AddCarrito from "./Add";
import "../css/StylesButton.css";

function Product(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Serial:</strong> {props.serial}
          </li>
          <li className="list-group-item">
            <strong>Modelo:</strong> {props.modelo}
          </li>
          <li className="list-group-item">
            <strong>Categoria:</strong> {props.categoria}
          </li>
          <li className="list-group-item">
            <strong>Precio:</strong> {props.precio}
          </li>
        </ul>
        <AddCarrito />
      </div>
    </div>
  );
}

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
