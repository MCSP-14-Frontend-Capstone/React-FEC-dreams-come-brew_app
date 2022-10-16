import { createContext, useState } from "react";

const RandomContext = createContext()

export const RandomProvider =({children}) => {

  const [random, setRandom] = useState("")
   

 

  return (
    <RandomContext.Provider
    value={{random, setRandom}}>
      {children}
    </RandomContext.Provider>
  )
}

export default RandomContext