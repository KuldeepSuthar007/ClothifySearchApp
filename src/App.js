import './App.css';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fashion-store" element={<Product />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
