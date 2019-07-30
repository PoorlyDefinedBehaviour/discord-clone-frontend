import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background: #36393f;
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

export const H1 = styled.h1`
  border-bottom: 1px solid #484b52;
  font-weight: normal;
  color: #fff;
  font-size: 16px;
  padding-bottom: 10px;
  width: 90%;
  margin-bottom: 20px;
`;

export const P = styled.p`
  font-size: 13px;
  color: #fff;
`;

export const CodeInput = styled.input`
  width: 90%;
  height: 40px;
  text-indent: 10px;
  background: #303338;
  border: 2px solid #212327;
  color: #fff;
  border-radius: 5px;
`;

export const GiftInventorySectionContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 40px;
`;

export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  background: #677bc4;
  width: 100px;
  height: 44px;
  border-radius: 5px;
  outline: none;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  margin-left: 35px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const LowerSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const Link = styled.span`
  color: #23a4f4;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
