import "./App.css";
import Navabr from "./components/Nav/Navbar";
import Products from "./components/Products/Products";


function App() {
  return (
    <>
      <Navabr/>
      <div className="products">
        <Products />
      </div>
    </>
  );
}

export default App;