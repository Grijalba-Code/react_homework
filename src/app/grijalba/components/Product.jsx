import AddCarrito from "./Add";

function Product(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
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

export default Product;
