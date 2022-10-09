import React from "react";
import { useParams } from "react-router-dom";
import products from "../data";

const Singleproduct = () => {
  const { productId } = useParams();

  const product = products.find((product) => product.id == productId);
  const { name, image, price } = product;

  return (
    <section key={product.id} id={product.id} className="single-product">
      <header>
        <h2>{name}</h2>
      </header>
      <img className="single-page-image" src={image} alt="" />
      <footer className="single-footer">
        <h3>${price}</h3>
        <button>Products</button>
      </footer>
    </section>
  );
};

export default Singleproduct;
