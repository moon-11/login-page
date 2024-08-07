import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import logo from "../../assets/logo.svg";
import lightSeach from "../../assets/search.svg";
import { useOutClickForm } from "../../hooks";
import { CartContext } from "../../providers/CartContext";
import { UserContext } from "../../providers/userContext";
import { StyledButton } from "../../styles/Buttons";
import { StyledSearchForm } from "../../styles/Forms";
import { StyledHeader } from "./styles";

export interface iSearchValues {
  searchProduct: string;
}

const Header = () => {
  const { userLogout, filterProducts } = useContext(UserContext);
  const { openCartModal, totalCartItems } = useContext(CartContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [mobileSearchBar, setMobileSearchBar] = useState(false);
  const searchFormRef = useOutClickForm(() => setShowSearchBar(false));

  document.body.onresize = () => {
    if (document.body.clientWidth < 500) {
      setMobileSearchBar(true);
    } else {
      setMobileSearchBar(false);
    }
  };

  const { register, handleSubmit } = useForm<iSearchValues>({
    mode: "onBlur",
  });

  const submit: SubmitHandler<iSearchValues> = (data) => {
    filterProducts(data);
  };

  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo" />
        <div>
          {mobileSearchBar ? (
            <StyledSearchForm
              ref={searchFormRef}
              hideBar={showSearchBar ? "block" : "none"}
              noValidate
              onSubmit={handleSubmit(submit)}
            >
              <input
                id="searchProduct"
                type="text"
                placeholder="Digitar Pesquisa"
                {...register("searchProduct")}
              />
              <StyledButton
                buttonSize={"medium"}
                buttonStyle="solidGreen"
                buttonPosition="inputBt"
              >
                <img src={lightSeach} alt="search button" />
              </StyledButton>
            </StyledSearchForm>
          ) : (
            <StyledSearchForm
              hideBar="none"
              noValidate
              onSubmit={handleSubmit(submit)}
            >
              <input
                id="searchProduct"
                type="text"
                placeholder="Digitar Pesquisa"
                {...register("searchProduct")}
              />
              <StyledButton
                buttonSize={"medium"}
                buttonStyle="solidGreen"
                buttonPosition="inputBt"
              >
                <img src={lightSeach} alt="search button" />
              </StyledButton>
            </StyledSearchForm>
          )}

          <nav>
            <button onClick={() => setShowSearchBar(true)}></button>
            <button onClick={openCartModal}>
              <span>{totalCartItems}</span>
            </button>
            <button onClick={userLogout}></button>
          </nav>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
