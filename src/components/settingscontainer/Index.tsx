import React, { PropsWithChildren } from "react";
import * as S from "./Styles";

export default function SettingsContainer({
  children,
  ...props
}: PropsWithChildren<any>): JSX.Element {
  return <S.Container {...props}>{children}</S.Container>;
}
