import { useState, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const Addon = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    console.log(exist);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, cartQty: exist.cartQty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, cartQty: 1 }]);
    }
  };

  const onRemove = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    console.log(exist);
    if (exist.cartQty === 1) {
      console.log("nothing");
    } else {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, cartQty: exist.cartQty - 1 } : x
        )
      );
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const handleClick = (product) => {
    const addedToCart = () =>
      toast.success(`${product.name} Was added to your cart!`);
    setCart([...cart, product]);
    addedToCart();
  };

  const removeItem = (id) => {
    const itemRemoved = () => toast.success("Item removed from cart.");
    const newArr = cart.filter((elem) => elem.id != id);
    setCart(newArr);
    itemRemoved();
  };

  return (
    <CartContext.Provider value={{ cart, handleClick, removeItem, setCart }}>
      <ToastContainer />

      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
