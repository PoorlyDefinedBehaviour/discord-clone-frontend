import React from "react";

import {
  Container,
  LeftNavBar,
  FriendsAndMessagesSection,
  ServerIconContainer,
  ServerIcon,
  SearchBar,
  OptionContainer,
  OptionIcon,
  OptionLabel,
  DirectMessages,
  ContentSection,
  FriendsContentNavbar,
  ContentOptionContainer,
  AddFriendButton,
  UserRow,
  GreenDot,
  OnlineStatus,

  // @ts-ignore
  CreateServerPopUpBackground,
  CreateServerPopUpContainer,
  // @ts-ignore
  CreateServerPopUpBackgroundContainer,
  // @ts-ignore
  CreateServerPopUpAction,
  // @ts-ignore
  CreateServerPopUpActionDescription,
  // @ts-ignore
  CreateServerPopUpActionImage,
  // @ts-ignore
  CreateServerPopUpActionButton,
  CreateServerPopUpInnerContainer,
  CreateServerPopUpInnerContainerName,
  CreateServerInput,
  CreateServerInputContainer,
  CreateServerLabelAndInputContainer,
  ImageInputButton
} from "./Styles";

import DiscordIcon from "../../assets/discord-icon.png";
import CreateServerIcon from "../../assets/plus.png";
import FriendsIcon from "../../assets/friends.png";
import ControllerIcon from "../../assets/gamepad-controller.png";
import BackpackIcon from "../../assets/school-book-bag.png";
import NitroIcon from "../../assets/start-up.png";
import ServerRegionImage from "../../assets/server-region.png";
/*
import CreateServerActionIcon from "../../assets/create-server.svg";
import JoinServerActionIcon from "../../assets/join-server.png";

import CreateServerPopUpLeftBackground from "../../assets/left-background.png";
import CreateServerPopUpRightBackground from "../../assets/right-background.png";
*/

export default function Lobby({ history }): any {
  return (
    <Container>
      <LeftNavBar>
        <ServerIconContainer>
          <ServerIcon src={DiscordIcon} />
        </ServerIconContainer>
        <ServerIconContainer>
          <ServerIcon src={CreateServerIcon} />
        </ServerIconContainer>
      </LeftNavBar>

      <FriendsAndMessagesSection>
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
      </FriendsAndMessagesSection>

      <ContentSection>
        <FriendsContentNavbar>
          <ContentOptionContainer style={{ marginLeft: "20px" }}>
            <OptionIcon src={FriendsIcon} />
            <OptionLabel>Friends</OptionLabel>
          </ContentOptionContainer>

          <ContentOptionContainer>
            <OptionLabel style={{ margin: "0 auto" }}>Online</OptionLabel>
          </ContentOptionContainer>
          <ContentOptionContainer>
            <OptionLabel style={{ margin: "0 auto" }}>All</OptionLabel>
          </ContentOptionContainer>
          <ContentOptionContainer>
            <OptionLabel style={{ margin: "0 auto" }}>Pending</OptionLabel>
          </ContentOptionContainer>
          <ContentOptionContainer style={{ margin: "0px 40px 0px 40px" }}>
            <AddFriendButton>Add Friend</AddFriendButton>
          </ContentOptionContainer>
        </FriendsContentNavbar>

        <UserRow>
          <OptionIcon src={NitroIcon} />
          <OptionLabel>Lorem Ipsum</OptionLabel>

          <GreenDot />
          <OnlineStatus>Online</OnlineStatus>
        </UserRow>
        <UserRow>
          <OptionIcon src={NitroIcon} />
          <OptionLabel>Lorem Ipsum</OptionLabel>

          <GreenDot />
          <OnlineStatus>Online</OnlineStatus>
        </UserRow>
        <UserRow>
          <OptionIcon src={NitroIcon} />
          <OptionLabel>Lorem Ipsum</OptionLabel>

          <GreenDot />
          <OnlineStatus>Online</OnlineStatus>
        </UserRow>
      </ContentSection>
      {/*
      <CreateServerPopUpContainer>
        <CreateServerPopUpBackgroundContainer>
          <CreateServerPopUpBackground src={CreateServerPopUpLeftBackground} />
          <CreateServerPopUpBackground src={CreateServerPopUpRightBackground} />
          <CreateServerPopUpAction>
            <CreateServerPopUpActionName color={"#7289DA"}>
              Create
            </CreateServerPopUpActionName>
            <CreateServerPopUpActionDescription>
              Create a new server and invite your friends. It's free!
            </CreateServerPopUpActionDescription>
            <CreateServerPopUpActionImage src={CreateServerActionIcon} />
            <CreateServerPopUpActionButton color={"#7289DA"}>
              Create a server
            </CreateServerPopUpActionButton>
          </CreateServerPopUpAction>

          <CreateServerPopUpAction style={{ left: "60%" }}>
            <CreateServerPopUpActionName color={"#3CA374"}>
              Join
            </CreateServerPopUpActionName>
            <CreateServerPopUpActionDescription>
              Enter an instand invite and join your friend's server.
            </CreateServerPopUpActionDescription>
            <CreateServerPopUpActionImage
              src={JoinServerActionIcon}
              style={{ marginTop: "30px", marginBottom: "30px" }}
            />
            <CreateServerPopUpActionButton color={"#3CA374"}>
              Create a server
            </CreateServerPopUpActionButton>
          </CreateServerPopUpAction>
        </CreateServerPopUpBackgroundContainer>
      </CreateServerPopUpContainer>
    */}

      <CreateServerPopUpContainer>
        <CreateServerPopUpInnerContainer>
          <CreateServerPopUpInnerContainerName>
            CREATE YOUR SERVER
          </CreateServerPopUpInnerContainerName>
          <CreateServerPopUpActionDescription
            style={{ fontWeight: "bolder", fontSize: "14px" }}
          >
            By creating a server, you will have access to voice and text chat to
            use amongst your friends.
          </CreateServerPopUpActionDescription>
          <CreateServerInputContainer>
            <CreateServerLabelAndInputContainer>
              <OptionLabel
                style={{
                  color: "87909C",
                  marginLeft: "-77%"
                }}
              >
                SERVER NAME
              </OptionLabel>
              <CreateServerInput placeholder="Enter a server name" />
            </CreateServerLabelAndInputContainer>
            <ImageInputButton>
              Change <br />
              Icon
            </ImageInputButton>
          </CreateServerInputContainer>
          <CreateServerLabelAndInputContainer
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <OptionIcon
              src={ServerRegionImage}
              style={{
                width: "280px",
                height: "auto",
                filter: "none",
                marginLeft: "-10%"
              }}
            />
            <CreateServerPopUpActionButton
              color={"#677BC4"}
              style={{ width: "100px", color: "#fff" }}
            >
              Create
            </CreateServerPopUpActionButton>
          </CreateServerLabelAndInputContainer>
        </CreateServerPopUpInnerContainer>
      </CreateServerPopUpContainer>
    </Container>
  );
}
