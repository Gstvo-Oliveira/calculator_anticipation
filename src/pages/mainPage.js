import FormSimulation from "../components/Calculator/calculatorComponent"
import AmountReceivable from "../components/Display/displayComponent"

import { StyledHome } from "./style"

const Main = () => {

  return(
    <StyledHome>
      <FormSimulation/>
      <AmountReceivable/>
    </StyledHome>
  )
}
export default Main