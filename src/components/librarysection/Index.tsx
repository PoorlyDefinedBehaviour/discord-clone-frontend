import React, { useState } from "react";

import * as S from "./Styles";

import { Label } from "../label/Index";

import BackpackIcon from "../../assets/school-book-bag.png";
import FriendSuggestionsBackground from "../../assets/friend-suggestions.svg";
import { Icon } from "../icon/Index";
import { CenterContainer } from "../centercontainer/Index";
import { Navbar } from "../navbar/Index";

export enum EViews {
  GAMES = 0,
  GIFTS
}

export const LibrarySection = (): JSX.Element => {
  const [state, setState] = useState({
    selected: EViews.GIFTS
  });

  return (
    <S.Container>
      <Navbar>
        <CenterContainer>
          <Icon src={BackpackIcon} />
          <Label>Library</Label>
        </CenterContainer>

        <CenterContainer>
          <Label onClick={() => setState({ selected: EViews.GAMES })}>
            My Games
          </Label>
        </CenterContainer>

        <CenterContainer>
          <Label onClick={() => setState({ selected: EViews.GIFTS })}>
            {" "}
            Gift Inventory
          </Label>
        </CenterContainer>
      </Navbar>
      {state.selected === EViews.GAMES ? (
        <S.MainContentContainer>
          <S.MainContent>
            <S.Image src={FriendSuggestionsBackground} />
            <Label
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                marginTop: "20px",
                marginBottom: "20px"
              }}
            >
              No games found
            </Label>
            <Label
              style={{ color: "#9A9CA1" }}
              text="Hm, seems you don't have any games. Purchase games and they'll
              show up here!"
            />
          </S.MainContent>
        </S.MainContentContainer>
      ) : (
        <S.GiftInventorySectionContainer>
          <S.H1>Redeem Codes</S.H1>
          <S.P>
            Received a code for Nitro or a game? That's exciting! Enter it
            below:
          </S.P>
          <S.InputContainer>
            <S.CodeInput placeholder="WUMP-AAAAA-BBBBB-CCCCC" />
            <S.Button>Redeem</S.Button>
          </S.InputContainer>
          <S.H1 style={{ marginBottom: "100px" }}>Gift Inventory</S.H1>
          <S.LowerSectionContainer>
            <S.Image src={FriendSuggestionsBackground} />

            <S.H1
              style={{
                fontSize: "20px",
                border: "none",
                marginTop: "30px",
                marginBottom: "-10px"
              }}
            >
              There are no gifts.
            </S.H1>
            <S.P
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                color: "#B9BBBE"
              }}
            >
              Feeling generous? Check out <S.Link>our store</S.Link> and
              purchase a gift to make someone's day!
            </S.P>
          </S.LowerSectionContainer>
        </S.GiftInventorySectionContainer>
      )}
    </S.Container>
  );
};
