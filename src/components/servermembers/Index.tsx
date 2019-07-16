import React from "react";

import { Container } from "./Styles";
import {
  OptionContainer,
  OptionIcon,
  OptionLabel
} from "../../pages/lobby/Styles";

import TPHIcon from "../../assets/server-icon.png";

export default function ServerMembers(): any {
  return (
    <Container>
      <OptionContainer style={{ marginTop: "10px" }}>
        <OptionIcon src={TPHIcon} style={{ filter: "none" }} />
        <OptionLabel>John Doe</OptionLabel>
      </OptionContainer>
      <OptionContainer style={{ marginTop: "10px" }}>
        <OptionIcon src={TPHIcon} style={{ filter: "none" }} />
        <OptionLabel>John Doe</OptionLabel>
      </OptionContainer>
      <OptionContainer style={{ marginTop: "10px" }}>
        <OptionIcon src={TPHIcon} style={{ filter: "none" }} />
        <OptionLabel>John Doe</OptionLabel>
      </OptionContainer>
      <OptionContainer style={{ marginTop: "10px" }}>
        <OptionIcon src={TPHIcon} style={{ filter: "none" }} />
        <OptionLabel>John Doe</OptionLabel>
      </OptionContainer>
      <OptionContainer style={{ marginTop: "10px" }}>
        <OptionIcon src={TPHIcon} style={{ filter: "none" }} />
        <OptionLabel>John Doe</OptionLabel>
      </OptionContainer>
    </Container>
  );
}
