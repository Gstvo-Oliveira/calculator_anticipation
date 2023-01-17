import styled from "styled-components";


export const StyledForm = styled.form`

display:flex;
flex-direction: column;
justify-content: center;
padding: 40px;
gap: 20px;

h2{
  margin: 0;
}

label{
  display: flex;
  flex-direction: column;
  font-size:10px;
  line-height:20px;
  font-weight:600;
}

input{
  width: 100%;
  height:20px;
  justify-content: center;
}

input::placeholder{
  font-size: 10px;
}

button{
  width: 100px;
  justify-content: center;

  cursor: pointer;
  background-color: transparent;
  font-size: 15px;
  :hover{
    background-color: #e2e2e2;
  }
}
`