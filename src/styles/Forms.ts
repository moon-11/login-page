import styled from "styled-components";

interface iStyledFormProps {
  hideBar: string;
}

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledSearchForm = styled.form<iStyledFormProps>`
  width: 100vw;
  max-width: 100%;
  margin-right: 24px;
  position: absolute;
  left: 0;
  z-index: 99;
  transition: 0.3s ease-in-out;
  display: ${({ hideBar }) => hideBar};

  @media (min-width: 500px) {
    width: 100%;
    max-width: 365px;
    position: relative;
    display: block;
    transition: 0.3s ease-in-out;
  }

  img {
    scale: 1.2;
  }

  input {
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 8px;
    padding-left: 15px;
    font-weight: 400;
    color: var(--color-grey-600);
    outline: solid 2px var(--color-grey-100);
    font-size: var(--headline);
    padding-right: 20px;

    &:focus {
      outline: solid 3px var(--color-grey-300);
    }

    &::placeholder {
      color: var(--color-grey-100);
    }
  }
`;
