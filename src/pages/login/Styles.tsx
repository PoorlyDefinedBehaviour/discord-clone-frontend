import styled from "styled-components";

import Background from "../../assets/login-background.jpg";

export const Container = styled.div`
  bottom: 0;
  height: 100vh;
  max-height: 100%;
  background: url(${Background}) no-repeat fixed;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
`;

export const LoginFormContainer = styled.div`
  width: 480px;
  height: 430px;
  background-color: #36393f;
  margin: 0 auto;
  vertical-align: middle;
  position: relative;
  top: 25%;
  border-radius: 5px;
`;

export const WelcomeMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  align-items: center;
  margin-bottom: 40px;
`;

export const WelcomeBackMessage = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  padding: 0px;
  margin-top: 40px;
`;

export const HappyToSeeYouAgainMessage = styled.h5`
  color: #72767d;
  font-weight: normal;
  font-size: 16px;
  padding: 0px;
  margin: 0px;
`;

export const RegisterLinkContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 12px;
`;

export const NeedAnAccount = styled.span`
  color: #63676e;
`;

export const RegisterLink = styled.span`
  color: #697ec6;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
