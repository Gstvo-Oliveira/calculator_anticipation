import { Container, Context } from "./styles";

const Input = ({ label, register, name, error, span, ...rest }) => {
  return (
    <Container>
      <section>
        {label} {!!error && <span className="error">{error}</span>}
      
      <Context isError={!!error}>
          <input  {...register(name)} {...rest} />
      </Context>
        <span className="max">{span}</span>
        </section>
    </Container>
  );
}

export default Input;
