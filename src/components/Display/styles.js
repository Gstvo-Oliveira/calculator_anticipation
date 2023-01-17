import styled from "styled-components";

export const Container = styled.section`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-4);
  

  .context {
    width: 70%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .result {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 1.2rem;
      font-style: italic;
      font-weight: 700;
      letter-spacing: 0px;
      text-align: left;
      color: var(--blue-2);
    }

    .line {
      height: 1px;
      width: 180px;
      border-bottom: 2px solid var(--blue-1);
      opacity: 0.3;
    }

    div {
      display: flex;
      flex-direction: column;

      .box {
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: row;

        .days {
          font-family: "Source Sans Pro", sans-serif;
          font-size: 1.1rem;
          font-style: italic;
          font-weight: 400;
          line-height: 46px;
          letter-spacing: 0px;
          text-align: left;
          color: var(--blue-1);
        }

        .total {
          font-family: "Source Sans Pro", sans-serif;
          font-size: 1.1rem;
          font-style: italic;
          font-weight: 700;
          line-height: 46px;
          letter-spacing: 0px;
          text-align: left;

          color: var(--blue-1);
        }
      }
    }
  }
`;
