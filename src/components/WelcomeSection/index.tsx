import { StyledWelcomeSection } from "./styles";
import logo from "../../assets/logo.svg";
import bag from "../../assets/bag-img.svg";
import dots from "../../assets/dots-img.svg";

const WelcomeSection = () => {
  return (
    <StyledWelcomeSection>
      <img src={logo} alt="logo" />
      <div>
        <div>
          <img src={bag} alt="bag" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores</strong> ingredientes.
        </p>
      </div>
      <img src={dots} alt="dots" />
    </StyledWelcomeSection>
  );
};

export default WelcomeSection;
