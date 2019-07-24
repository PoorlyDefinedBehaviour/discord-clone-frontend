import React from "react";

import { Section, OptionContainer, OptionIcon, OptionLabel } from "./Styles";

import HashtagIcon from "../../assets/hashtag.png";
import TPHIcon from "../../assets/server-icon.png";
import { store } from "../../store/Index";

export function ServerRooms(): any {
  const { server }: any = store.getState();

  return (
    <Section>
      <OptionContainer
        style={{ borderBottom: "1px solid #232428", height: "56px" }}
      >
        <OptionIcon src={TPHIcon} style={{ filter: "none" }} />
        <OptionLabel style={{ maxWidth: "inherit", overflow: "hidden" }}>
          {server.name}
        </OptionLabel>
      </OptionContainer>
      <OptionLabel style={{ width: "80%", margin: "0 auto", fontSize: "11px" }}>
        {server._id}
      </OptionLabel>
      <OptionContainer>
        <OptionIcon src={HashtagIcon} />
        <OptionLabel style={{ fontWeight: "bolder", color: "#fff" }}>
          main
        </OptionLabel>
      </OptionContainer>
    </Section>
  );
}
