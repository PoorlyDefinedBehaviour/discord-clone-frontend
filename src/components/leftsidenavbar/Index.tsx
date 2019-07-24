import React, { useState } from "react";

import { Nav, IconContainer, Icon } from "./Styles";

import DiscordIcon from "../../assets/discord-icon.png";
import CreateServerIcon from "../../assets/plus.png";

import { CreateServerCard } from "../createservercard/Index";
import { EViews } from "../../pages/lobby/Index";

import { store } from "../../store/Index";

import { Server as ServerQuery } from "../../graphql/queries/Server";

import { api } from "../../services/Api";

export function LeftSideNavbar({ setCurrentView }: any): any {
  const [state, setState] = useState({
    joiningServer: false,
    componentsOnView: {
      createServerCard: false
    },
    userServers: store.getState().user.servers
  });

  store.subscribe(
    (): void =>
      setState({ ...state, userServers: store.getState().user.servers })
  );

  const join = async (serverId: string): Promise<void> => {
    if (state.joiningServer) {
      return;
    }

    try {
      setState({ ...state, joiningServer: true });

      const {
        data: {
          data: { server }
        }
      }: any = await api.post("", ServerQuery(serverId));

      switch (server.status) {
        case 200:
          store.dispatch({ type: "SET_SERVER", server: server.server });
          setCurrentView(EViews.MAIN);
          setCurrentView(EViews.SERVER);
          break;
        case 500:
          throw new Error("internal server error");
      }
    } catch (e) {
      // tell user something went wrong in the server;
    } finally {
      setState({ ...state, joiningServer: false });
    }
  };

  const getUserServers = () =>
    state.userServers.map(
      (server: any): any => (
        <IconContainer
          key={server._id}
          onClick={async (): Promise<void> => await join(server._id)}
        >
          <Icon src={server.logo} />
        </IconContainer>
      )
    );

  return (
    <>
      <Nav>
        <IconContainer onClick={(): void => setCurrentView(EViews.MAIN)}>
          <Icon src={DiscordIcon} />
        </IconContainer>
        <IconContainer
          onClick={(): void =>
            setState({ ...state, componentsOnView: { createServerCard: true } })
          }
        >
          <Icon src={CreateServerIcon} />
        </IconContainer>
        {getUserServers()}
      </Nav>
      {state.componentsOnView.createServerCard && (
        <CreateServerCard
          setOnView={(onview: boolean): void =>
            setState({
              ...state,
              componentsOnView: { createServerCard: onview }
            })
          }
        />
      )}
    </>
  );
}
