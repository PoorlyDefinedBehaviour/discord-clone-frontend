import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
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
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  width: 80%;
  margin: 0 auto;
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

export const MainContentContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  text-align: center;
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  src: url(${(props: any): any => props.src});
`;

export const CodeInput = styled.input`
  width: 100%;
  height: 50px;
  text-indent: 10px;
  background: #303338;
  border: 2px solid #212327;
  color: #fff;
  border-radius: 5px;
`;

export const GiftInventorySectionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
