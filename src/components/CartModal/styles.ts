import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background-color: var(--color-grey-600-50);
`;

export const ModalBox = styled.div`
  width: 92%;
  max-width: 500px;
  min-height: 212px;
  height: max-content;
  background-color: var(--color-grey-0);
  border-radius: 5px;
  margin: 82px auto;

  header {
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primary);
    padding: 13px 22px;
    border-radius: 4px 4px 0 0;

    h3 {
      font-size: var(--heading-3);
      font-weight: 700;
      color: var(--color-white);
    }

    button {
      width: 15px;
      height: 15px;

      img {
        width: 15px;
      }

      &:hover {
        filter: brightness(0.85);
      }
    }
  }
`;
