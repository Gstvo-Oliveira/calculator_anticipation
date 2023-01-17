import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CalculatorProvider } from "./contexts/calculateContext";
import { GlobalStyle } from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  
    <CalculatorProvider>
        <GlobalStyle/>
        <App />
      </CalculatorProvider>
    
  </React.StrictMode>
);
