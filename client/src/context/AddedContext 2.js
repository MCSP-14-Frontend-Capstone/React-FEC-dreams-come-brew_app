import { createContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  
  faPlus,
} from "@fortawesome/free-solid-svg-icons";


const AddedContext = createContext();

export const AddedProvider = ({ children }) => {
  const [addedCart, setAddedCart] = useState(false);
  const [addedText, setAddedText] = useState("ADD TO CART");
  const changeButton = () => {
    setAddedCart(!addedCart);
  };

  const changeText =()=> {
    setAddedText("ADDED!")
  }
  return (
    <AddedContext.Provider value={{ addedCart, changeButton, addedText, changeText }}>
      {children}
    </AddedContext.Provider>
  );
};

export default AddedContext;
