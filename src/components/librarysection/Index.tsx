import React from "react";

import {
  ContentOptionContainer,
  Container,
  OptionIcon,
  OptionLabel,
  FriendsContentNavbar,
  MainContentContainer,
  MainContent,
  Image,
  CodeInput,
  GiftInventorySectionContainer
} from "./Styles";

import BackpackIcon from "../../assets/school-book-bag.png";
import FriendSuggestionsBackground from "../../assets/friend-suggestions.svg";

export enum EViews {
  GAMES = 0,
  GIFTS
}

export default class ActivitySection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selected: EViews.GIFTS
    };
  }

  render() {
    return (
      <Container>
        <FriendsContentNavbar>
          <ContentOptionContainer style={{ marginLeft: "20px" }}>
            <OptionIcon src={BackpackIcon} />
            <OptionLabel>Library</OptionLabel>
          </ContentOptionContainer>

          <ContentOptionContainer
            style={{ marginLeft: "20px" }}
            onClick={async (): Promise<void> =>
              await this.setState({ selected: EViews.GAMES })
            }
          >
            <OptionLabel>My Games</OptionLabel>
          </ContentOptionContainer>

          <ContentOptionContainer
            style={{ marginLeft: "20px" }}
            onClick={async (): Promise<void> =>
              await this.setState({ selected: EViews.GIFTS })
            }
          >
            <OptionLabel>Gift Inventory</OptionLabel>
          </ContentOptionContainer>
        </FriendsContentNavbar>
        {this.state.selected === EViews.GAMES ? (
          <MainContentContainer>
            <MainContent>
              <Image src={FriendSuggestionsBackground} />
              <OptionLabel
                style={{
                  fontSize: "20px",
                  fontWeight: "normal",
                  marginBottom: "0px"
                }}
              >
                No games found
              </OptionLabel>
              <OptionLabel style={{ color: "#9A9CA1" }}>
                Hm, seems you don't have any games. Purchase games and they'll
                show up here!
              </OptionLabel>
            </MainContent>
          </MainContentContainer>
        ) : (
          <GiftInventorySectionContainer>
            <CodeInput />
            <Image src={FriendSuggestionsBackground} />
          </GiftInventorySectionContainer>
        )}
      </Container>
    );
  }
}
