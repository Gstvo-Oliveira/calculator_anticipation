import styled from "styled-components";

export const Container = styled.section`
  width: 55%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background-color: var(--white-1);

  form {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 1.2rem;
      color: var(--grey-3);
      font-weight: 600;
      height: 37px;
    }

    .content {
      display: flex;
      flex-direction: column;
      height: 280px;
      justify-content: space-around;
    }
  }

  
`;
