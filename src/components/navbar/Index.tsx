import React, { PropsWithChildren } from "react";

import * as S from "./Styles";

export default function Navbar({
  children,
  ...props
}: PropsWithChildren<{}>): JSX.Element {
  return <S.Navbar {...props}>{children}</S.Navbar>;
}
