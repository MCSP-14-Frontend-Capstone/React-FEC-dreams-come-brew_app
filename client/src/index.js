import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import { AddedProvider } from "./context/AddedContext";
import { SearchProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvider>

    <AddedProvider>
      <CartProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </CartProvider>
    </AddedProvider>
    </SearchProvider>
  </React.StrictMode>
);
// When we would usually render the main react component into our root element.