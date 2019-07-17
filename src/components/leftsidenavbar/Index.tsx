import React from "react";

import { Nav, IconContainer, Icon } from "./Styles";

import DiscordIcon from "../../assets/discord-icon.png";
import CreateServerIcon from "../../assets/plus.png";

import CreateServerCard from "../createservercard/Index";
import { EViews } from "../../pages/lobby/Index";

export default class LeftSideNavbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      componentsOnView: {
        createServerCard: false
      }
    };
  }

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
