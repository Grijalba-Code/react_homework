import ProducCard from "./ProducCard";

const productosData = [
  {
    marca: "LENOVO",
    serial: "123456",
    modelo: "ThinkPad",
    categoria: "Laptop",
    precio: "1'000.000 $",
  },
  {
    marca: "DELL",
    serial: "789012",
    modelo: "XPS 13",
    categoria: "Laptop",
    precio: "1'200.000 $",
  },
  {
    marca: "HP",
    serial: "345678",
    modelo: "Pavilion",
    categoria: "Laptop",
    precio: "900.000 $",
  },
  {
    marca: "ASUS",
    serial: "456789",
    modelo: "ZenBook",
    categoria: "Laptop",
    precio: "1'100.000 $",
  },
  {
    marca: "APPLE",
    serial: "234567",
    modelo: "MacBook Pro",
    categoria: "Laptop",
    precio: "2'000.000 $",
  },
  {
    marca: "MICROSOFT",
    serial: "678901",
    modelo: "Surface Laptop",
    categoria: "Laptop",
    precio: "1'500.000 $",
  },
];

export default function ProductList() {
  const productosMostrar = [];

  for (let i = 0; i < productosData.length; i++) {
    const productos = productosData[i];
    productosMostrar.push(
      <ProducCard
        key={i}
        marca={productos.marca}
        serial={productos.serial}
        modelo={productos.modelo}
        categoria={productos.categoria}
        precio={productos.precio}
      />
    );
  }

  return <>{productosMostrar}</>;
}
