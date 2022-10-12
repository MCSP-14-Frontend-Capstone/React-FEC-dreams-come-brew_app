import React from "react";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Nav.css";
import "./About.css";
import "./Contact.css";
import "./Deals.css"
import "./Products.css"
import "./Cartanditem.css"
import "./Login.css"

import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Singleproduct from "./pages/Singleproduct";
import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<Singleproduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
