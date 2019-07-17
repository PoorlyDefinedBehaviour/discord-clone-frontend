import styled from "styled-components";

export const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  background: #36393f;
`;

export const FriendsContentNavbar = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #282a2e;
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
  outline: none;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const FriendListHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #4a4d53;
  width: 91%;
  margin: 0 auto;
`;

export const FriendListHeaderElement = styled.span`
  color: #6c6e72;
  font-weight: bolder;
  font-size: 12px;
  text-transform: uppercase;
  padding-right: 100px;
  margin-right: 20px;
  border-right: 1px solid #4a4d53;
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
  background: ${(props: any): any => (props.color ? "#43b480" : "#747F8D")};
  border-radius: 50%;
  margin-left: 90px;
  margin-right: 10px;
`;

export const OnlineStatus = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #62656c;
`;
