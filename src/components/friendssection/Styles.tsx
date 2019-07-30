import styled from "styled-components";

export const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  background: #36393f;
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
  margin-top: 20px;
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
