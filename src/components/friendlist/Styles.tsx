import styled from "styled-components";

export const UserRow = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background: transparent;
  cursor: pointer;
  align-items: center;

  &:hover {
    filter: brightness(1.1);
    background: #3e4148;
    border-radius: 5px;
  }
`;

export const Status = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #62656c;
`;

export const GreenDot = styled.span`
  width: 5px;
  height: 5px;
  background: ${(props: any): any => props.color || "#43b480"};
  border-radius: 50%;
  margin-left: 90px;
  margin-right: 10px;
`;
