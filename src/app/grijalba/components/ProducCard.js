import "../css/StylesButton.css";
import AddCarrito from "./Add";

export default function ProductCard(props) {
  return (
    <div className="container-Card">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{props.marca}</h3>
          <ul className="list-group">
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
        </div>
        <button className="btn-comprar">Comprar</button>
        <AddCarrito />
      </div>
    </div>
  );
}
