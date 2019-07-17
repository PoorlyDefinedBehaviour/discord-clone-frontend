import styled from "styled-components";

export const Container = styled.div`
  bottom: 0;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  display: flex;
`;

export const LeftNavBar = styled.div`
  width: 90px;
  height: 100%;
  background: #202225;
  display: flex;
  flex-direction: column;
`;

export const FriendsAndMessagesSection = styled.div`
  width: 300px;
  height: 100%;
  background: #2f3136;
`;

export const ServerIconContainer = styled.div`
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

export const ServerIcon = styled.img`
  src: url(${(props: any) => props.src});
  width: 60%;
  height: auto;
  margin-left: 20%;
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

export const DirectMessages = styled.p`
  color: #62656c;
  width: 90%;
  margin-left: 5%;
  height: 30px;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 11px;
`;

export const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  background: #36393f;
`;

export const FriendsContentNavbar = styled.div`
  width: 100%;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
`;

export const ContentOptionContainer = styled.div`
  margin: 0;
  width: 100px;
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

export const AddFriendButton = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #43b581;
  color: #fff;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

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

export const GreenDot = styled.span`
  width: 5px;
  height: 5px;
  background: #43b480;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: 10px;
`;

export const OnlineStatus = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #62656c;
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

export const CreateServerPopUpBackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const CreateServerPopUpBackground = styled.img`
  height: 200px;
  width: auto;
  margin-top: 40%;
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

export const CreateServerPopUpActionName = styled.p`
  color: ${(props: any): any => props.color};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px auto;
  text-align: justify;
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

  &:hover {
    background-color: #8289da;
    font-size: 10px;
  }
`;
