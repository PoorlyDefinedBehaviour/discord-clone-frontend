import React from "react";

import {
  Container,
  H1,
  OptionContainer,
  OptionIcon,
  OptionLabel
} from "./Styles";

import { store } from "../../store/Index";

export function ServerMembers(): any {
  const { server }: any = store.getState();

  return (
    <Container>
      <H1>Staff - {server.staff.length}</H1>
      {server.staff.map(
        (user: any): any => (
          <OptionContainer key={user._id} style={{ marginTop: "10px" }}>
            <OptionIcon src={user.avatar} style={{ filter: "none" }} />
            <OptionLabel>{user.username}</OptionLabel>
          </OptionContainer>
        )
      )}

      <H1>Members - {server.members.length - server.staff.length}</H1>
      {server.members
        .filter(
          (user: any): boolean =>
            !server.staff.find((_user: any): any => _user._id === user._id)
        )
        .map(
          (user: any): any => (
            <OptionContainer key={user._id} style={{ marginTop: "10px" }}>
              <OptionIcon src={user.avatar} style={{ filter: "none" }} />
              <OptionLabel>{user.username}</OptionLabel>
            </OptionContainer>
          )
        )}
    </Container>
  );
}
