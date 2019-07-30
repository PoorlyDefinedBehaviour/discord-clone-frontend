import React, { PropsWithChildren } from "react";

import * as S from "./Styles";

export const Navbar = ({
  children,
  ...props
}: PropsWithChildren<{}>): JSX.Element => (
  <S.Navbar {...props}>{children}</S.Navbar>
);
