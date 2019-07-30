import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 100%;
  background: #2f3136;
`;

export const H1 = styled.h1`
  font-size: 14px;
  font-weight: bolder;
  color: #77787c;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const OptionContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 40px;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:hover {
    filter: brightness(1.1);
    background: #42464d;
    border-radius: 5px;
  }
`;
