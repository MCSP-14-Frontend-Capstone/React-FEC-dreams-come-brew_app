import { createContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddedContext = createContext();

export const AddedProvider = ({ children }) => {

  const [addedText, setAddedText] = useState("ADD TO CART");
 


  const changeText = () => {
    setAddedText("ADD TO CART");


    if (addedText == "REMOVE") {
      setAddedText("ADD TO CART");

    }
  };
  return (
    <AddedContext.Provider
      value={{  addedText, changeText }}
    >
      {children}
    </AddedContext.Provider>
  );
};

export default AddedContext;
