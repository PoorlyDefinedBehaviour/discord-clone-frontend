import React from "react";

import {
  Container,
  Leftcontainer,
  Title,
  InnerContainer,
  Button,
  Line,
  IconContainer,
  Icon,
  RightContainer,
  BigTitle,
  FlexContainer,
  XButton,
  Avatar,
  P,
  DefaultButton
} from "./Styles";

import TwitterIcon from "../../assets/twitter-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import ChestImage from "../../assets/chest.svg";

export default function UserSettings(): any {
  return (
    <Container>
      <Leftcontainer>
        <InnerContainer>
          <Title>User Settings</Title>
          <Button>My Account</Button>
          <Button>Privacy & Safety</Button>
          <Button>Authorized Apps</Button>
          <Button>Connections</Button>
          <br />
          <Button>Billing</Button>
          <Line />
          <Button style={{ color: "#5A6AA2" }}>Discord Nitro</Button>
          <Button>HypeSquad</Button>
          <Line />
          <Title>App Settings</Title>
          <Button>Voice & Video</Button>
          <Button>Notifications</Button>
          <Button>Activity Feed</Button>
          <Button>Text & Images</Button>
          <Button>Appereance</Button>
          <Button>Streamer Mode</Button>
          <Button>Language</Button>
          <Line />
          <Button>Change Log</Button>
          <Line />
          <Button style={{ color: "#C34142" }}>Log Out</Button>
          <Line />
          <IconContainer>
            <Icon src={TwitterIcon} />
            <Icon src={FacebookIcon} />
            <Icon src={InstagramIcon} />
          </IconContainer>
        </InnerContainer>
      </Leftcontainer>

      <RightContainer>
        <FlexContainer style={{ justifyContent: "space-between" }}>
          <BigTitle>My Account</BigTitle>
          <XButton>X</XButton>
        </FlexContainer>

        <FlexContainer
          style={{
            background: "#292B2F",
            width: "90%",
            border: "1px solid #202225",
            borderRadius: "5px",
            height: "150px",
            alignItems: "center"
          }}
        >
          <Avatar src={TwitterIcon} style={{ marginLeft: "10px" }} />
          <FlexContainer
            style={{ flexDirection: "column", marginLeft: "30px" }}
          >
            <Title style={{ marginBottom: "0px" }}>USERNAME</Title>
            <P>
              PoorlyDefinedBehaviour{" "}
              <span style={{ color: "#5A5C60", fontSize: "12px" }}>#3450</span>
            </P>

            <Title style={{ marginBottom: "0px" }}>EMAIL</Title>
            <P>foo@bar.com</P>
          </FlexContainer>
          <DefaultButton style={{ marginBottom: "55px", marginRight: "20px" }}>
            Edit
          </DefaultButton>
        </FlexContainer>

        <BigTitle style={{ marginTop: "60px", marginBottom: "20px" }}>
          TWO-FACTOR AUTHENTICATION
        </BigTitle>
        <FlexContainer>
          <P
            style={{
              fontSize: "12px",
              width: "auto",
              fontWeight: "bolder",
              color: "#6A6E75",
              textTransform: "none"
            }}
          >
            Protect your Discord account with an extra layer of security. Once
            configure you'll be required to enter both your password and an
            authentication code from your mobile phone in order to sign in.
          </P>
          <img src={ChestImage} style={{ transform: "scale(0.6)" }} />
        </FlexContainer>
        <DefaultButton style={{ width: "auto", fontSize: "12px" }}>
          Enable Two-Factor Auth
        </DefaultButton>
      </RightContainer>
    </Container>
  );
}
