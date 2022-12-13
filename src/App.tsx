import "./App.css";
import Navabr from "./components/Nav/Navbar";
import { Routes, Route } from 'react-router-dom'
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Navabr />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<h1>Not Found mi bro</h1>} />
      </Routes>
    </>
  );
}

export default App;