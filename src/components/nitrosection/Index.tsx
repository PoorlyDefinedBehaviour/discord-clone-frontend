import React from "react";

import {
  Container,
  Navbar,
  ContentOptionContainer,
  OptionIcon,
  OptionLabel
} from "./Styles";

import NitroIcon from "../../assets/start-up.png";

export function NitroSection(): any {
  return (
    <Container>
      <Navbar>
        <ContentOptionContainer style={{ marginLeft: "20px" }}>
          <OptionIcon src={NitroIcon} />
          <OptionLabel>Nitro</OptionLabel>
        </ContentOptionContainer>
      </Navbar>
    </Container>
  );
}
