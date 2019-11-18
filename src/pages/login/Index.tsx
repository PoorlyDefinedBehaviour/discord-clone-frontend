import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import * as S from "./Styles";
import api from "../../services/Api";
import LoginMutation from "../../graphql/mutations/Login";
import store from "../../store/Index";
import Label from "../../components/label/Index";
import ErrorMessage from "../../components/errormessage/Index";
import Form, { Input } from "../../components/form/Index";
import Button from "../../components/button/Index";
import Match, { MatchAny } from "../../utils/Match";
import UserService from "../../services/User.service";

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

export default function Login({ history }) {
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [tryingToLogin, setTryingToLogin] = useState(false);

  useEffect(() => {
    if (UserService.isLoggedIn()) {
      history.push("/lobby");
    }
  }, []);

  const tryToLogin = async (event): Promise<void> => {
    event.preventDefault();

    if (tryingToLogin || !email || !password) {
      return;
    }

    try {
      setTryingToLogin(true);

      await validate(email, password);

      const {
        data: {
          data: {
            login: { status, user, token }
          }
        }
      }: any = await api.post("/", LoginMutation(email, password));

      Match(
        status,
        [
          200,
          (): void => store.dispatch({ type: "SET_USER", user, token }),
          history.push("/lobby")
        ],
        [401, (): void => setErrorMessage("Invalid credentials")],
        [
          MatchAny,
          (): void => setErrorMessage("Something went wrong, try again later")
        ]
      );
    } catch (e) {
      setErrorMessage("Email and password must be valid");
    } finally {
      setTryingToLogin(false);
    }
  };

  return (
    <S.Container>
      <S.LoginFormContainer>
        <S.WelcomeMessageContainer>
          <S.WelcomeBackMessage>Welcome Back!</S.WelcomeBackMessage>
          <S.HappyToSeeYouAgainMessage>
            We're excited to see you again!
          </S.HappyToSeeYouAgainMessage>
        </S.WelcomeMessageContainer>

        <Form onSubmit={tryToLogin}>
          <Label>EMAIL</Label>
          <Input
            type="email"
            onChange={(e: any): void => setEmail(e.target.value)}
          />

          <Label>PASSWORD</Label>
          <Input
            type="password"
            onChange={(e: any): void => setPassword(e.target.value)}
          />

          <Button
            style={{
              marginTop: "30px",
              fontSize: "16px",
              backgroundColor: "#677bc4",
              height: "40px"
            }}
          >
            Login
          </Button>
          {errorMessage && <ErrorMessage message={errorMessage} />}
        </Form>

        <S.RegisterLinkContainer>
          <S.NeedAnAccount>Need an account? </S.NeedAnAccount>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <S.RegisterLink>Register</S.RegisterLink>
          </Link>
        </S.RegisterLinkContainer>
      </S.LoginFormContainer>
    </S.Container>
  );
}
