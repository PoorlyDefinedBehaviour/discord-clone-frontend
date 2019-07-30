import React, { useState } from "react";

import * as S from "./Styles";

import FriendSuggestionsBackground from "../../assets/friend-suggestions.svg";

import { api } from "../../services/Api";

import { FriendRequest as FriendRequestMutation } from "../../graphql/mutations/FriendRequest";
import { Button } from "../button/Index";

export const AddFriend = (): JSX.Element => {
  const [state, setState] = useState({ _id: "" } as any);

  const sendFriendRequest = async (): Promise<void> => {
    try {
      if (state._id) await api.post("", FriendRequestMutation(state._id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <S.SearchBarContainer>
        <S.H1>Add Friend</S.H1>
        <S.P>You can add a friend with their DiscordTag.</S.P>
        <S.SearchBar
          placeholder="Enter a DiscordTag#0000"
          onChange={(e: any): void =>
            setState({ ...state, _id: e.target.value })
          }
        />
        <Button
          style={{
            position: "absolute",
            width: "150px",
            height: "38px",
            background: "#7289DA",
            left: "90%",
            top: "20.5%",
            transform: "translate(-90%, -20.5%)"
          }}
          onClick={sendFriendRequest}
        >
          Send Friend Request
        </Button>
      </S.SearchBarContainer>

      <S.FriendSuggestionsHeaderContainer>
        <S.FriendSuggestionsH1>FRIEND SUGGESTIONS</S.FriendSuggestionsH1>
      </S.FriendSuggestionsHeaderContainer>
      <S.FriendSuggestionsImageContainer>
        <S.FriendSuggestionsImage
          src={FriendSuggestionsBackground}
          style={{ marginBottom: "35px" }}
        />
        <S.P
          style={{
            color: "#6F747B",
            textAlign: "center",
            fontSize: "13px",
            lineHeight: "20px",
            fontWeight: "normal",
            marginBottom: "23px"
          }}
        >
          Grab the desktop app to find friends from other services like Skype{" "}
          <br />
          or League of Legends.
        </S.P>
        <Button
          style={{
            color: "#fff",
            width: "100px",
            height: "38px",
            background: "#7289DA"
          }}
        >
          Download
        </Button>
      </S.FriendSuggestionsImageContainer>
    </S.Container>
  );
};
