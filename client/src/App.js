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
import "./HomeIndex.css"
import './Summary.css'
import "./footer.css"


import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Singleproduct from "./pages/Singleproduct";
import Error from "./pages/Error";
import CheckoutPage from "./pages/Cart/CheckoutPage";
import Summary from "./pages/Cart/Summary";
import HotItems from "./pages/HotItem";
import footer from "./components/footer";

const App = () => {

  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}> 
          {/* A path is just the route to the individual page  */}
            <Route index element={<Index />} />
            {/* Element is the component being rendener*/}
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productTarget" element={<Singleproduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
            <Route path="/hotItems" element={<HotItems />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
