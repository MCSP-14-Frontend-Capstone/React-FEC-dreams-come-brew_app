import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
//import products from "../data";
import CartContext from "../context/CartContext";
import RandomContext from "../context/RandomContext";
import randomFacts from "../randomFacts";
import SearchBar from "../components/SearchBar";
const Singleproduct = () => {
  const { productTarget } = useParams();
  
  // const { name, image, price, detail, description, pic1, pic2, pic3, pic4 } =
  //   product;
  //useContext for the cartcontext
  const { handleClick, cart, Addon, products } = useContext(CartContext);
  const { random, setRandom } = useContext(RandomContext)
  const product = products.find((product) => product.target === productTarget);
  //handleObj changes the useContext value to be added to the cart
  const handleObj = (e) => {
    const id = e.target.id;
    console.log(id);
    const found = cart.find((elem) => elem.product_id === product.product_id)
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
        <div key={product.product_id} id={product.product_id} className="main-single">
          <img className="single-image" src={product.image} alt="" />
          <div className="single-beside">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.detail}</p>
            <div className="helper-images">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
            <div className="single-btns">
              <Link to="/Cart">
                <button className="single-add-to-cart" onClick={handleObj}  id={product.product_id}>Add to Cart</button>
              </Link>
              <Link to="/hotItems">
                <button className="single-back-to-products">Hot Items</button>
              </Link>
              <Link to="/products">
                <button className="single-back-to-products" >All Products</button>
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
