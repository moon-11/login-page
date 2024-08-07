/* eslint-disable default-case */
import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonSize: string;
  buttonStyle: string;
  buttonPosition?: string;
}
export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 8px;
  transition: 0.4s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding: 0 1rem;
          height: 60px;
          width: 100%;
          font-size: var(--headline);
          font-weight: 600;
        `;
      case "medium":
        return css`
          padding: 0 1.2rem;
          height: 40px;
          font-size: var(--body);
          font-weight: 600;
        `;
      case "small":
        return css`
          padding: 0;
          width: 31px;
          height: 100%;
          font-size: var(--heading-2);
          font-weight: 400;
          text-align: center;
        `;
    }
  }}

  ${({ buttonPosition }) => {
    switch (buttonPosition) {
      case "inputBt":
        return css`
          position: absolute;
          top: 10px;
          right: 10px;
        `;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "solidGreen":
        return css`
          background: var(--color-primary);
          color: var(--color-white);

          &:hover {
            background: var(--color-primary-50);
          }
        `;
      case "solidLightGrey":
        return css`
          background-color: var(--color-grey-0);
          color: var(--color-grey-300);

          &:hover {
            background: var(--color-grey-200);
            color: var(--color-white);
          }
        `;

      case "solidLightGrey-100":
        return css`
          background-color: var(--color-grey-100);
          color: var(--color-grey-300);

          &:hover {
            background: var(--color-grey-200);
            color: var(--color-white);
          }
        `;
      case "greyDefault":
        return css`
          background: var(--color-grey-200);
          color: var(--color-white);

          &:hover {
            background-color: var(--color-grey-300);
            color: var(--color-white);
          }
        `;
      case "greyLight":
        return css`
          background: var(--color-grey-100);
          color: var(--color-secondary);

          border-radius: 0;
          font-size: var(--heading-2);

          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            filter: brightness(97%);
          }
        `;
    }
  }}
`;
