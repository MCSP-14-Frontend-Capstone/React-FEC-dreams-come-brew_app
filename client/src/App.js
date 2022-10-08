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
            <Route index element={<About />}/>
            <Route index element={<Products />}/>
            <Route index element={<Contact />}/>
            <Route index element={<Cart />}/>
            <Route index element={<Login />}/>
           
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
