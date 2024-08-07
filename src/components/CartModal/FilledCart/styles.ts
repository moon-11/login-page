import styled from "styled-components";

export const StyledFilledCart = styled.section`
  padding: 20px;
  width: 100%;
  height: max-content;

  ul {
    width: 100%;
    height: max-content;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    overflow-y: scroll;
  }

  footer {
    margin-top: 22px;
    border-top: 2px solid var(--color-grey-100);

    & > div {
      width: 100%;
      height: 60px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      & > p {
        font-size: var(--body);
        font-weight: 600;
        color: var(--color-grey-600);
      }

      & > p:last-child {
        color: var(--color-grey-300);
        padding-right: 6px;
      }
    }
  }
`;
