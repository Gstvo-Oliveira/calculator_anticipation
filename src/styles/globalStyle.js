import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body, html{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: JetBrains Mono;
}


.App{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
}

`