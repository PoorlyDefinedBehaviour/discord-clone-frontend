import React from "react";

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
import AddFriendView from "../addfriend/AddFriend";
import FriendList, { EFriendListFilters } from "../friendlist/Index";

import NitroIcon from "../../assets/start-up.png";
/**
 * Grab friends from redux or contextapi
 */
const friends: Array<any> = [
  {
    avatar: NitroIcon,
    username: "John doe",
    online: true
  },
  {
    avatar: NitroIcon,
    username: "John doe",
    online: false
  },
  {
    avatar: NitroIcon,
    username: "John doe",
    online: false
  },
  {
    avatar: NitroIcon,
    username: "John doe",
    online: true
  }
];

export default class FriendsSection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      componentsOnView: {
        addFriend: false,
        friendList: false,
        createServerCard: false
      },
      friendListFilter: EFriendListFilters.ALL,
      friendName: ""
    };
  }

  render() {
    return (
      <ContentSection>
        <FriendsContentNavbar>
          <ContentOptionContainer
            style={{ marginLeft: "20px" }}
            onClick={async (): Promise<void> =>
              await this.setState({
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
            onClick={async (): Promise<void> =>
              await this.setState({
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
            onClick={async (): Promise<void> =>
              await this.setState({
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
            onClick={async (): Promise<void> =>
              await this.setState({
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
              onClick={async (): Promise<void> =>
                await this.setState({
                  componentsOnView: { addFriend: true, friendList: false }
                })
              }
            >
              Add Friend
            </AddFriendButton>
          </ContentOptionContainer>
        </FriendsContentNavbar>
        {this.state.componentsOnView.friendList && (
          <FriendListHeaderContainer>
            <FriendListHeaderElement>Avatar</FriendListHeaderElement>
            <FriendListHeaderElement>Name</FriendListHeaderElement>
            <FriendListHeaderElement>Status</FriendListHeaderElement>
          </FriendListHeaderContainer>
        )}
        {this.state.componentsOnView.friendList &&
          FriendList({ friends, filter: this.state.friendListFilter })}
        {this.state.componentsOnView.addFriend && <AddFriendView />}
      </ContentSection>
    );
  }
}
