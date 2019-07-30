import React, { useState } from "react";

import * as S from "./Styles";

import { ErrorMessage } from "../errormessage/Index";

import { store } from "../../store/Index";

import { api } from "../../services/Api";

import { JoinServer as JoinServerMutation } from "../../graphql/mutations/JoinServer";
import { Label } from "../label/Index";

export const CreateServerCardJoin = ({
  backButtonClickHandler
}: any): JSX.Element => {
  const [state, setState] = useState({
    invalidServerId: false,
    serverId: ""
  });

  const joinServer = async (): Promise<void> => {
    if (!state.serverId) return;

    try {
      console.log("Joinserver", state.serverId);
      const {
        data: {
          data: { join_server }
        }
      }: any = await api.post("", JoinServerMutation(state.serverId));

      switch (join_server.status) {
        case 201:
          const { user }: any = store.getState();

          user.servers.push(join_server.server);

          store.dispatch({
            type: "SET_USER",
            user,
            token: user.token
          });

          break;
        case 400:
          await setState({
            ...state,
            invalidServerId: true
          });
          break;
        default:
          console.error("something went wrong", join_server);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.CreateServerPopUpContainer>
      <S.CreateServerPopUpInnerContainer>
        <S.CreateServerPopUpInnerContainerName style={{ color: "#53BB8C" }}>
          JOIN A SERVER
        </S.CreateServerPopUpInnerContainerName>
        <S.CreateServerPopUpActionDescription
          style={{ fontWeight: "bolder", fontSize: "14px" }}
        >
          Enter an instant invite below to join an existing server. The invite
          will look something like these:
        </S.CreateServerPopUpActionDescription>
        <Label style={{ fontSize: "11px", color: "#8C9EE0" }}>
          https://discord.gg/qJq5C
        </Label>
        <Label style={{ fontSize: "11px", color: "#8C9EE0" }}>
          https://discord.gg/discord-developers-qJq5C
        </Label>
        <S.CreateServerInputContainer>
          <S.CreateServerLabelAndInputContainer
            style={{ width: "80%", marginLeft: "10%" }}
          >
            <Label
              style={{
                color: "87909C",
                marginLeft: "-77%"
              }}
            />
            <S.CreateServerInput
              placeholder="Enter instant invite"
              onChange={(e: any): void =>
                setState({ ...state, serverId: e.target.value })
              }
            />
            {state.invalidServerId && (
              <ErrorMessage style={{ marginTop: "9%", marginLeft: "-24%" }}>
                Invite link must be valid
              </ErrorMessage>
            )}
          </S.CreateServerLabelAndInputContainer>
        </S.CreateServerInputContainer>
        <S.CreateServerLabelAndInputContainer
          style={{
            marginTop: "20%",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%"
          }}
        >
          <S.CreateServerPopUpActionButton
            color={"#99AAB5"}
            style={{
              marginLeft: "20px",
              marginRight: "50%",
              width: "100px",
              color: "#fff"
            }}
            onClick={backButtonClickHandler}
          >
            Back
          </S.CreateServerPopUpActionButton>
          <S.CreateServerPopUpActionButton
            color={"#43B581"}
            style={{ marginLeft: "20px", width: "100px", color: "#fff" }}
            onClick={joinServer}
          >
            Join
          </S.CreateServerPopUpActionButton>
        </S.CreateServerLabelAndInputContainer>
      </S.CreateServerPopUpInnerContainer>
    </S.CreateServerPopUpContainer>
  );
};
