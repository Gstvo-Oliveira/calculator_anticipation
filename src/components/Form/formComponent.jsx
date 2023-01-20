import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Container, InputBox } from "./styles";
import { schema } from "../../services/schemaYup";
import { CalculateContext } from "../../contexts/calculateContext";

const FormCalculator = () => {
  const {
    insertCalculation
  } = useContext(CalculateContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <form onSubmit={handleSubmit(insertCalculation)}>
        <span>Simule sua Antecipação</span>
        <div className="content">

        <InputBox>
          <label>Informe o valor da venda *</label>
          <input id="amount" type="text" {...register("amount")} />
          <p>{errors.amount?.message}</p>
        </InputBox>

        <InputBox>
          <label>Em quantas parcelas? *</label>
          <input
            id="installments"
            type="number"
            {...register("installments")}
          />
          <p>{errors.installments?.message}</p>
        </InputBox>

        <InputBox>
          <label>Informe o percentual de MDR *</label>
          <input id="mdr" type="number" {...register("mdr")} />
          <p>{errors.mdr?.message}</p>
        </InputBox>

        <InputBox>
          <label>Informe os dias</label>
          <input
            id="days"
            type="text"
            placeholder="ex.: [2, 5, 8]"
            {...register("days")}
          />
          <p>{errors.days?.message}</p>
        </InputBox>
        </div>
        <input type="submit" className="calcular" />

      </form>
    </Container>
  );
}

export default FormCalculator;
