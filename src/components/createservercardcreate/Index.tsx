import React, { useState } from "react";

import * as S from "./Styles";

import ServerRegionImage from "../../assets/server-region.png";

import { ErrorMessage } from "../errormessage/Index";
import { Label } from "../label/Index";

import { api } from "../../services/Api";
import { store } from "../../store/Index";
import { CreateServer as CreateServerMutation } from "../../graphql/mutations/CreateServer";

export const CreateServerCardCreate = ({
  backButtonClickHandler
}): JSX.Element => {
  const [state, setState] = useState({
    invalidServerName: false,
    serverNameAlreadyInUse: false,
    serverName: ""
  });

  const createServer = async (): Promise<void> => {
    try {
      const {
        data: {
          data: { create_server }
        }
      }: any = await api.post("", CreateServerMutation(state.serverName));
      console.log(create_server);
      switch (create_server.status) {
        case 201:
          const { user }: any = store.getState();

          user.servers.push(create_server.server);

          store.dispatch({
            type: "SET_USER",
            user,
            token: user.token
          });

          break;
        case 400:
          await setState({
            ...state,
            invalidServerName: false,
            serverNameAlreadyInUse: true
          });
          break;
        default:
          console.error("Something went wrong", create_server);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.CreateServerPopUpContainer>
      <S.CreateServerPopUpInnerContainer>
        <S.CreateServerPopUpInnerContainerName>
          CREATE YOUR SERVER
        </S.CreateServerPopUpInnerContainerName>
        <S.CreateServerPopUpActionDescription
          style={{ fontWeight: "bolder", fontSize: "14px" }}
        >
          By creating a server, you will have access to voice and text chat to
          use amongst your friends.
        </S.CreateServerPopUpActionDescription>
        <S.CreateServerInputContainer>
          <S.CreateServerLabelAndInputContainer>
            <Label>SERVER NAME</Label>
            <S.CreateServerInput
              style={{ marginLeft: "20%" }}
              placeholder="Enter a server name"
              onChange={(e: any): void =>
                setState({ ...state, serverName: e.target.value })
              }
            />
            {state.invalidServerName && (
              <ErrorMessage style={{ marginTop: "12%", marginLeft: "-29%" }}>
                Server name must be valid
              </ErrorMessage>
            )}
            {state.serverNameAlreadyInUse && (
              <ErrorMessage style={{ marginTop: "12%", marginLeft: "-29%" }}>
                Server name is already in use
              </ErrorMessage>
            )}
          </S.CreateServerLabelAndInputContainer>
          <S.ImageInputButton>
            Change <br />
            Icon
          </S.ImageInputButton>
        </S.CreateServerInputContainer>
        <S.CreateServerLabelAndInputContainer
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <img src={ServerRegionImage} alt="Server region" />
          <S.CreateServerPopUpActionButton
            color={"#677BC4"}
            style={{ width: "100px", color: "#fff" }}
            onClick={createServer}
          >
            Create
          </S.CreateServerPopUpActionButton>
          <S.CreateServerPopUpActionButton
            color={"#99AAB5"}
            style={{ marginLeft: "20px", width: "100px", color: "#fff" }}
            onClick={backButtonClickHandler}
          >
            Back
          </S.CreateServerPopUpActionButton>
        </S.CreateServerLabelAndInputContainer>
      </S.CreateServerPopUpInnerContainer>
    </S.CreateServerPopUpContainer>
  );
};
