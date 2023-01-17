import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Container } from "./styles";
import Input from "../Input/inputComponent";
import { schema } from "../../services/schemaYup";
import { CalculateContext } from "../../contexts/calculateContext";

function FormCalculator() {
  const {
    insertCalculation,
    delay,
    errorOff,
    timeout,
    testErrorOff,
    testTimeout,
    testDelay,
  } = useContext(CalculateContext);

  
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitCalculation = (object) => {
    if (delay) {
      testDelay(object);
      setValue("amount", "");
      setValue("installments", "");
      setValue("mdr", "");
    } else if (errorOff) {
      testErrorOff(object);
      setValue("amount", "");
      setValue("installments", "");
      setValue("mdr", "");
    } else if (timeout) {
      testTimeout(object);
      setValue("amount", "");
      setValue("installments", "");
      setValue("mdr", "");
    } else {
      insertCalculation(object);
      setValue("amount", "");
      setValue("installments", "");
      setValue("mdr", "");
    }
  };

  return (
    <Container>
      <form onChange={handleSubmit(onSubmitCalculation)}>
        <span>Simule sua Antecipação</span>
        <div className="content">
          <Input
            label="Informe o valor da venda *"
            placeholder="Exemplo: R$ 3000,00"
            register={register}
            name="amount"
            error={errors.amount?.message}
          />
          <Input
            label="Em quantas parcelas *"
            placeholder="Exemplo: 4"
            register={register}
            name="installments"
            error={errors.installments?.message}
            span="Máximo de 12 parcelas"
          />

          <Input
            label="Informe o percentual de MDR *"
            placeholder="Exemplo: 6%"
            register={register}
            name="mdr"
            error={errors.mdr?.message}
          />
        </div>
      </form>
    </Container>
  );
}

export default FormCalculator;
