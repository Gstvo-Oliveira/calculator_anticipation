import CurrencyInfo from "components/Values/valueComponent";
import { Container } from "./styles";

const Display = () => {

  return (
    <Container data-testid= 'currency-info'>
      <div className="context">
        <span className="result">VOCÊ RECEBERÁ:</span>
        <div className="context">
          <CurrencyInfo/>
        </div>
      </div>
    </Container>
  );
}

export default Display;
