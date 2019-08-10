import styled from "styled-components";

export const Icon = styled.img`
  src: url(${(props: any) => props.src});
  width: 16px;
  height: 16px;
  margin-left: 5%;
  margin-right: 10%;
  cursor: pointer;

  filter: invert(46%) sepia(14%) saturate(182%) hue-rotate(180deg)
    brightness(97%) contrast(90%);
`;
