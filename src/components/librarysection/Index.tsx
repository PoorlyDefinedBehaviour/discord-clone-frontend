import React, { useState } from "react";

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
  GiftInventorySectionContainer,
  InputContainer,
  Button,
  H1,
  P,
  LowerSectionContainer,
  Link
} from "./Styles";

import BackpackIcon from "../../assets/school-book-bag.png";
import FriendSuggestionsBackground from "../../assets/friend-suggestions.svg";

export enum EViews {
  GAMES = 0,
  GIFTS
}

export function LibrarySection(): any {
  const [state, setState] = useState({
    selected: EViews.GIFTS
  });

  return (
    <Container>
      <FriendsContentNavbar>
        <ContentOptionContainer style={{ marginLeft: "20px" }}>
          <OptionIcon src={BackpackIcon} />
          <OptionLabel>Library</OptionLabel>
        </ContentOptionContainer>

        <ContentOptionContainer
          style={{ marginLeft: "20px" }}
          onClick={() => setState({ selected: EViews.GAMES })}
        >
          <OptionLabel>My Games</OptionLabel>
        </ContentOptionContainer>

        <ContentOptionContainer
          style={{ marginLeft: "20px" }}
          onClick={() => setState({ selected: EViews.GIFTS })}
        >
          <OptionLabel>Gift Inventory</OptionLabel>
        </ContentOptionContainer>
      </FriendsContentNavbar>
      {state.selected === EViews.GAMES ? (
        <MainContentContainer>
          <MainContent>
            <Image src={FriendSuggestionsBackground} />
            <OptionLabel
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                marginTop: "20px",
                marginBottom: "20px"
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
          <H1>Redeem Codes</H1>
          <P>
            Received a code for Nitro or a game? That's exciting! Enter it
            below:
          </P>
          <InputContainer>
            <CodeInput placeholder="WUMP-AAAAA-BBBBB-CCCCC" />
            <Button>Redeem</Button>
          </InputContainer>
          <H1 style={{ marginBottom: "100px" }}>Gift Inventory</H1>
          <LowerSectionContainer>
            <Image src={FriendSuggestionsBackground} />

            <H1
              style={{
                fontSize: "20px",
                border: "none",
                marginTop: "30px",
                marginBottom: "-10px"
              }}
            >
              There are no gifts.
            </H1>
            <P
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                color: "#B9BBBE"
              }}
            >
              Feeling generous? Check out <Link>our store</Link> and purchase a
              gift to make someone's day!
            </P>
          </LowerSectionContainer>
        </GiftInventorySectionContainer>
      )}
    </Container>
  );
}
