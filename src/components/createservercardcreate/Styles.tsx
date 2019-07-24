import styled from "styled-components";

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

export const CreateServerPopUpContainer = styled.div`
  width: 540px;
  height: 420px;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 100;
`;

export const CreateServerPopUpAction = styled.div`
  width: 210px;
  height: 285px;
  border: 2px solid #e5e5e5;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 15%;
  top: 70%;
  transform: translate(-15%, -70%);
  text-align: center;
  line-height: 20px;
`;

export const CreateServerPopUpActionImage = styled.img`
  src: url(${(props: any): any => props.src});
  width: 50%;
  height: auto;
  margin: 0 auto;
`;

export const CreateServerPopUpActionDescription = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: #9bacb6;
  width: 80%;
  margin: 0 auto;
`;

export const CreateServerPopUpActionButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: ${(props: any): any => props.color};
  color: #fff;
  margin: 0 auto;
  width: 80%;
  height: 50px;
  cursor: pointer;
  outline: none;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const CreateServerPopUpInnerContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CreateServerPopUpInnerContainerName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 20px;
  color: #7289da;
`;

export const CreateServerInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CreateServerLabelAndInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CreateServerInput = styled.input`
  border: none;
  border-bottom: 1px solid #f0f0f0;
  width: 60%;
  text-indent: 5px;
  transition: 0.5s;
  margin-left: -10%;

  &::placeholder {
    font-weight: normal;
    font-size: 14px;
    color: #c3c5c7;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #7289da;
  }

  &:hover {
    border-bottom: 2px solid #b9bbbe;
  }
`;

export const ImageInputButton = styled.button`
  margin: 20px;
  width: 220px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid #ebebeb;
  background-color: #7289da;
  cursor: pointer;
  font-weight: bolder;
  font-size: 0px;
  text-transform: uppercase;
  color: #fff;
  outline: none;

  &:hover {
    background-color: #8289da;
    font-size: 10px;
  }
`;
