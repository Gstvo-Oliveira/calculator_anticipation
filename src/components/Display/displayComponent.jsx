import CurrencyInfo from "components/Values/valueComponent";
import { useContext } from "react";
import { CalculateContext } from "../../contexts/calculateContext";
import { Container } from "./styles";

const Display = () => {
  const { calculation } = useContext(CalculateContext);

  return (
    <Container data-testid= 'currency-info'>
      <div className="context">
        <span className="result">VOCÊ RECEBERÁ:</span>
        <span className="line"></span>
        <div>
          <CurrencyInfo days={1} value={calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[1]}`} />
          <CurrencyInfo days={15} value={calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[15]}`} />
          <CurrencyInfo days={30} value={calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[30]}`} />
          <CurrencyInfo days={90} value={calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[90]}`}/>
          {/* <div data-testid= 'box-info' className="box">
            <span className="days">Amanhã:</span>
            <span className="total">
              {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[1]}`}
            </span>
          </div>
          <div data-testid= 'box-info' className="box">
            <span className="days">Em 15 dias:</span>
            <span className="total">
              {calculation.length === 0
                ? "R$ 0,00"
                : `R$ ${calculation[15]},00`}
            </span>
          </div>
          <div data-testid= 'box-info' className="box">
            <span className="days">Em 30 dias:</span>
            <span className="total">
              {calculation.length === 0
                ? "R$ 0,00"
                : `R$ ${calculation[30]},00`}
            </span>
          </div>
          <div data-testid= 'box-info' className="box">
            <span className="days">Em 90 dias:</span>
            <span className="total">
              {calculation.length === 0
                ? "R$ 0,00"
                : `R$ ${calculation[90]},00`}
            </span>
          </div> */}
        </div>
      </div>
    </Container>
  );
}

export default Display;
