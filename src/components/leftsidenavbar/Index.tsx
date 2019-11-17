import React, { useState } from "react";
import * as S from "./Styles";
import DiscordLogo from "../../assets/discord-icon.png";
import CreateServerImage from "../../assets/plus.png";
import CreateServerCard from "../createservercard/Index";
import { EViews } from "../../pages/lobby/Index";
import Avatar from "../avatar/Index";
import ServerQuery from "../../graphql/queries/Server";
import store from "../../store/Index";
import api from "../../services/Api";

export default function LeftSideNavbar({ setCurrentView }): JSX.Element {
  const [state, setState] = useState({
    joiningServer: false,
    componentsOnView: {
      createServerCard: false
    },
    userServers: store.getState().user.servers
  });

  store.subscribe((): void =>
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
    state.userServers.map((server: any): any => (
      <Avatar
        src={server.logo}
        key={server._id}
        onClick={async (): Promise<void> => await join(server._id)}
      />
    ));

  return (
    <>
      <S.Nav>
        <Avatar
          src={DiscordLogo}
          onClick={(): void => setCurrentView(EViews.MAIN)}
        />

        <Avatar
          src={CreateServerImage}
          onClick={(): void =>
            setState({ ...state, componentsOnView: { createServerCard: true } })
          }
        />

        {getUserServers()}
      </S.Nav>
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
