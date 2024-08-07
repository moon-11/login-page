import styled from "styled-components";

export const StyledMainLogin = styled.main`
  width: 92%;
  max-width: 940px;
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
    flex-direction: row-reverse;
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

    h2 {
      font-size: var(--heading-3);
      font-weight: 700;
      color: var(--color-grey-600);
      margin-bottom: 16px;
    }

    & > span {
      display: block;
      padding: 0 16px;
      font-size: var(--body);
      font-weight: 400;
      text-align: center;
      color: var(--color-grey-250);
      margin-bottom: 4px;

      @media (min-width: 400px) {
        padding: 0 30px;
      }

      @media (min-width: 500px) {
        padding: 0 40px;
      }

      @media (min-width: 935px) {
        padding: 0 56px;
      }
    }

    a {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;
      border-radius: 8px;
      font-size: var(--headline);
      font-weight: 600;
      background: var(--color-grey-0);
      color: var(--color-grey-300);

      &:hover {
        background: var(--color-grey-200);
        color: var(--color-white);
      }
    }
  }
`;
