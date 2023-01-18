import styled from "styled-components";

export const Container = styled.div`
font-size: 12px;

  section {
    opacity: 0.7;
    font-family: "SourceSansPro", sans-serif;
    font-size: 12px;
    text-align: left;
    
  }

  .error {
    font-size: 8px;
    color: var(--red);
    font-weight: 700;
  }

  .max {
    height: 25px;
    font-size: 10px;
    font-weight: 700;
  }

  

  
`;

export const Context = styled.section`
  input {
    height: 20px;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--grey-2);
  }
`;
