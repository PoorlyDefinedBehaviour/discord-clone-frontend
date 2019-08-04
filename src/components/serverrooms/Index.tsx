import React from "react";

import * as S from "./Styles";

import HashtagIcon from "../../assets/hashtag.png";
import TPHIcon from "../../assets/server-icon.png";

import { store } from "../../store/Index";

import { Label } from "../label/Index";
import { CenterContainer } from "../centercontainer/Index";
import { Avatar } from "../avatar/Index";
import { Icon } from "../icon/Index";

export const ServerRooms = (): JSX.Element => {
  const {
    server: { name, _id }
  }: any = store.getState();

  return (
    <S.Section>
      <CenterContainer
        style={{
          borderBottom: "1px solid #232428",
          width: "100%",
          justifyContent: "flex-start",
          paddingBottom: "5px"
        }}
      >
        <Avatar src={TPHIcon} style={{ filter: "none" }} />
        <Label style={{ maxWidth: "inherit", overflow: "hidden" }}>
          {name}
        </Label>
      </CenterContainer>
      <Label style={{ width: "80%", margin: "0 auto", fontSize: "11px" }}>
        {_id}
      </Label>
      <CenterContainer>
        <Icon src={HashtagIcon} />
        <Label style={{ fontWeight: "bolder", color: "#fff" }}>main</Label>
      </CenterContainer>
    </S.Section>
  );
};
