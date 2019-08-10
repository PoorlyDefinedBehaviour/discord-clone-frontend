import React, { PropsWithChildren } from "react";

import * as S from "./Styles";

export const SettingsContainer = ({
  children,
  ...props
}: PropsWithChildren<any>): JSX.Element => (
  <S.Container {...props}>{children}</S.Container>
);
