import { createGlobalStyle } from "styled-components";

export  const GlobalStyle = createGlobalStyle`
body, html{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-0);
  }
 
    :root {
        --red: #C7574F; 
        --black: #000000;
        --white-1: #ffffff;
        --white-2: #F2F2F2;
        --white-3:  #CECECE;
        --grey-0: #F5F7FA;
        --grey-1: #D1DCE3;
        --grey-2: #DDE6E9;
        --grey-3: #656565;
        --blue-1: #5D9CEC;
        --blue-2: #3D75BB;

;
    }
    

    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }

    
    

`;
