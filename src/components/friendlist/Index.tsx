import React from "react";

import { UserRow, Status, OptionIcon, OptionLabel, GreenDot } from "./Styles";
import { store } from "../../store/Index";

export enum EFriendListFilters {
  ALL = 0,
  ONLINE,
  PENDING
}

export function FriendList({ filter }: any): any {
  const modes: Map<number, any> = new Map<number, any>();

  const { user }: any = store.getState();

  modes.set(
    EFriendListFilters.ALL,
    (user: any): any =>
      user.friends.map(
        (friend: any): any => (
          <UserRow key={Math.random()}>
            <OptionIcon src={friend.avatar} />
            <OptionLabel>{friend.username}</OptionLabel>
            <GreenDot color={friend.online ? "#43b480" : "#747F8D"} />
            <Status>{friend.online ? "Online" : "Offline"}</Status>
          </UserRow>
        )
      )
  );

  modes.set(
    EFriendListFilters.ONLINE,
    (user: any): any =>
      user.friends
        .filter((friend: any): boolean => friend.online)
        .map(
          (friend: any): any => (
            <UserRow key={Math.random()}>
              <OptionIcon src={friend.avatar} />
              <OptionLabel>{friend.username}</OptionLabel>
              <GreenDot color={friend.online} />
              <Status>Online</Status>
            </UserRow>
          )
        )
  );

  modes.set(
    EFriendListFilters.PENDING,
    (user: any): any =>
      user.friend_requests.map(
        (friend: any): any => (
          <UserRow key={Math.random()}>
            <OptionIcon src={friend.avatar} />
            <OptionLabel>{friend.username}</OptionLabel>
            <GreenDot color={friend.online} />
            <Status>Online</Status>
          </UserRow>
        )
      )
  );

  return modes.get(filter)(user);
}
