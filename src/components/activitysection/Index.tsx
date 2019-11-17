import React from "react";
import * as S from "./Styles";
import Icon from "../icon/Index";
import ControllerIcon from "../../assets/gamepad-controller.png";
import Navbar from "../navbar/Index";
import CenterContainer from "../centercontainer/Index";
import Label from "../label/Index";

const ActivitySection = (): JSX.Element => (
  <S.Container>
    <Navbar>
      <CenterContainer>
        <Icon src={ControllerIcon} />
        <Label>Activity</Label>
      </CenterContainer>
    </Navbar>
  </S.Container>
);

export default ActivitySection;
