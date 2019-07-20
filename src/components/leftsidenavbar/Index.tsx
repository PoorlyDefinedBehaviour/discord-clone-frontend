import React from "react";

import { Nav, IconContainer, Icon } from "./Styles";

import DiscordIcon from "../../assets/discord-icon.png";
import CreateServerIcon from "../../assets/plus.png";

import CreateServerCard from "../createservercard/Index";
import { EViews } from "../../pages/lobby/Index";

import { store } from "../../store/Index";

import { Server as ServerQuery } from "../../graphql/queries/Server";
import api from "../../services/Api";

export default class LeftSideNavbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      joiningServer: false,
      componentsOnView: {
        createServerCard: false
      }
    };
  }

  join = async (serverId: string): Promise<void> => {
    if (this.state.joininServer) {
      return;
    }

    try {
      await this.setState({ joiningServer: true });
      const {
        data: {
          data: { server }
        }
      }: any = await api.post("", ServerQuery(serverId));

      switch (server.status) {
        case 200:
          store.dispatch({ type: "SET_SERVER", server: server.server });
          this.props.setCurrentView(EViews.MAIN);
          this.props.setCurrentView(EViews.SERVER);
          break;
        case 500:
          throw new Error("internal server error");
      }
    } catch (e) {
      // tell user something went wrong in the server;
    } finally {
      await this.setState({ joiningServer: false });
    }
  };

  getUserServers = () => {
    const { user }: any = store.getState();

    return user.servers.length > 0 ? (
      user.servers.map(
        (server: any): any => (
          <IconContainer
            key={server._id}
            onClick={async (): Promise<void> => await this.join(server._id)}
          >
            <Icon src={server.logo} />
          </IconContainer>
        )
      )
    ) : (
      <></>
    );
  };

  render() {
    return (
      <>
        <Nav>
          <IconContainer onClick={() => this.props.setCurrentView(EViews.MAIN)}>
            <Icon src={DiscordIcon} />
          </IconContainer>
          <IconContainer
            onClick={async (): Promise<void> =>
              await this.setState({
                componentsOnView: { createServerCard: true }
              })
            }
          >
            <Icon src={CreateServerIcon} />
          </IconContainer>
          {this.getUserServers()}
        </Nav>
        {this.state.componentsOnView.createServerCard && (
          <CreateServerCard
            setOnView={async (state: boolean) =>
              await this.setState({
                componentsOnView: { createServerCard: state }
              })
            }
          />
        )}
      </>
    );
  }
}
