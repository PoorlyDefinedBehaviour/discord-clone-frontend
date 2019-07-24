import React, { useState, useEffect } from "react";

import { Link as RedirectLink } from "react-router-dom";

import * as yup from "yup";

import { Register as RegisterMutation } from "../../graphql/mutations/Register";

import { api } from "../../services/Api";

import {
  Container,
  RegisterFormContainer,
  WelcomeMessageContainer,
  WelcomeBackMessage,
  Form,
  Button,
  LinkContainer,
  Link,
  ErrorMessage,
  Input,
  Label,
  Info,
  InfoLink
} from "./Styles";

import { isLoggedIn } from "../../services/Authentication";
import { store } from "../../store/Index";

async function validate(
  username: string,
  email: string,
  password: string
): Promise<any> {
  const RegisterSchema = yup.object().shape({
    username: yup
      .string()
      .min(6, "Username must be at least 5 characters long")
      .max(255),
    email: yup
      .string()
      .email("Email must be a valid email")
      .min(6, "email must be at least 5 characters long")
      .max(255),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .max(255)
  });

  return await RegisterSchema.validate(
    { username, email, password },
    { abortEarly: false }
  );
}

export function Register({ history }: any): any {
  const [email, setEmail]: any = useState("");
  const [username, setUsername]: any = useState("");
  const [password, setPassword]: any = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [tryingToRegister, setTryingToRegister] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) history.push("/lobby");
  }, []);

  async function register(): Promise<void> {
    if (tryingToRegister) return;
    if (!email || !username || !password) return;

    try {
      setTryingToRegister(true);

      await validate(username, email, password);

      const {
        data: {
          data: {
            register: { status, user, token }
          }
        }
      }: any = await api
        .post("/", RegisterMutation(username, email, password))
        .catch((error: any): void => console.log(error));

      console.log(status, user, token);
      switch (status) {
        case 201:
          store.dispatch({ type: "SET_USER", user, token });
          history.push("/lobby");
          break;

        case 422:
          setErrorMessage("Email is already being used");
          break;
        default:
          setErrorMessage("Something went wrong, try again later");
          break;
      }
    } catch (e) {
      console.error("register", e);
    } finally {
      setTryingToRegister(false);
    }
  }

  return (
    <Container>
      <RegisterFormContainer>
        <WelcomeMessageContainer>
          <WelcomeBackMessage>Create an Account!</WelcomeBackMessage>
        </WelcomeMessageContainer>

        <Form
          onSubmit={(e: any): void => {
            e.preventDefault();
            register();
          }}
        >
          <Label>Email</Label>
          <Input
            type="email"
            onChange={(e: any): void => setEmail(e.target.value)}
          />

          <Label>Username</Label>
          <Input
            type="text"
            onChange={(e: any): void => setUsername(e.target.value)}
          />

          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e: any): void => setPassword(e.target.value)}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button>Continue</Button>
        </Form>

        <LinkContainer>
          <RedirectLink to="/login" style={{ textDecoration: "none" }}>
            <Link>Already have an account? </Link>
          </RedirectLink>
        </LinkContainer>

        <LinkContainer>
          <Info>
            By registering, you agree to Discord's
            <InfoLink> Terms of service</InfoLink> and{" "}
            <InfoLink>Privacy Policy.</InfoLink>
          </Info>
        </LinkContainer>
      </RegisterFormContainer>
    </Container>
  );
}
