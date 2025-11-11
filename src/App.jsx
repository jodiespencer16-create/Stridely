import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart/Cart";

const App = () => (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;