import styled from "styled-components";

export const StyledSection = styled.section`
width: 50%;
display:flex;
flex-direction: column;
justify-content: center;
padding: 40px;
`


export const StyledForm = styled.form`

display:flex;
flex-direction: column;
gap: 22px;

h2{
  margin: 0;
}

label{
  display: flex;
  flex-direction: column;
  font-size:12px;
  line-height:15px;
  font-weight:600;
}

input{
  width: 100%;
  height:30px;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #DDE6E9;
  border-radius: 4px;
}

span{
  font-size: 10px;
  color: #CECECE;

}

button{
  width: 100px;
  height: 30px;
  justify-content: center;

  border-radius: 4px;
  border: 1px solid #DDE6E9;

  cursor: pointer;
  background-color: transparent;
  font-size: 15px;
  :hover{
    background-color: #E2E2E2;
  }
}
`