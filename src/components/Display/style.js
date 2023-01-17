import styled from "styled-components";

export const ListStyled = styled.div`
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
background-color: #D1DCE32E;
padding: 30px;
border-radius: 0 5px 5px 0;


h3{
  margin:5px 0 5px 0;
  border-bottom: 1px solid #5D9CEC;
  color: #3D75BB;
  font-style: italic;
  text-align: left;
  font-weight: 700;
  line-height: 20px;
}

ul{
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;

}

li{
  font-size: 16px;
  font-weight: 400;
  line-height: 10px;
  color: #5D9CEC;

  span{
    font-weight: bolder;
  }
}

`