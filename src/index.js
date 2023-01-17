import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CalculateProvider } from "./contexts/CalculateContext";
import { GlobalStyle } from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalculateProvider>
      <GlobalStyle />
      <App />
    </CalculateProvider>
  </React.StrictMode>
);
