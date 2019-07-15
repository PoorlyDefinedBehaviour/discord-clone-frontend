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

export const RegisterFormContainer = styled.div`
  width: 480px;
  height: 500px;
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
  margin-bottom: 20px;
`;

export const WelcomeBackMessage = styled.h2`
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  padding: 0px;
  margin-top: 40px;
`;

export const Form = styled.form`
  width: 80%;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 2px;
  border: 1px solid transparent;

  &:hover {
    border-color: #111;
  }
`;

export const Label = styled.p`
  color: #b9bbbe;
  font-weight: bolder;
  font-size: 11px;
  text-transform: uppercase;
`;

export const Button = styled.button`
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

export const LinkContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 12px;
`;

export const Link = styled.span`
  color: #697ec6;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;

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

export const Info = styled.span`
  color: #63676e;
  font-size: 10px;
`;

export const InfoLink = styled.span`
  color: #697ec6;
  cursor: pointer;
  font-weight: normal;
  font-size: 11px;

  &:hover {
    text-decoration: underline;
  }
`;
