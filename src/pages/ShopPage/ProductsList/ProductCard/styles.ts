import styled from "styled-components";

export const StyledProduct = styled.li`
  width: 300px;
  max-width: 300px;
  min-width: 300px;
  height: 350px;
  max-height: max-content;
  background: var(--color-white);
  border: 2px solid var(--color-grey-100);
  border-radius: 5px;

  &:hover {
    scale: 1.02;
    border: 2px solid var(--color-primary);
  }

  div {
    height: 150px;
    width: 100%;
    background: var(--color-grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 28px;
    overflow: hidden;

    img {
      margin-bottom: 10px;
      scale: 85%;
      width: fit-content;
      margin-bottom: 15px;

      &:hover {
        scale: 110%;
      }
      transition: 0.4s ease-in-out;
    }
  }

  h3 {
    margin: 0 0 14px 18px;
    font-size: var(--heading-3);
    font-weight: 700;
    color: var(--color-grey-600);
  }

  span {
    margin-left: 18px;
    font-size: var(--caption);
    font-weight: 400;
    color: var(--color-grey-300);
  }

  p {
    margin: 18px 0 18px 18px;
    font-size: var(--body);
    font-weight: 600;
    color: var(--color-primary);
  }

  button {
    margin: 0 0 48px 18px;
  }
`;
