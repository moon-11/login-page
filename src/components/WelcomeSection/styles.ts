import styled from "styled-components";

export const StyledWelcomeSection = styled.section`
  width: 100%;
  max-width: 377px;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 26px;
  transition: 0.5s ease-in-out;

  @media (min-width: 450px) {
    align-items: center;
  }

  @media (min-width: 740px) {
    display: flex;
    align-items: baseline;
  }

  img {
    width: 230px;
  }

  @media (min-width: 450px) {
    margin-bottom: 24px;
  }

  @media (min-width: 740px) {
    margin-bottom: 0;
  }

  & > div {
    width: 100%;
    height: 95px;
    padding: 13px 23px 16px 13px;
    border-radius: 5px;
    border: 1px solid var(--color-grey-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);

    @media (min-width: 450px) {
      display: none;
    }

    @media (min-width: 740px) {
      display: flex;
    }

    div {
      width: 60px;
      height: 60px;
      border: none;
      border-radius: 5px;
      background-color: var(--color-primary-10);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;

      img {
        width: 24px;
      }
    }

    p {
      font-size: var(--caption);
      color: var(--color-grey-300);
      font-weight: 400;
      line-height: 22px;
      width: 220px;

      @media (min-width: 376px) {
        width: 261px;
        font-size: var(--body);
      }

      strong {
        color: var(--color-grey-600);
      }
    }
  }

  & > img:last-child {
    margin-top: 6px;
    width: 181px;
    display: none;

    @media (min-width: 740px) {
      display: block;
    }
  }
`;
