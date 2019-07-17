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
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover {
    filter: brightness(1.1);
    background: #42464d;
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
