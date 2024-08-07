import styled from "styled-components";

export const StyledProductsList = styled.ul`
  height: max-content;
  width: 96%;
  max-width: 1368px;
  display: flex;
  gap: 20px;
  margin: 24px 0 0 4%;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px 0 16px;

  @media (min-width: 670px) {
    padding-left: 3px;
    width: 92%;
    display: grid;
    grid-template-columns: repeat(2, 304px);
    gap: 32px 6px;
    margin: 24px auto 100px;
    overflow-x: hidden;
    justify-content: space-evenly;
  }

  @media (min-width: 970px) {
    grid-template-columns: repeat(3, 304px);
  }

  @media (min-width: 1260px) {
    grid-template-columns: repeat(4, 304px);
    justify-content: space-between;
  }
`;
