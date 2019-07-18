import styled from "styled-components";

export const Section = styled.div`
  width: 300px;
  height: 100%;
  background: #2f3136;
`;

export const SearchBar = styled.input`
  width: 90%;
  height: 25px;
  margin-left: 5%;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: none;
  background: #202225;
  color: #72767d;
  text-indent: 5px;

  &::placeholder {
    font-weight: normal;
    font-size: 12px;
  }
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

export const Message = styled.p`
  color: #62656c;
  width: 90%;
  margin-left: 5%;
  height: 30px;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 11px;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const DiscordTag = styled.span`
  font-size: 11px;
  color: #71757a;
`;
