import * as yup from "yup"

export const schema = yup.object().shape({
    amount: yup
      .number("Valor precisa ser um número")
      .typeError("Obrigatório")
      .required("Campo obrigatório")
      .min(1000, "Valor mínimo de 1000"),
    installments: yup
      .number("Valor precisa ser um número")
      .typeError("Obrigatório")
      .required("Campo obrigatório")
      .max(12, "Valor máximo de 12 parcelas"),
    mdr: yup
      .number("Valor precisa ser um número")
      .typeError("Obrigatório")
      .required("Campo obrigatório")
      .min(1, "Valor mínimo de 1"),
  });
