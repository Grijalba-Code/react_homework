import Button from "../components/Button";
import "../css/StylesButton.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "../components/ProducList";

function AppGrijalba() {
  return (
    <div className="container1">
      <h1>😝 Bienvenido a mi App 🤪 </h1>
      <Button />
      <div className="container-Card-grid">
        <ProductList />
      </div>
      <a href="../../../">
        <button className="home">Volver a Home</button>
      </a>
    </div>
  );
}

export default AppGrijalba;
