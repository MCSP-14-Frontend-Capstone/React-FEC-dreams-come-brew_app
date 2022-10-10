import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data";

const Singleproduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
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
      </footer>
    </section>
  );
};

export default Singleproduct;
