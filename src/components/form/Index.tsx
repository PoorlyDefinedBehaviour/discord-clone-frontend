import React, { PropsWithChildren } from "react";

import * as S from "./Styles";

export const Form = ({
  children,
  ...props
}: PropsWithChildren<{ onSubmit?: any }>): JSX.Element => (
  <S.Form {...props}>{children}</S.Form>
);

export const Input = (props: any): JSX.Element => <S.Input {...props} />;
