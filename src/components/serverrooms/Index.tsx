import React from "react";

import { Section, OptionContainer, OptionIcon, OptionLabel } from "./Styles";

import HashtagIcon from "../../assets/hashtag.png";
import TPHIcon from "../../assets/server-icon.png";

export default function ServerRooms(): any {
  return (
    <Section>
      <OptionContainer
        style={{ borderBottom: "1px solid #232428", height: "56px" }}
      >
        <OptionIcon src={TPHIcon} style={{ filter: "none" }} />
        <OptionLabel style={{ maxWidth: "inherit", overflow: "hidden" }}>
          server name
        </OptionLabel>
      </OptionContainer>
      <OptionContainer>
        <OptionIcon src={HashtagIcon} />
        <OptionLabel style={{ fontWeight: "bolder", color: "#fff" }}>
          main
        </OptionLabel>
      </OptionContainer>
    </Section>
  );
}
