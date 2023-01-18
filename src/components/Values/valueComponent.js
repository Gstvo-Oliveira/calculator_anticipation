import { Text, Bold, Container } from './style';
import { currencyFormat, labelFormatter } from './utils';

const CurrencyInfo = ({ days, value }) => {

  return (
    <Container data-testid={"box-info"}>
      <Text>{labelFormatter(days)}: <Bold>{currencyFormat(value)}</Bold></Text>
    </Container>
  );
}

export default CurrencyInfo;