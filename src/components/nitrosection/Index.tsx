import React from "react";

import * as S from "./Styles";

import NitroIcon from "../../assets/start-up.png";
import Navbar from "../navbar/Index";
import Icon from "../icon/Index";
import Label from "../label/Index";
import CenterContainer from "../centercontainer/Index";

export default function NitroSection(): JSX.Element {
  return (
    <S.Container>
      <Navbar>
        <CenterContainer>
          <Icon src={NitroIcon} />
          <Label>Nitro</Label>
        </CenterContainer>
      </Navbar>
    </S.Container>
  );
}
