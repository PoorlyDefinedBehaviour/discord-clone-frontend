import React from "react";

import { UserRow, Status, OptionIcon, OptionLabel, GreenDot } from "./Styles";

export enum EFriendListFilters {
  ALL = 0,
  ONLINE,
  PENDING
}

export default function FriendList({ friends, filter }): any {
  const modes: Map<number, any> = new Map<number, any>();

  modes.set(EFriendListFilters.ALL, friends =>
    friends.map(
      (friend: any): any => (
        <UserRow key={Math.random()}>
          <OptionIcon src={friend.avatar} />
          <OptionLabel>{friend.username}</OptionLabel>
          <GreenDot color={friend.online} />
          <Status>{friend.online ? "Online" : "Offline"}</Status>
        </UserRow>
      )
    )
  );

  modes.set(EFriendListFilters.ONLINE, friends =>
    friends
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

  modes.set(EFriendListFilters.PENDING, friends =>
    console.log("todo: implement pending friend requests")
  );

  return modes.get(filter)(friends);
}
