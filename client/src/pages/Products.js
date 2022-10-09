import React, { Fragment } from "react";
import products from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h2>Items are selling fast, hurry!</h2>

      <div className="products">
        {products.map((item) => {
          return (
            <article key={item.id} id={item.id}>
              <h3>{item.name}</h3>
              <img className="item-image" src={item.image} alt="" />
              <div>
                <p className="price-description">Price: ${item.price}</p>
                <Link to={`/products/${item.id}`}>more info</Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Products;
