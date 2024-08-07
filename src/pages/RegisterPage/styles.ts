import styled from "styled-components";

export const StyledMainRegister = styled.main`
  width: 92%;
  max-width: 1024px;
  height: max-content;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  gap: 16px;

  @media (min-width: 450px) {
    align-items: center;
  }

  @media (min-width: 740px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 86px 0;
  }

  & > section:last-child {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 22px 18px 26px;
    border-radius: 5px;
    border: 2px solid var(--color-grey-0);

    @media (min-width: 450px) {
      padding: 28px 24px 28px;
    }

    & > div:first-child {
      width: 100%;
      height: max-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    h2 {
      font-size: var(--heading-3);
      font-weight: 700;
      color: var(--color-grey-600);
    }

    a {
      display: block;
      text-decoration: underline;
      font-size: var(--body);
      font-weight: 500;
      color: var(--color-grey-300);

      &:hover {
        color: var(--color-grey-600);
      }
    }
  }
`;
