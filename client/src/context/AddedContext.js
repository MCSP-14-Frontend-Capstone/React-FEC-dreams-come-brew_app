import { createContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddedContext = createContext();

export const AddedProvider = ({ children }) => {
  const [addedCart, setAddedCart] = useState(false);
  const [addedText, setAddedText] = useState("ADD TO CART");
  const changeButton = (id) => {
    setAddedCart(!addedCart);
  };


  const removeTheItem = (id) => {
   

  }
  const changeText = (id) => {
    setAddedText("REMOVE");
    removeTheItem(id)

    if (addedText == "REMOVE") {
      setAddedText("ADD TO CART");

    }
  };
  return (
    <AddedContext.Provider
      value={{ addedCart, changeButton, addedText, changeText }}
    >
      {children}
    </AddedContext.Provider>
  );
};

export default AddedContext;
