
import { createContext, useState } from "react";


export const CalculateContext = createContext()

export const CalculateProvider = ({ children }) => {
  
  const [answer, setAnswer] = useState("")

  return (
    <CalculateContext.Provider value={{ setAnswer, answer }}>
      {children}
    </CalculateContext.Provider>
  )
}

