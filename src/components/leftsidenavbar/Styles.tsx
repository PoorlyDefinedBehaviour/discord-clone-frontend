import styled from "styled-components";

export const Container = styled.div`
  bottom: 0;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  display: flex;
`;

export const Nav = styled.div`
  height: 100%;
  min-width: 72px;
  max-width: 72px;
  background: #202225;
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;
