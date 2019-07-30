import React from "react";

import * as S from "./Styles";

export const Icon = ({ src, onClick }: any): JSX.Element => (
  <S.Icon onClick={onClick} src={src} />
);
