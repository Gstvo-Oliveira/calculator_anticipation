/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { Text, Bold, Container } from './style';

import { useContext } from 'react';
import { CalculateContext } from 'contexts/calculateContext';

const CurrencyInfo = () => {

  const { calculation } = useContext(CalculateContext)
  
  const format = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

  return (
    <Container data-testid={"box-info"}>
      {Object.keys(calculation).map((item, index) => 
        <Text key={index}>
           {item == 1 ? 
            "Amanhã"
            :
            `Em ${item} dias`}: <Bold> {calculation[item].toLocaleString("pt-BR", format)} </Bold> 
        </Text>
      )}
    </Container>
    ) 
}

export default CurrencyInfo;