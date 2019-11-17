import React from "react";

import * as S from "./Styles";

export default function Avatar({ src, ...props }): JSX.Element {
  return <S.Avatar {...props} src={src} />;
}
