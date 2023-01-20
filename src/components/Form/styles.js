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
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 14px;
    color: var(--gray-3);
  }
  input {
    width: 251px;
    height: 20px;
    padding-left: 8px;
    font-size: 14px;
    line-height: 16px;
    color: black;
    background: var(--white-1);
    border: 1px solid var(--grey-2);
    border-radius: 4px;
  }
  input:focus {
    background: var(--white-1);
    border: 1px solid var(--blue-1);
    border-radius: 4px;
  }
  p {
    font-size: 11px;
    line-height: 13px;
    color: var(--white-3);
  }
`;