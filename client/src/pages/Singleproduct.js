import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data";

const Singleproduct = () => {
  const { productTarget } = useParams();
  const product = products.find((product) => product.target === productTarget);
  const { name, image, price } = product;

  return (
    <section key={product.id} id={product.id} className="single-product">
      <header>
        <h2>{name}</h2>
      </header>
      <img className="single-page-image" src={image} alt="" />
      <footer className="single-footer">
        <h4>Price: ${price}</h4>
        <Link to="/products">
          <button>Products</button>
          
        </Link>
        <Link to="/Cart">
          <button>Add to Cart</button>
        
        </Link>
      </footer>
    </section>
  );
};

export default Singleproduct;
