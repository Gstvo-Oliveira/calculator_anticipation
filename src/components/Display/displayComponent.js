/* eslint-disable eqeqeq */
import { useContext } from "react";
import { CalculateContext } from "../../contexts/CalculateContext";

import { ListStyled } from "./style";

const AmountReceivable = () => {
  const { answer } = useContext(CalculateContext);

  return (
    <ListStyled>
      <h3>Você Receberá:</h3>
      <ul>
        {Object.keys(answer).map((item, index) => (
          <li key={index}>
            {item == 1 ? "- Amanhã" : `- Em ${item} dias`}: R${" "}
            {answer[item].toLocaleString("pt-BR") + ",00"}
          </li>
        ))}
      </ul>
    </ListStyled>
  );
};
export default AmountReceivable;
