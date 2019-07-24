import React, { useState } from "react";

import {
  ContentSection,
  FriendsContentNavbar,
  ContentOptionContainer,
  OptionIcon,
  OptionLabel,
  AddFriendButton,
  FriendListHeaderContainer,
  FriendListHeaderElement
} from "./Styles";

import FriendsIcon from "../../assets/friends.png";
import { AddFriend } from "../addfriend/AddFriend";

import { FriendList, EFriendListFilters } from "../friendlist/Index";

export function FriendsSection(): any {
  const [state, setState] = useState({
    componentsOnView: {
      addFriend: false,
      friendList: true,
      createServerCard: false
    },
    friendListFilter: EFriendListFilters.ALL,
    friendName: ""
  });

  return (
    <ContentSection>
      <FriendsContentNavbar>
        <ContentOptionContainer
          style={{ marginLeft: "20px" }}
          onClick={() =>
            setState({
              ...state,
              componentsOnView: {
                friendList: true,
                addFriend: false,
                createServerCard: false
              }
            })
          }
        >
          <OptionIcon src={FriendsIcon} />
          <OptionLabel>Friends</OptionLabel>
        </ContentOptionContainer>

        <ContentOptionContainer
          onClick={() =>
            setState({
              ...state,
              componentsOnView: {
                friendList: true,
                addFriend: false,
                createServerCard: false
              },
              friendListFilter: EFriendListFilters.ONLINE
            })
          }
        >
          <OptionLabel style={{ margin: "0 auto" }}>Online</OptionLabel>
        </ContentOptionContainer>
        <ContentOptionContainer
          onClick={() =>
            setState({
              ...state,
              componentsOnView: {
                friendList: true,
                addFriend: false,
                createServerCard: false
              },
              friendListFilter: EFriendListFilters.ALL
            })
          }
        >
          <OptionLabel style={{ margin: "0 auto" }}>All</OptionLabel>
        </ContentOptionContainer>
        <ContentOptionContainer
          onClick={() =>
            setState({
              ...state,
              componentsOnView: {
                friendList: true,
                addFriend: false,
                createServerCard: false
              },
              friendListFilter: EFriendListFilters.PENDING
            })
          }
        >
          <OptionLabel style={{ margin: "0 auto" }}>Pending</OptionLabel>
        </ContentOptionContainer>
        <ContentOptionContainer style={{ margin: "0px 40px 0px 40px" }}>
          <AddFriendButton
            onClick={() =>
              setState({
                ...state,
                componentsOnView: {
                  ...state.componentsOnView,
                  addFriend: true,
                  friendList: false
                }
              })
            }
          >
            Add Friend
          </AddFriendButton>
        </ContentOptionContainer>
      </FriendsContentNavbar>
      {state.componentsOnView.friendList && (
        <FriendListHeaderContainer>
          <FriendListHeaderElement>Avatar</FriendListHeaderElement>
          <FriendListHeaderElement>Name</FriendListHeaderElement>
          <FriendListHeaderElement>Status</FriendListHeaderElement>
        </FriendListHeaderContainer>
      )}
      {state.componentsOnView.friendList &&
        FriendList({ filter: state.friendListFilter })}
      {state.componentsOnView.addFriend && <AddFriend />}
    </ContentSection>
  );
}
