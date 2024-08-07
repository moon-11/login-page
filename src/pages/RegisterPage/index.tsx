import { Link } from "react-router-dom";
import WelcomeSection from "../../components/WelcomeSection";
import { StyledBackGround } from "../../styles/StyledBackGround";
import FormRegister from "./FormRegister";
import { StyledMainRegister } from "./styles";

const RegisterPage = () => {
  return (
    <StyledBackGround>
      <StyledMainRegister>
        <WelcomeSection />
        <section>
          <div>
            <h2>Cadastro</h2>
            <Link to="/">Retornar para o login</Link>
          </div>
          <FormRegister />
        </section>
      </StyledMainRegister>
    </StyledBackGround>
  );
};

export default RegisterPage;
