import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../components/Inputs";
import { UserContext } from "../../../providers/userContext";
import { StyledButton } from "../../../styles/Buttons";
import { StyledForm } from "../../../styles/Forms";
import { registerSchema } from "./registerSchema";

export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

const FormRegister = () => {
  const { registerUser } = useContext(UserContext);
  const [loadingRegister, setLoadingRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver<iRegisterFormValues>(registerSchema),
  });

  const submit: SubmitHandler<iRegisterFormValues> = async (data) => {
    delete data.passwordConfirm;
    await registerUser(data, setLoadingRegister);
    reset();
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(submit)}>
      <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        disabled={loadingRegister}
        inputStyle={errors.name ? "defaultError" : "default"}
        inputHeight={60}
        register={register("name")}
        error={errors.name}
      />

      <Input
        id="email"
        label="Email"
        type="text"
        placeholder="Digite aqui seu email"
        disabled={loadingRegister}
        inputStyle={errors.email ? "defaultError" : "default"}
        inputHeight={60}
        register={register("email")}
        error={errors.email}
      />

      <Input
        id="password"
        type="password"
        placeholder="Senha"
        disabled={loadingRegister}
        inputStyle={errors.password ? "solidGreyError" : "solidGrey"}
        inputHeight={60}
        register={register("password")}
        error={errors.password}
      />

      <Input
        id="passwordConfirm"
        type="password"
        placeholder="Confirmar senha"
        disabled={loadingRegister}
        inputStyle={errors.passwordConfirm ? "solidGreyError" : "solidGrey"}
        inputHeight={60}
        register={register("passwordConfirm")}
        error={errors.passwordConfirm}
      />

      <StyledButton
        type="submit"
        buttonStyle="solidLightGrey"
        buttonSize="default"
        disabled={loadingRegister}
      >
        {loadingRegister ? "Cadastrando..." : "Cadastrar"}
      </StyledButton>
    </StyledForm>
  );
};

export default FormRegister;
