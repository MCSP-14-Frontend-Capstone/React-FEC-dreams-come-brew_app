import axios from "axios";
import React, { useState, useEffect } from "react";
import DealsCompo from "../components/DealsCompo";
import HomeCard from "../components/HomeCard.js";
import ProductsItem from "../components/ProductsItem";
import SearchBar from "../components/SearchBar";

const Index = () => {
  //This is the homepage
  const [items, setItems] = useState([]); // from data.js

  //API call to get products data
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(
        "https://dreamcomebrewserver.onrender.com/products"
      );
      setItems(data);
    };
    getProducts();
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        <div className="twists">
          <div className="twist-div">
            <img
              className="top-div"
              src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/home-page/Coffee-Beans.jpg"
              alt=""
            />
            <div className="top-div text">
              <h3>Our Mission</h3>
              <hr />
              <p>
                Since their opening in 2022 Dreams Come Brew has been driven by
                a clear commitment to quality coffee — with over half the coffee
                they source home grown and all of it cupped and curated by
                Students of MCSP-14 Since their opening in 2022 Dreams Come Brew
                has been driven by a clear commitment to quality coffee — with
                over half the coffee they source home grown and all of it cupped
                and curated by Students of MCSP-14
              </p>
            </div>
          </div>
          <div className="twist-div ">
            <div className="bottom-div text">
              <h3>Pouring a new narrative </h3>
              <hr />
              <p>
                Named for a desire to change the picture of what comes to mind
                when people think of specialty coffee, Dreams come Brew is as
                committed to rewriting that narrative as it is to reflecting the
                history and culture of its Fort Hood Texas Community. Named for
                a desire to change the picture of what comes to mind when people
                think of specialty coffee, Dreams come Brew is as committed to
                rewriting that narrative as it is to reflecting the history and
                culture of its Fort Hood Texas Community.
              </p>
            </div>
            <img
              className="bottom-div"
              src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/home-page/Coffee-Heart.jpg"
              alt=""
            />
          </div>
        </div>
        <SearchBar />
        <h2 className="above-pics">Enjoy at home,</h2>
        <div className="home-img-box">
          <img
            className="home-img home-img-one"
            src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/home-page/Coffee-hands.jpg"
            alt=""
          />
          <img
            className="home-img home-img-two"
            src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/home-page/Coffee-Pour.jpg"
            alt=""
          />
          <img
            className="home-img home-img-three"
            src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/home-page/Expresso-Heart.jpg"
            alt=""
          />
          <img
            className="home-img home-img-four"
            src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/home-page/Coffee-Sip.jpg"
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
            src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/CookiesNDreams-Front_1024x1024%402x.jpg"
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
