import React from "react";

import {
  ContentOptionContainer,
  Container,
  OptionIcon,
  OptionLabel,
  FriendsContentNavbar,
  MainContent
} from "./Styles";

import ControllerIcon from "../../assets/gamepad-controller.png";

export function ActivitySection(): any {
  return (
    <Container>
      <FriendsContentNavbar>
        <ContentOptionContainer style={{ marginLeft: "20px" }}>
          <OptionIcon src={ControllerIcon} />
          <OptionLabel>Activity</OptionLabel>
        </ContentOptionContainer>
      </FriendsContentNavbar>

      <MainContent />
    </Container>
  );
}
