import React from "react";
import { useParams, Link } from "react-router-dom"; // use params returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>
import products from "../data";

const Singleproduct = () => {
  const { productTarget } = useParams();
  const product = products.find((product) => product.target === productTarget);  //find is method 
  const { name, image, price, detail, description,pic1,pic2,pic3,pic4 } = product;

  return (
    <section key={product.id} id={product.id} className="single-product-page">
      <div className="main-single">
        <div className="single-product">
          <header></header>
          <img className="single-page-image" src={image} alt="" />
            </div>
          <div className="side-piece">
           
     
                <h2 className="single-title">{name}</h2>
                <p className="single-description">{description}</p>
                <section className="single-detail">
                  {detail}
                </section>
            
                  <div className="helper-images">
                    <img className="single-helper" src={pic1} alt="" />
                    <img className="single-helper" src={pic2} alt="" />
                    <img className="single-helper" src={pic3} alt="" />
                    <img className="single-helper" src={pic4} alt="" />

                  </div>
            
            <div className="single-btns">
              <Link to="/Cart">
                <button className="single-add-to-cart">Add to Cart</button>
              </Link>
              <Link to="/hotItems">
                  <button className="single-back-to-products">Hot Items</button>
                </Link>
                <Link to="/products">
                  <button className="single-back-to-products">All Products</button>
                </Link>
            </div>
          </div>
       
      </div>
    </section>
  );
};

export default Singleproduct;
