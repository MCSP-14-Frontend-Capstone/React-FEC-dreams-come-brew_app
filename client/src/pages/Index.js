import React, { useState } from "react";
import DealsCompo from "../components/DealsCompo";
import products from "../data";
import HomeCard from "../components/HomeCard.js";
import ProductsItem from "../components/ProductsItem";
import SearchBar from "../components/SearchBar";

const Index = () => {
  //This is the homepage
  const [items, setItems] = useState(products); // from data.js

  return (
    <div className="home">
      <div className="home_container">
        <div className="twists">
          <div className="twist-div">
          <img className="top-div" src="https://img.freepik.com/free-photo/coffee-beans_23-2148093838.jpg?w=2000&t=st=1666049817~exp=1666050417~hmac=9207df91f8ed8246e2bab9ff71a87a7dcd38688d657f9a2a28cacbf212a194a6" alt="" />
            <div className="top-div text">
              <h3 >Our Mission</h3>
              <hr />
              <p>Since their opening in 2022 Dreams Come Brew has been driven by a clear commitment to quality coffee — with over half the coffee they source home grown and all of it cupped and curated by Students of MCSP-14
              Since their opening in 2022 Dreams Come Brew has been driven by a clear commitment to quality coffee — with over half the coffee they source home grown and all of it cupped and curated by Students of MCSP-14
              </p>
            </div>
          </div>
          <div className="twist-div ">
            <div className="bottom-div text">
              <h3>Pouring a new narrative </h3>
              <hr />
            <p>Named for a desire to change the picture of what comes to mind when people think of specialty coffee, Dreams come Brew is as committed to rewriting that narrative as it is to reflecting the history and culture of its Fort Hood Texas Community.
            Named for a desire to change the picture of what comes to mind when people think of specialty coffee, Dreams come Brew is as committed to rewriting that narrative as it is to reflecting the history and culture of its Fort Hood Texas Community.
            
            </p>
            </div>
           <img className="bottom-div" src="https://img.freepik.com/free-photo/coffee-beans-heart-form_23-2147896435.jpg?w=2000&t=st=1666049946~exp=1666050546~hmac=32fc28baec9aa6934ece03cb7715cf66f8a4bd3ca7e1bb3d7af69062ebc96a07" alt="" />

          </div>
        </div>
        <SearchBar />
        <h2 className="above-pics">Enjoy at home,</h2>
        <div className="home-img-box">
          <img
            className="home-img home-img-one"
            src="https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
            alt=""
          />
          <img
            className="home-img home-img-two"
            src="https://images.unsplash.com/photo-1509047319667-c1a8de3000c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt=""
          />
          <img
            className="home-img home-img-three"
            src="https://images.unsplash.com/photo-1512153371649-ebbe07fc197d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt=""
          />
          <img
            className="home-img home-img-four"
            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
            alt=""
          />
        </div>
        <h2 className="below-pics">...and on the go!</h2>
        <div className="container">
          <div className="beside-image">
            <h2 className="best-seller-desc">This month's Best Seller</h2>
            <div className="circles">
              <div className="one-circ">Great Taste</div>
              <div className="one-circ">Fat Burner</div>
              <div className="one-circ">Low Calories</div>
              <div className="one-circ">Ready To Go</div>
              <div className="one-circ last">Smells Great</div>
              <div className="one-circ last">Do Enjoy!</div>
            </div>
          </div>

          <img
            className="coffee-image"
            src="https://cdn.shopify.com/s/files/1/1475/5488/products/CookiesNDreams-Front_1024x1024@2x.jpg?v=1569419317"
            alt=""
          />
        </div>
        <h1 className="main-header">Deals on top Brands</h1>
        <div className="home_row">
          <ProductsItem items={items} />
        </div>
      </div>
      <div className="homeBody">
        <HomeCard items={items} />
      </div>
      <DealsCompo items={items} />
    </div>
  );
};
export default Index;
