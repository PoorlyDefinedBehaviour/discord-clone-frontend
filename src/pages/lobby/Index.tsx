import React, { useState } from "react";

import {
  LeftNavBar,
  ServerIconContainer,
  ServerIcon,
  Container,
  Section,
  ContentOptionContainer,
  FriendListHeaderElement,
  FriendsContentNavbar,
  AddFriendButton,
  SearchBar,
  OptionContainer,
  OptionIcon,
  OptionLabel,
  DirectMessages,
  ContentSection,
  FriendListHeaderContainer,
  GreenDot,
  OnlineStatus,
  UserRow
} from "./Styles";

import HashtagIcon from "../../assets/hashtag.png";
import TPHIcon from "../../assets/server-icon.png";
import DiscordIcon from "../../assets/discord-icon.png";
import CreateServerIcon from "../../assets/plus.png";
import NitroIcon from "../../assets/start-up.png";
import ControllerIcon from "../../assets/gamepad-controller.png";
import BackpackIcon from "../../assets/school-book-bag.png";
import FriendsIcon from "../../assets/friends.png";
import AddFriendView from "../../components/addfriend/AddFriend";

import { isLoggedIn } from "../../services/Authentication";
import api from "../../services/Api";

import * as yup from "yup";

import { CreateServer as CreateServerMutation } from "../../graphql/mutations/CreateServer";
import { JoinServer as JoinServerMutation } from "../../graphql/mutations/JoinServer";
import CreateServerCard from "../../components/createservercard/Index";
import ServerChat from "../../components/serverchat/Index";
import ServerMembers from "../../components/servermembers/Index";

async function validate(field: string): Promise<any> {
  const schema = yup.object().shape({
    field: yup
      .string()
      .min(5, "must be at least 5 characters long")
      .max(255)
  });

  return await schema.validate({ field }, { abortEarly: false });
}

export default function Lobby({ history }): any {
  /**
   * TODO: Refactor this later
   */
  const [createServerCardOnView, setCreateServerCardOnView] = useState(false);
  const [currentServerCard, setCurrentCurrentServerCard] = useState("main");
  const [submitting, setSubmitting] = useState(false);

  const [serverName, setServerName] = useState("");
  const [inviteLink, setInviteLink] = useState("");
  const [invalidServerName, setInvalidServerName] = useState(false);
  const [invalidInviteLink, setInvalidInviteLink] = useState(false);

  const [addFriendOnView, setAddFriendOnView] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendListOnView, setFriendListOnView] = useState(false);

  const [friendListFilter, setFriendListFilter] = useState("");

  // @ts-ignore
  const [directMessagesOnView, setDirectMessagesOnView] = useState(false);

  const friendList: Array<any> = [
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

  const getFriendList = (): any => {
    switch (friendListFilter) {
      case "all":
        return friendList.map(
          (friend: any): any => (
            <UserRow key={Math.random()}>
              <OptionIcon src={friend.avatar} />
              <OptionLabel>{friend.username}</OptionLabel>
              <GreenDot color={friend.online} />
              <OnlineStatus>
                {friend.online ? "Online" : "Offline"}
              </OnlineStatus>
            </UserRow>
          )
        );
      case "online":
        return friendList
          .filter((friend: any): boolean => friend.online)
          .map(
            (friend: any): any => (
              <UserRow key={Math.random()}>
                <OptionIcon src={friend.avatar} />
                <OptionLabel>{friend.username}</OptionLabel>
                <GreenDot color={friend.online} />
                <OnlineStatus>Online</OnlineStatus>
              </UserRow>
            )
          );
      case "pending":
    }
  };

  const createServer = async (): Promise<void> => {
    if (!isLoggedIn()) history.push("/");

    console.log("createServer");

    if (submitting) return;

    try {
      setSubmitting(true);
      setInvalidInviteLink(false);
      setInvalidServerName(false);
      await validate(serverName);
      await api.post("", CreateServerMutation(serverName));
    } catch (error) {
      setInvalidServerName(true);
    } finally {
      setSubmitting(false);
    }
  };

  const joinServer = async (): Promise<void> => {
    if (!isLoggedIn()) history.push("/");

    console.log("joinServer");

    if (submitting) return;

    try {
      setSubmitting(true);
      setInvalidInviteLink(false);
      setInvalidServerName(false);
      await validate(inviteLink);
      await api.post("", JoinServerMutation(serverName));
    } catch (error) {
      setInvalidInviteLink(true);
    } finally {
      setSubmitting(false);
    }
  };

  const searchFriend = async (): Promise<void> => {
    console.log(`Searching for ${friendName}`);
    if (friendName) return;
  };

  return (
    <Container>
      <LeftNavBar>
        <ServerIconContainer>
          <ServerIcon src={DiscordIcon} />
        </ServerIconContainer>
        <ServerIconContainer
          onClick={(): void => setCreateServerCardOnView(true)}
        >
          <ServerIcon src={CreateServerIcon} />
        </ServerIconContainer>
      </LeftNavBar>

      {directMessagesOnView && (
        <Section>
          <SearchBar placeholder="Find or start a conversation" />
          <OptionContainer>
            <OptionIcon src={ControllerIcon} />
            <OptionLabel>Activity</OptionLabel>
          </OptionContainer>
          <OptionContainer>
            <OptionIcon src={BackpackIcon} />
            <OptionLabel>Library</OptionLabel>
          </OptionContainer>
          <OptionContainer>
            <OptionIcon src={NitroIcon} />
            <OptionLabel>Nitro</OptionLabel>
          </OptionContainer>
          <OptionContainer>
            <OptionIcon src={FriendsIcon} />
            <OptionLabel>Friends</OptionLabel>
          </OptionContainer>

          <DirectMessages>Direct Messages</DirectMessages>
        </Section>
      )}

      <Section>
        <OptionContainer
          style={{ borderBottom: "1px solid #232428", height: "56px" }}
        >
          <OptionIcon src={TPHIcon} style={{ filter: "none" }} />
          <OptionLabel style={{ maxWidth: "inherit", overflow: "hidden" }}>
            server name
          </OptionLabel>
        </OptionContainer>
        <OptionContainer>
          <OptionIcon src={HashtagIcon} />
          <OptionLabel style={{ fontWeight: "bolder", color: "#fff" }}>
            chat room
          </OptionLabel>
        </OptionContainer>
        <OptionContainer>
          <OptionIcon src={HashtagIcon} />
          <OptionLabel style={{ fontWeight: "bolder", color: "#fff" }}>
            chat room
          </OptionLabel>
        </OptionContainer>
        <OptionContainer>
          <OptionIcon src={HashtagIcon} />
          <OptionLabel style={{ fontWeight: "bolder", color: "#fff" }}>
            chat room
          </OptionLabel>
        </OptionContainer>
      </Section>

      <ContentSection style={{ display: "none" }}>
        <FriendsContentNavbar>
          <ContentOptionContainer
            style={{ marginLeft: "20px" }}
            onClick={(): void => {
              setFriendListOnView(true);
              setAddFriendOnView(false);
              setCreateServerCardOnView(false);
            }}
          >
            <OptionIcon src={FriendsIcon} />
            <OptionLabel>Friends</OptionLabel>
          </ContentOptionContainer>

          <ContentOptionContainer
            onClick={(): void => {
              setFriendListOnView(true);
              setFriendListFilter("online");
              setAddFriendOnView(false);
              setCreateServerCardOnView(false);
            }}
          >
            <OptionLabel style={{ margin: "0 auto" }}>Online</OptionLabel>
          </ContentOptionContainer>
          <ContentOptionContainer
            onClick={(): void => {
              setFriendListOnView(true);
              setFriendListFilter("all");
              setAddFriendOnView(false);
              setCreateServerCardOnView(false);
            }}
          >
            <OptionLabel style={{ margin: "0 auto" }}>All</OptionLabel>
          </ContentOptionContainer>
          <ContentOptionContainer
            onClick={(): void => {
              setFriendListOnView(true);
              setFriendListFilter("pending");
              setAddFriendOnView(false);
              setCreateServerCardOnView(false);
            }}
          >
            <OptionLabel style={{ margin: "0 auto" }}>Pending</OptionLabel>
          </ContentOptionContainer>
          <ContentOptionContainer style={{ margin: "0px 40px 0px 40px" }}>
            <AddFriendButton
              onClick={(): void => {
                setAddFriendOnView(true);
                setFriendListOnView(false);
              }}
            >
              Add Friend
            </AddFriendButton>
          </ContentOptionContainer>
        </FriendsContentNavbar>
        {friendListOnView && (
          <FriendListHeaderContainer>
            <FriendListHeaderElement>Avatar</FriendListHeaderElement>
            <FriendListHeaderElement>Name</FriendListHeaderElement>
            <FriendListHeaderElement>Status</FriendListHeaderElement>
          </FriendListHeaderContainer>
        )}
        {friendListOnView && getFriendList()}
        {addFriendOnView && AddFriendView({ setFriendName, searchFriend })}
        {createServerCardOnView &&
          CreateServerCard({
            currentServerCard,
            setCurrentCurrentServerCard,
            setCreateServerCardOnView,
            createServer,
            onServerNameChange: (e: any): void => setServerName(e.target.value),
            invalidServerName,
            joinServer,
            onInviteLinkChange: (e: any): void => setInviteLink(e.target.value),
            invalidInviteLink
          })}
      </ContentSection>
      <ServerChat />
      <ServerMembers />
    </Container>
  );
}
