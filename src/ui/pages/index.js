import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/organism/Header";
import Footer from "../components/organism/Footer";

import Home from "../containers/Home";
import ProductDetail from "../containers/ProductDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
