import React, { PropsWithChildren } from "react";

import * as S from "./Styles";

export const Button = ({
  children,
  ...props
}: PropsWithChildren<any>): JSX.Element => (
  <S.Button {...props}>{children}</S.Button>
);
