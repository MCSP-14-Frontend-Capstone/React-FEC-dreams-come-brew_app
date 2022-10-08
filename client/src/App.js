import SharedLayout from "./components/SharedLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Index from "./pages/Index";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Index />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/login" element={<Login />}/>
           
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
