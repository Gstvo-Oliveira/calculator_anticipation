import styled from "styled-components";

export const Container = styled.section`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-4);
  

  .context {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .result {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 1.0rem;
      font-style: italic;
      font-weight: 700;
      margin-bottom: 30px;
      letter-spacing: 0px;
      text-align: left;
      color: var(--blue-2);
    }
  }
`;
