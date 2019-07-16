import React from "react";

import {
  CreateServerPopUpContainer,
  CreateServerPopUpAction,
  CreateServerPopUpActionName,
  CreateServerPopUpActionImage,
  CreateServerPopUpBackground,
  CreateServerPopUpActionDescription,
  CreateServerPopUpBackgroundContainer,
  CreateServerPopUpActionButton,
  OptionLabel,
  CreateServerPopUpInnerContainer,
  CreateServerLabelAndInputContainer,
  CreateServerInputContainer,
  CreateServerPopUpInnerContainerName,
  CreateServerInput,
  ImageInputButton,
  OptionIcon
} from "./Styles";

import ServerRegionImage from "../../assets/server-region.png";

import CreateServerActionIcon from "../../assets/create-server.svg";
import JoinServerActionIcon from "../../assets/join-server.png";

import CreateServerPopUpLeftBackground from "../../assets/left-background.png";
import CreateServerPopUpRightBackground from "../../assets/right-background.png";
import { ErrorMessage } from "../../pages/register/Styles";

export default function CreateServerCard({
  currentServerCard,
  setCurrentCurrentServerCard,
  setCreateServerCardOnView,
  createServer,
  onServerNameChange,
  invalidServerName,
  joinServer,
  onInviteLinkChange,
  invalidInviteLink
}): any {
  switch (currentServerCard) {
    case "main":
      return (
        <CreateServerPopUpContainer>
          <CreateServerPopUpActionButton
            style={{ width: "20%", marginLeft: "80%" }}
            color={"#E2E3E7"}
            onClick={(): void => setCreateServerCardOnView(false)}
          >
            Close
          </CreateServerPopUpActionButton>
          <CreateServerPopUpBackgroundContainer>
            <CreateServerPopUpBackground
              src={CreateServerPopUpLeftBackground}
            />
            <CreateServerPopUpBackground
              src={CreateServerPopUpRightBackground}
            />
            <CreateServerPopUpAction>
              <CreateServerPopUpActionName color={"#7289DA"}>
                Create
              </CreateServerPopUpActionName>
              <CreateServerPopUpActionDescription>
                Create a new server and invite your friends. It's free!
              </CreateServerPopUpActionDescription>
              <CreateServerPopUpActionImage src={CreateServerActionIcon} />
              <CreateServerPopUpActionButton
                color={"#7289DA"}
                onClick={(): void => setCurrentCurrentServerCard("create")}
              >
                Create a server
              </CreateServerPopUpActionButton>
            </CreateServerPopUpAction>

            <CreateServerPopUpAction style={{ left: "60%" }}>
              <CreateServerPopUpActionName color={"#3CA374"}>
                Join
              </CreateServerPopUpActionName>
              <CreateServerPopUpActionDescription>
                Enter an instant invite and join your friend's server.
              </CreateServerPopUpActionDescription>
              <CreateServerPopUpActionImage
                src={JoinServerActionIcon}
                style={{ marginTop: "30px", marginBottom: "30px" }}
              />
              <CreateServerPopUpActionButton
                color={"#3CA374"}
                onClick={(): void => setCurrentCurrentServerCard("join")}
              >
                Join a server
              </CreateServerPopUpActionButton>
            </CreateServerPopUpAction>
          </CreateServerPopUpBackgroundContainer>
        </CreateServerPopUpContainer>
      );

    case "create":
      return (
        <CreateServerPopUpContainer>
          <CreateServerPopUpInnerContainer>
            <CreateServerPopUpInnerContainerName>
              CREATE YOUR SERVER
            </CreateServerPopUpInnerContainerName>
            <CreateServerPopUpActionDescription
              style={{ fontWeight: "bolder", fontSize: "14px" }}
            >
              By creating a server, you will have access to voice and text chat
              to use amongst your friends.
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
                <CreateServerInput
                  placeholder="Enter a server name"
                  onChange={onServerNameChange}
                />
                {invalidServerName && (
                  <ErrorMessage
                    style={{ marginTop: "12%", marginLeft: "-29%" }}
                  >
                    Server name must be valid
                  </ErrorMessage>
                )}
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
                onClick={createServer}
              >
                Create
              </CreateServerPopUpActionButton>
              <CreateServerPopUpActionButton
                color={"#99AAB5"}
                style={{ marginLeft: "20px", width: "100px", color: "#fff" }}
                onClick={(): void => setCurrentCurrentServerCard("main")}
              >
                Back
              </CreateServerPopUpActionButton>
            </CreateServerLabelAndInputContainer>
          </CreateServerPopUpInnerContainer>
        </CreateServerPopUpContainer>
      );

    case "join":
      return (
        <CreateServerPopUpContainer>
          <CreateServerPopUpInnerContainer>
            <CreateServerPopUpInnerContainerName style={{ color: "#53BB8C" }}>
              JOIN A SERVER
            </CreateServerPopUpInnerContainerName>
            <CreateServerPopUpActionDescription
              style={{ fontWeight: "bolder", fontSize: "14px" }}
            >
              Enter an instant invite below to join an existing server. The
              invite will look something like these:
            </CreateServerPopUpActionDescription>
            <OptionLabel style={{ fontSize: "11px", color: "#8C9EE0" }}>
              https://discord.gg/qJq5C
            </OptionLabel>
            <OptionLabel style={{ fontSize: "11px", color: "#8C9EE0" }}>
              https://discord.gg/discord-developers-qJq5C
            </OptionLabel>
            <CreateServerInputContainer>
              <CreateServerLabelAndInputContainer
                style={{ width: "80%", marginLeft: "10%" }}
              >
                <OptionLabel
                  style={{
                    color: "87909C",
                    marginLeft: "-77%"
                  }}
                />
                <CreateServerInput
                  placeholder="Enter instant invite"
                  onChange={(e: any): void => onInviteLinkChange(e)}
                />
                {invalidInviteLink && (
                  <ErrorMessage style={{ marginTop: "9%", marginLeft: "-24%" }}>
                    Invite link must be valid
                  </ErrorMessage>
                )}
              </CreateServerLabelAndInputContainer>
            </CreateServerInputContainer>
            <CreateServerLabelAndInputContainer
              style={{
                marginTop: "20%",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%"
              }}
            >
              <CreateServerPopUpActionButton
                color={"#99AAB5"}
                style={{
                  marginLeft: "20px",
                  marginRight: "50%",
                  width: "100px",
                  color: "#fff"
                }}
                onClick={(): void => setCurrentCurrentServerCard("main")}
              >
                Back
              </CreateServerPopUpActionButton>
              <CreateServerPopUpActionButton
                color={"#43B581"}
                style={{ marginLeft: "20px", width: "100px", color: "#fff" }}
                onClick={joinServer}
              >
                Join
              </CreateServerPopUpActionButton>
            </CreateServerLabelAndInputContainer>
          </CreateServerPopUpInnerContainer>
        </CreateServerPopUpContainer>
      );
  }
}
