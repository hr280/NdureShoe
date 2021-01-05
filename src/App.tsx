import React from "react";
import "./App.css";
// components
import ProductDis from "./components/prouduct/index";
import Cart from "./components/cart/index";
import { ProductItem } from "./store/state";
// router
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import Home from "./components/home";

function App() {
  const products = useSelector((state: ProductItem[]) => state);
  let totalQ = products.filter((product) => product.added).length;
  return (
    <Router>
      <div className="storeNav">
        <nav id="navbar" className="">
          <div className="nav-wrapper">
            <div className="logo">
              <a href="#home">NDURE</a>
            </div>
            <ul id="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/prouduct">Prouducts</Link>
              </li>
              <li>
                <Link to="/cart">Cart({totalQ})</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prouduct" element={<ProductDis />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
