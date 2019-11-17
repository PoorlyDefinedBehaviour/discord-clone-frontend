import React, { PropsWithChildren } from "react";

import * as S from "./Styles";

export default function Button({
  children,
  ...props
}: PropsWithChildren<any>): JSX.Element {
  return <S.Button {...props}>{children}</S.Button>;
}
