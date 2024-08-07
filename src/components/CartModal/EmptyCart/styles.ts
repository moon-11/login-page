import styled from "styled-components";

export const StyledEmptyCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h3 {
    font-size: var(--heading-3);
    font-weight: 700;
    color: var(--color-grey-600);
    line-height: 24px;
    margin-top: 56px;
  }

  p {
    font-size: var(--heading-4);
    font-weight: 400;
    color: var(--color-grey-300);
    line-height: 24px;
  }
`;
