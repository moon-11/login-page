import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../components/Inputs";
import { UserContext } from "../../../providers/userContext";
import { StyledButton } from "../../../styles/Buttons";
import { StyledForm } from "../../../styles/Forms";
import { loginSchema } from "./loginSchema";

export interface iLoginFormValues {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { userLogin } = useContext(UserContext);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data, setLoadingLogin);
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(submit)}>
      <Input
        id="email"
        label="Email"
        type="text"
        placeholder="Digite aqui seu email"
        disabled={loadingLogin}
        inputStyle={errors.email ? "defaultError" : "default"}
        inputHeight={60}
        register={register("email")}
        error={errors.email}
      />

      <Input
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        disabled={loadingLogin}
        inputStyle={errors.password ? "defaultError" : "default"}
        inputHeight={60}
        register={register("password")}
        error={errors.password}
      />

      <StyledButton
        type="submit"
        buttonStyle="solidGreen"
        buttonSize="default"
        disabled={loadingLogin}
      >
        {loadingLogin ? "Logando..." : "Logar"}
      </StyledButton>
    </StyledForm>
  );
};

export default FormLogin;
