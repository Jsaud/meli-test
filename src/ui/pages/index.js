import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/organism/Header";
import Footer from "../components/organism/Footer";
import ProductDetail from "../components/organism/ProductDetail";

import Inicio from "../containers/Inicio";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;