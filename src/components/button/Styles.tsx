import styled from "styled-components";

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  background: #43b581;
  color: #fff;
  width: 100%;
  height: 100%;
  cursor: pointer;
  outline: none;
  text-align: center;

  &:hover {
    filter: brightness(0.9);
  }
`;
