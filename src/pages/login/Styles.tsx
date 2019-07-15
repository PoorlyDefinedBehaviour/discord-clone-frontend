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

export const LoginForm = styled.form`
  width: 80%;
  margin: 0 auto;
`;

export const EmailLabel = styled.p`
  color: #b9bbbe;
  font-weight: bolder;
  font-size: 11px;
  text-transform: uppercase;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 2px;
  border: 1px solid transparent;

  &:hover {
    border-color: #111;
  }
`;

export const PasswordLabel = styled.p`
  color: #b9bbbe;
  font-weight: bolder;
  font-size: 11px;
  text-transform: uppercase;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 2px;
  border: 1px solid transparent;

  &:hover {
    border-color: #111;
  }
`;

export const LoginButton = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 40px;
  color: #fff;
  font-weight: bold;
  background-color: #677bc4;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #677bf4;
  }
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

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  position: absolute;
  padding: 5px;
  left: 50%;
  transform: translate(-50%, 0);
`;
