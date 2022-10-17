import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data";
import CartContext from "../context/CartContext";
import RandomContext from "../context/RandomContext";
import randomFacts from "../randomFacts";
import SearchBar from "../components/SearchBar";
const Singleproduct = () => {
  const { productTarget } = useParams();
  const product = products.find((product) => product.target === productTarget);
  const { name, image, price, detail, description, pic1, pic2, pic3, pic4 } =
    product;
  //useContext for the cartcontext
  const { handleClick, cart, Addon } = useContext(CartContext);
  const { random, setRandom } = useContext(RandomContext)
  //handleObj changes the useContext value to be added to the cart
  const handleObj = (e) => {
    const id = e.target.id;
    const found = cart.find((elem) => elem.id === product.id)
    if (found) {
      console.log(found)
      Addon(found)
    } else {
      console.log('elese')
      handleClick(product);
    }
  }
  const generateRandom = () => {
    const oneFact = randomFacts[Math.floor(Math.random() * randomFacts.length)]
    setRandom(oneFact)
    console.log(oneFact)
  }

  return (
    <>
      {/* <SearchBar /> */}
      <div className="space">
        <div key={product.id} id={product.id} className="main-single">
          <img className="single-image" src={image} alt="" />
          <div className="single-beside">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{detail}</p>
            <div className="helper-images">
              <img src={pic1} alt="" />
              <img src={pic2} alt="" />
              <img src={pic3} alt="" />
              <img src={pic4} alt="" />
            </div>
            <div className="single-btns">
              <Link to="/Cart">
                <button className="single-add-to-cart" onClick={handleObj}>Add to Cart</button>
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
        <div className="fix-random">
          <div className="random-div">
            <h3>Try out our random coffee fact generator that'll wake you up!</h3>

            <p>  <hr />{random}</p>
          </div>
          <button className="random-button" onClick={generateRandom}>Get Fact</button>
        </div>
      </div>
    </>
  );
};

export default Singleproduct;
