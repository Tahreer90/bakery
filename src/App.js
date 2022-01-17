import "./App.css";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import products from "./products";

function App() {
  return (
    <div>
      <Home />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
