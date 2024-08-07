import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./styles";

export interface iInputProps {
  id: string;
  label?: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
  disabled?: boolean;
  inputStyle: string;
  inputHeight: number;
  error?: FieldError;
}

const Input = ({
  id,
  label,
  type,
  placeholder,
  disabled,
  inputStyle,
  error,
  inputHeight,
  register,
}: iInputProps) => {
  return (
    <StyledFieldset inputHeight={inputHeight} inputStyle={inputStyle}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
      {error && <span aria-errormessage="error">{error.message}</span>}
    </StyledFieldset>
  );
};

export default Input;
