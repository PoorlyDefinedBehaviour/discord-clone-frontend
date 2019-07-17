import React from "react";

import {
  Section,
  SearchBar,
  OptionContainer,
  OptionIcon,
  OptionLabel,
  Message
} from "./Styles";

import NitroIcon from "../../assets/start-up.png";
import ControllerIcon from "../../assets/gamepad-controller.png";
import BackpackIcon from "../../assets/school-book-bag.png";
import FriendsIcon from "../../assets/friends.png";
import { ESections } from "../lobbysection/Index";

export default function DirectMessages({setCurrentSection}): any {
  return (
    <Section>
      <SearchBar placeholder="Find or start a conversation" />
      <OptionContainer onClick={(): void => setCurrentSection(ESections.ACTIVITY)}>
        <OptionIcon src={ControllerIcon} />
        <OptionLabel>Activity</OptionLabel>
      </OptionContainer>
      <OptionContainer onClick={(): void => setCurrentSection(ESections.ACTIVITY)}>
        <OptionIcon src={BackpackIcon} />
        <OptionLabel>Library</OptionLabel>
      </OptionContainer>
      <OptionContainer onClick={(): void => setCurrentSection(ESections.ACTIVITY)}>
        <OptionIcon src={NitroIcon} />
        <OptionLabel>Nitro</OptionLabel>
      </OptionContainer>
      <OptionContainer onClick={(): void => setCurrentSection(ESections.ACTIVITY)}>
        <OptionIcon src={FriendsIcon} />
        <OptionLabel>Friends</OptionLabel>
      </OptionContainer>

      <Message>Direct Messages</Message>
    </Section>
  );
}
