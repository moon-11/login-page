import styled from "styled-components";

export const StyledCartCard = styled.li`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 82%;
    display: flex;
    gap: 10px;

    & > div:first-child {
      width: 83px;
      height: 80px;
      border-radius: 5px;
      background-color: var(--color-grey-100);
      display: flex;
      justify-content: center;
      align-items: center;

      & > img {
        width: 56px;
      }
    }

    & > div:last-child {
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4 {
        color: var(--color-grey-600);
        font-size: var(--heading-3);
        line-height: 24px;
        font-weight: 700;
      }

      & > div {
        display: flex;
        justify-content: space-between;
        width: 107px;
        border: 2px solid var(--color-grey-100);

        & > p {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: var(--caption);
          color: var(--color-black);
          font-weight: 400;
        }
      }
    }
  }
  & > button {
    align-self: flex-start;
    margin: 3px 10px 0 0;

    &:hover {
      filter: brightness(0.88);
    }
  }
`;
