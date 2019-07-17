import React from "react";

import {
  Container,
  H1,
  OptionContainer,
  OptionIcon,
  OptionLabel
} from "./Styles";

import TPHIcon from "../../assets/server-icon.png";

export default function ServerMembers(): any {
  return (
    <Container>
      <H1>Staff - {1}</H1>
      <OptionContainer style={{ marginTop: "10px" }}>
        <OptionIcon src={TPHIcon} style={{ filter: "none" }} />
        <OptionLabel>John Doe</OptionLabel>
      </OptionContainer>
      <H1>Members - {4}</H1>
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
