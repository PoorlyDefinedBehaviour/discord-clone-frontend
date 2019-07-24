import React from "react";

import {
  Section,
  SearchBar,
  OptionContainer,
  OptionIcon,
  OptionLabel,
  Message,
  FlexContainer,
  DiscordTag
} from "./Styles";

import NitroIcon from "../../assets/start-up.png";
import ControllerIcon from "../../assets/gamepad-controller.png";
import BackpackIcon from "../../assets/school-book-bag.png";
import FriendsIcon from "../../assets/friends.png";
import MicrophoneIcon from "../../assets/microphone-black-shape.svg";
import HeadphoneIcon from "../../assets/headphone-symbol.svg";
import SettingsIcon from "../../assets/settings-work-tool.svg";

import { ESections } from "../lobbysection/Index";

export function DirectMessages({ setCurrentSection }): any {
  return (
    <Section>
      <SearchBar placeholder="Find or start a conversation" />
      <OptionContainer
        onClick={(): void => setCurrentSection(ESections.ACTIVITY)}
      >
        <OptionIcon src={ControllerIcon} />
        <OptionLabel>Activity</OptionLabel>
      </OptionContainer>
      <OptionContainer
        onClick={(): void => setCurrentSection(ESections.LIBRARY)}
      >
        <OptionIcon src={BackpackIcon} />
        <OptionLabel>Library</OptionLabel>
      </OptionContainer>
      <OptionContainer onClick={(): void => setCurrentSection(ESections.NITRO)}>
        <OptionIcon src={NitroIcon} />
        <OptionLabel>Nitro</OptionLabel>
      </OptionContainer>
      <OptionContainer
        onClick={(): void => setCurrentSection(ESections.FRIENDS)}
      >
        <OptionIcon src={FriendsIcon} />
        <OptionLabel>Friends</OptionLabel>
      </OptionContainer>

      <Message>Direct Messages</Message>

      <OptionContainer
        onClick={(): void => setCurrentSection(ESections.LIBRARY)}
      />

      <OptionContainer
        style={{
          position: "fixed",
          bottom: "0px",
          width: "240px",
          height: "65px",
          background: "#2A2C31"
        }}
      >
        <OptionIcon src={NitroIcon} />

        <FlexContainer style={{ flexDirection: "column" }}>
          <OptionLabel
            style={{
              marginBottom: "3px",
              color: "#fff",
              fontWeight: "normal",
              maxWidth: "50px",
              overflow: "hidden"
            }}
          >
            UserName
          </OptionLabel>
          <DiscordTag>#3450</DiscordTag>
        </FlexContainer>

        <OptionIcon
          src={MicrophoneIcon}
          style={{ marginRight: "5px", transform: "scale(0.8)" }}
        />
        <OptionIcon
          src={HeadphoneIcon}
          style={{ marginRight: "5px", transform: "scale(0.8)" }}
        />
        <OptionIcon
          src={SettingsIcon}
          style={{ transform: "scale(0.8)" }}
          onClick={(): void => setCurrentSection(ESections.SETTINGS)}
        />
      </OptionContainer>
    </Section>
  );
}
