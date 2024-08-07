import styled from "styled-components";
import searchDark from "../../assets/search2.svg";
import cart from "../../assets/cart-icon.svg";
import exit from "../../assets/exit.svg";

export const StyledHeader = styled.header`
  width: 100%;
  min-width: 100vw;

  height: 80px;
  background-color: var(--color-grey-0);

  & > div {
    height: 100%;
    width: 92%;
    max-width: 1368px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    position: relative;

    & > img {
      width: 159px;
    }

    & > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      nav {
        height: 100%;
        width: max-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;

        & > button:first-child {
          width: 23px;
          height: 26px;
          background-color: transparent;
          background: url(${searchDark});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;

          @media (min-width: 500px) {
            display: none;
          }
        }

        & > button:not(:first-child):not(:last-child) {
          width: 28px;
          height: 26px;
          background-color: transparent;
          background: url(${cart});
          background-repeat: no-repeat;
          background-size: auto;
          background-position: bottom;
          position: relative;

          & > span {
            display: block;
            width: 20px;
            height: 24px;
            background-color: var(--color-primary);
            border-radius: 7px;
            color: var(--color-white);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 800;
            font-size: var(--body);
            position: absolute;
            bottom: 13px;
            left: 18px;
          }
        }

        & > button:last-child {
          width: 28px;
          height: 26px;
          background-color: transparent;
          background: url(${exit});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          margin-left: 6px;
        }

        & button:hover {
          filter: brightness(0.89);
        }
      }
    }
  }
`;
