import React from "react";
import * as S from "./Styles";

const Form = ({ children, ...props }): JSX.Element => (
  <S.Form {...props}>{children}</S.Form>
);

export const Input = (props): JSX.Element => <S.Input {...props} />;

export default Form;
