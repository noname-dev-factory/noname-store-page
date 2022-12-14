import "./App.css";
import Navbar from "./components/Nav/Navbar";
import { Routes, Route } from 'react-router-dom'
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<h1>Not Found mi bro</h1>} />
      </Routes>
    </div>
  );
}

export default App;