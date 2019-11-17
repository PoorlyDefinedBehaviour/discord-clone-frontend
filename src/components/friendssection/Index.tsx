import React, { useState } from "react";
import * as S from "./Styles";
import FriendsIcon from "../../assets/friends.png";
import AddFriend from "../addfriend/AddFriend";
import FriendList, { EFriendListFilters } from "../friendlist/Index";
import Label from "../label/Index";
import CenterContainer from "../centercontainer/Index";
import Navbar from "../navbar/Index";
import Button from "../button/Index";
import Icon from "../icon/Index";

export default function FriendsSection(): JSX.Element {
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
    <S.ContentSection>
      <Navbar>
        <CenterContainer>
          <Icon src={FriendsIcon} />
          <Label
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
            Friends
          </Label>
        </CenterContainer>

        <CenterContainer>
          <Label
            style={{ margin: "0 auto" }}
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
            Online
          </Label>
        </CenterContainer>
        <CenterContainer>
          <Label
            style={{ margin: "0 auto" }}
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
            All
          </Label>
        </CenterContainer>
        <CenterContainer>
          <Label
            style={{ margin: "0 auto" }}
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
            Pending
          </Label>
        </CenterContainer>
        <CenterContainer>
          <Button
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
          </Button>
        </CenterContainer>
      </Navbar>
      {state.componentsOnView.friendList && (
        <S.FriendListHeaderContainer>
          <S.FriendListHeaderElement>Avatar</S.FriendListHeaderElement>
          <S.FriendListHeaderElement>Name</S.FriendListHeaderElement>
          <S.FriendListHeaderElement>Status</S.FriendListHeaderElement>
        </S.FriendListHeaderContainer>
      )}
      {state.componentsOnView.friendList &&
        FriendList({ filter: state.friendListFilter })}
      {state.componentsOnView.addFriend && <AddFriend />}
    </S.ContentSection>
  );
}
