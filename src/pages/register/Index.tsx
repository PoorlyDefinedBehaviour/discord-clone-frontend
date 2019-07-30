import React, { useState, useEffect } from "react";

import { Link as RedirectLink } from "react-router-dom";

import * as S from "./Styles";

import * as yup from "yup";

import { Register as RegisterMutation } from "../../graphql/mutations/Register";

import { api } from "../../services/Api";

import { isLoggedIn } from "../../services/Authentication";
import { store } from "../../store/Index";

import { Label } from "../../components/label/Index";
import { ErrorMessage } from "../../components/errormessage/Index";
import { Form, Input } from "../../components/form/Index";
import { Button } from "../../components/button/Index";

import { Match, MatchAny } from "../../utils/Match";
import { FormatYupError } from "../../utils/FormatYupError";

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

  useEffect((): void => {
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

      Match(
        status,
        [
          201,
          (): void => store.dispatch({ type: "SET_USER", user, token }),
          history.push("/lobby")
        ],
        [422, (): void => setErrorMessage("Email is already being used")],
        [
          MatchAny,
          (): void => setErrorMessage("Something went wrong, try again later")
        ]
      );
    } catch (ex) {
      console.error(ex);
      setErrorMessage(FormatYupError(ex)[0].message);
    } finally {
      setTryingToRegister(false);
    }
  }

  return (
    <S.Container>
      <S.RegisterFormContainer>
        <S.WelcomeMessageContainer>
          <S.WelcomeBackMessage>Create an Account!</S.WelcomeBackMessage>
        </S.WelcomeMessageContainer>

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

          <Button
            style={{
              marginTop: "30px",
              fontSize: "16px",
              backgroundColor: "#677bc4",
              height: "40px"
            }}
          >
            Continue
          </Button>
        </Form>

        <S.LinkContainer>
          <RedirectLink to="/login" style={{ textDecoration: "none" }}>
            <S.Link>Already have an account? </S.Link>
          </RedirectLink>
        </S.LinkContainer>

        <S.LinkContainer>
          <S.Info>
            By registering, you agree to Discord's
            <S.InfoLink> Terms of service</S.InfoLink> and{" "}
            <S.InfoLink>Privacy Policy.</S.InfoLink>
          </S.Info>
        </S.LinkContainer>
      </S.RegisterFormContainer>
    </S.Container>
  );
}
