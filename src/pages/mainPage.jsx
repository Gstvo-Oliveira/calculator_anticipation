
import FormCalculator from "../components/Form/formComponent";
import Display from "../components/Display/displayComponent";
import { Container } from "./styles";

const MainPage = () => {
  
  return (
    <Container>
        <FormCalculator />
        <Display />
    </Container>
  );
}

export default MainPage;
