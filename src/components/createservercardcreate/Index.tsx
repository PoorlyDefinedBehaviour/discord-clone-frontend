import React, { useState } from "react";

import {
  CreateServerPopUpContainer,
  CreateServerPopUpInnerContainer,
  CreateServerPopUpActionDescription,
  CreateServerPopUpInnerContainerName,
  CreateServerInputContainer,
  CreateServerLabelAndInputContainer,
  OptionLabel,
  CreateServerInput,
  ImageInputButton,
  OptionIcon,
  CreateServerPopUpActionButton
} from "./Styles";

import ServerRegionImage from "../../assets/server-region.png";

import { ErrorMessage } from "../errormessage/Index";

import { api } from "../../services/Api";

import { CreateServer as CreateServerMutation } from "../../graphql/mutations/CreateServer";
import { store } from "../../store/Index";

export function CreateServerCardCreate({ backButtonClickHandler }): any {
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
            <CreateServerInput
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
            onClick={backButtonClickHandler}
          >
            Back
          </CreateServerPopUpActionButton>
        </CreateServerLabelAndInputContainer>
      </CreateServerPopUpInnerContainer>
    </CreateServerPopUpContainer>
  );
}
