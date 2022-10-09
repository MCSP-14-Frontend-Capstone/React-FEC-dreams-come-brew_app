import React, { Fragment } from "react";
import products from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h2>Items are selling fast, hurry!</h2>

      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id} id={product.id}>
              <h3>{product.name}</h3>
              <img className="item-image" src={product.image} alt="" />
              <div>
                <p className="price-description">Price: ${product.price}</p>
                <Link className="link" to={`/products/${product.id}`}>
                  more info
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Products;
