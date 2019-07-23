import React from "react";
import {
  Container,
  SearchBarContainer,
  H1,
  P,
  SearchBar,
  FriendSuggestionsH1,
  FriendSuggestionsHeaderContainer,
  FriendSuggestionsImageContainer,
  FriendSuggestionsImage
} from "./Styles";

import { AddFriendButton as Button } from "../../pages/lobby/Styles";

import FriendSuggestionsBackground from "../../assets/friend-suggestions.svg";
import api from "../../services/Api";
import { FriendRequest as FriendRequestMutation } from "../../graphql/mutations/FriendRequest";

export default class AddFriend extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      _id: ""
    };
  }

  sendFriendRequest = async (): Promise<void> => {
    try {
      if (this.state._id)
        await api.post("", FriendRequestMutation(this.state._id));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Container>
        <SearchBarContainer>
          <H1>Add Friend</H1>
          <P>You can add a friend with their DiscordTag.</P>
          <SearchBar
            placeholder="Enter a DiscordTag#0000"
            onChange={(e: any): void => this.setState({ _id: e.target.value })}
          />
          <Button
            style={{
              position: "absolute",
              width: "150px",
              height: "38px",
              background: "#7289DA",
              left: "90%",
              top: "22.5%",
              transform: "translate(-90%, -22.5%)"
            }}
            onClick={this.sendFriendRequest}
          >
            Send Friend Request
          </Button>
        </SearchBarContainer>

        <FriendSuggestionsHeaderContainer>
          <FriendSuggestionsH1>FRIEND SUGGESTIONS</FriendSuggestionsH1>
        </FriendSuggestionsHeaderContainer>
        <FriendSuggestionsImageContainer>
          <FriendSuggestionsImage
            src={FriendSuggestionsBackground}
            style={{ marginBottom: "35px" }}
          />
          <P
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
          </P>
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
        </FriendSuggestionsImageContainer>
      </Container>
    );
  }
}
