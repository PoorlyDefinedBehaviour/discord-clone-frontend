import React from "react";

import * as S from "./Styles";

import NitroIcon from "../../assets/start-up.png";
import ControllerIcon from "../../assets/gamepad-controller.png";
import BackpackIcon from "../../assets/school-book-bag.png";
import FriendsIcon from "../../assets/friends.png";
import MicrophoneIcon from "../../assets/microphone-black-shape.svg";
import HeadphoneIcon from "../../assets/headphone-symbol.svg";
import SettingsIcon from "../../assets/settings-work-tool.svg";

import { ESections } from "../lobbysection/Index";
import { Label } from "../label/Index";
import { Icon } from "../icon/Index";
import { store } from "../../store/Index";
import { Avatar } from "../avatar/Index";
import { SettingsContainer } from "../settingscontainer/Index";

export const DirectMessages = ({ setCurrentSection }): JSX.Element => {
  const { user }: any = store.getState();

  const toggle = (input: string): void => {
    const newUser: any = { ...user };
    newUser[input] = !user[input];
    store.dispatch({ type: "SET_USER", user: newUser });
  };

  return (
    <S.Section>
      <S.SearchBar placeholder="Find or start a conversation" />
      <S.Container onClick={(): void => setCurrentSection(ESections.ACTIVITY)}>
        <Icon src={ControllerIcon} />
        <Label>Activity</Label>
      </S.Container>
      <S.Container onClick={(): void => setCurrentSection(ESections.LIBRARY)}>
        <Icon src={BackpackIcon} />
        <Label>Library</Label>
      </S.Container>
      <S.Container onClick={(): void => setCurrentSection(ESections.NITRO)}>
        <Icon src={NitroIcon} />
        <Label>Nitro</Label>
      </S.Container>
      <S.Container onClick={(): void => setCurrentSection(ESections.FRIENDS)}>
        <Icon src={FriendsIcon} />
        <Label>Friends</Label>
      </S.Container>

      <S.Message>Direct Messages</S.Message>

      <S.Container onClick={(): void => setCurrentSection(ESections.LIBRARY)} />

      <SettingsContainer>
        <Avatar src={user.avatar} />

        <Icon
          src={MicrophoneIcon}
          style={{ marginRight: "5px", cursor: "pointer" }}
          onClick={toggle("microphone")}
        />
        <Icon
          className={!user.headphones && "no-headphones"}
          src={HeadphoneIcon}
          style={{ marginRight: "5px", cursor: "pointer" }}
          onClick={toggle("headphones")}
        />
        <Icon
          src={SettingsIcon}
          style={{ cursor: "pointer" }}
          onClick={(): void => setCurrentSection(ESections.SETTINGS)}
        />
      </SettingsContainer>
    </S.Section>
  );
};
