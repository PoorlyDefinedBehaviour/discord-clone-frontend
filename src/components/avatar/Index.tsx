import React from "react";

import * as S from "./Styles";

export const Avatar = ({ src, ...props }: any): JSX.Element => (
  <S.Avatar {...props} src={src} />
);
