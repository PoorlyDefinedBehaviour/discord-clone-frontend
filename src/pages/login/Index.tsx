import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as yup from "yup";

import { Login as LoginMutation } from "../../graphql/mutations/Login";

import api from "../../services/Api";

import {
  Container,
  LoginFormContainer,
  WelcomeMessageContainer,
  WelcomeBackMessage,
  HappyToSeeYouAgainMessage,
  LoginForm,
  EmailLabel,
  PasswordLabel,
  EmailInput,
  PasswordInput,
  LoginButton,
  RegisterLinkContainer,
  RegisterLink,
  NeedAnAccount,
  ErrorMessage
} from "./Styles";

import { isLoggedIn } from "../../services/Authentication";
import Handlers from "./Handlers";

async function validate(email: string, password: string): Promise<any> {
  const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email must be a valid email")
      .min(5, "email must be at least 5 characters long")
      .max(255),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .max(255)
  });

  return await LoginSchema.validate({ email, password }, { abortEarly: false });
}

export default function Login({ history }: any): any {
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");

  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [failedToLogin, setFailedToLogin] = useState(false);

  const [tryingToLogin, setTryingToLogin] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) history.push("/lobby");
  }, []);

  async function login(): Promise<void> {
    if (tryingToLogin) return;

    try {
      setTryingToLogin(true);

      await validate(email, password);

      const {
        data: {
          data: { login }
        }
      }: any = await api.post("/", LoginMutation(email, password));

      const handler: any = Handlers(login.status);

      if (handler) {
        handler(login, {
          setEmail,
          setPassword,
          setInvalidCredentials,
          setFailedToLogin,
          history
        });
      }
    } catch (e) {
      setInvalidCredentials(true);
    } finally {
      setTryingToLogin(false);
    }
  }

  return (
    <Container>
      <LoginFormContainer>
        <WelcomeMessageContainer>
          <WelcomeBackMessage>Welcome Back!</WelcomeBackMessage>
          <HappyToSeeYouAgainMessage>
            We're excited to see you again!
          </HappyToSeeYouAgainMessage>
        </WelcomeMessageContainer>

        <LoginForm
          onSubmit={(e: any): void => {
            e.preventDefault();
            login();
          }}
        >
          <EmailLabel>Email</EmailLabel>
          <EmailInput
            type="email"
            onChange={(e: any): void => setEmail(e.target.value)}
          />

          <PasswordLabel>Password</PasswordLabel>
          <PasswordInput
            type="password"
            onChange={(e: any): void => setPassword(e.target.value)}
          />
          {invalidCredentials && (
            <ErrorMessage>Email and password must be valid</ErrorMessage>
          )}
          {failedToLogin && <ErrorMessage>Invalid credentials</ErrorMessage>}

          <LoginButton>Login</LoginButton>
        </LoginForm>

        <RegisterLinkContainer>
          <NeedAnAccount>Need an account? </NeedAnAccount>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <RegisterLink>Register</RegisterLink>
          </Link>
        </RegisterLinkContainer>
      </LoginFormContainer>
    </Container>
  );
}
