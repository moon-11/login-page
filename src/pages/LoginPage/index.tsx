import { Link } from "react-router-dom";
import WelcomeSection from "../../components/WelcomeSection";
import { StyledBackGround } from "../../styles/StyledBackGround";
import FormLogin from "./FormLogin";
import { StyledMainLogin } from "./styles";

export function LoginPage() {
  return (
    <StyledBackGround>
      <StyledMainLogin>
        <WelcomeSection />
        <section>
          <h2>Login</h2>
          <FormLogin />
          <span>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </span>
          <Link to="/register">Cadastrar</Link>
        </section>
      </StyledMainLogin>
    </StyledBackGround>
  );
}

export default LoginPage;
