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

export const OptionIcon = styled.img`
  src: url(${(props: any) => props.src});
  width: 24px;
  height: 24px;
  margin-left: 5%;
  margin-right: 10%;
  filter: invert(46%) sepia(14%) saturate(182%) hue-rotate(180deg)
    brightness(97%) contrast(90%);
`;

export const OptionLabel = styled.p`
  color: #62656c;
  font-weight: bold;
  font-size: 13px;
`;

export const Status = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #62656c;
`;

export const GreenDot = styled.span`
  width: 5px;
  height: 5px;
  background: ${(props: any): any => (props.color ? "#43b480" : "#747F8D")};
  border-radius: 50%;
  margin-left: 90px;
  margin-right: 10px;
`;
