import styled, { css } from "styled-components";

interface iStyledInputProps {
  inputStyle: string;
  inputHeight: number;
}

export const StyledFieldset = styled.fieldset<iStyledInputProps>`
  width: 100%;
  display: flex;
  height: ${({ inputHeight }) => inputHeight * 1.4 + "px"};
  flex-direction: column;
  border: none;
  position: relative;
  padding: 0;

  label {
    display: block;
    width: max-content;
    padding: 0 5px;
    height: 16px;
    font-size: var(--caption);
    font-weight: 500;
    color: var(--color-grey-300);
    text-align: center;
    background-color: var(--color-white);
    position: absolute;
    top: -9px;
    left: 12px;
  }

  input {
    height: ${({ inputHeight }) => inputHeight + "px"};
    width: 100%;
    border-radius: 8px;
    border: none;
    padding-left: 12px;
    font-size: var(--headline);
    font-weight: 400;
    color: var(--color-grey-600);

    ${({ inputStyle }) => {
      switch (inputStyle) {
        case "default":
          return css`
            outline: solid 2px var(--color-grey-300);

            &:focus {
              outline: solid 3px var(--color-primary);
            }
          `;

        case "defaultError":
          return css`
            outline: solid 2px var(--color-negative);

            &:focus {
              outline: solid 3px var(--color-negative);
            }
          `;

        case "solidGrey":
          return css`
            outline: solid 2px var(--color-grey-0);
            background-color: var(--color-grey-0);

            &:focus {
              filter: brightness(0.98);
            }
          `;

        case "solidGreyError":
          return css`
            outline: solid 2px var(--color-negative);
            background-color: var(--color-grey-0);

            &:focus {
              filter: brightness(0.98);
              outline: solid 3px var(--color-negative);
            }
          `;
      }
    }}

    &::placeholder {
      color: var(--color-grey-300);
    }
  }

  span {
    color: red;
    font-size: var(--body);
    line-height: 0.875rem;
    margin-top: 2px;
    display: block;
    height: 13px;
    margin-top: 6px;
  }
`;
