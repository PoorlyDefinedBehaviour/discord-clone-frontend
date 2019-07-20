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
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 40px;
  background: transparent;
  margin-top: 20%;
  margin-bottom: 20%;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Icon = styled.img`
  src: url(${(props: any) => props.src});
  width: 60%;
  height: auto;
  margin-left: 20%;
`;
