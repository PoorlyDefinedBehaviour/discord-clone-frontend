import React, { useState } from "react";

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
  DefaultButton,
  Input
} from "./Styles";

import TwitterIcon from "../../assets/twitter-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import ChestImage from "../../assets/chest.svg";
import { logout } from "../../services/Authentication";
import { ESections } from "../lobbysection/Index";

import api from "../../services/Api";
import { DeleteAccount as DeleteAccountMutation } from "../../graphql/mutations/DeleteAccount";
import { DeactivateAccount as DeactivateAccountMutation } from "../../graphql/mutations/DeactivateAccount";
import { UpdateAccount as UpdateAccountMutation } from "../../graphql/mutations/UpdateAccount";
import { store } from "../../store/Index";

export default function UserSettings({ setCurrentSection }): any {
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [state, setState] = useState({} as any);

  const { user }: any = store.getState();

  const updateAccount = async (): Promise<void> => {
    try {
      const {
        data: {
          data: { update_account }
        }
      }: any = await api.post(
        "",
        UpdateAccountMutation(
          state.username || "",
          state.email || "",
          state.password || ""
        )
      );
      console.log(update_account);
      if (update_account.status === 201) {
        store.dispatch({ type: "UPDATE_USER", fields: state });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setEditButtonClicked(false);
    }
  };

  const cancelUpdate = (): void => {
    setState({});
    setEditButtonClicked(false);
  };

  const deleteAccount = async (): Promise<void> => {
    try {
      await api.post("", DeleteAccountMutation());
      logout();
    } catch (error) {
      console.error(error);
    } finally {
      setEditButtonClicked(false);
    }
  };

  const disableAccount = async (): Promise<void> => {
    try {
      await api.post("", DeactivateAccountMutation());
      logout();
    } catch (error) {
      console.error(error);
    } finally {
      setEditButtonClicked(false);
    }
  };

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
          <Button style={{ color: "#C34142" }} onClick={logout}>
            Log Out
          </Button>
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
          <BigTitle>
            My Account{" "}
            <span
              style={{ marginLeft: "10px", fontSize: "12px", color: "#5A5C60" }}
            >
              #DiscordTag: {user._id}
            </span>
          </BigTitle>
          <XButton onClick={(): void => setCurrentSection(ESections.FRIENDS)}>
            X
          </XButton>
        </FlexContainer>

        <FlexContainer
          style={{
            background: "#292B2F",
            width: "90%",
            border: "1px solid #202225",
            borderRadius: "5px",
            height: editButtonClicked ? "400px" : "150px",
            alignItems: "center"
          }}
        >
          <Avatar
            src={TwitterIcon}
            style={{
              marginLeft: "10px",
              marginTop: editButtonClicked ? "-200px" : "0px"
            }}
          />
          {editButtonClicked ? (
            <>
              <FlexContainer
                style={{
                  flexDirection: "column",
                  marginLeft: "30px"
                }}
              >
                <Title style={{ marginBottom: "5px" }}>USERNAME</Title>
                <Input
                  onChange={(e: any): void =>
                    setState({ ...state, username: e.target.value })
                  }
                />

                <Title style={{ marginBottom: "5px" }}>EMAIL</Title>
                <Input
                  type="email"
                  onChange={(e: any): void =>
                    setState({ ...state, email: e.target.value })
                  }
                />

                <Title style={{ marginBottom: "5px" }}>PASSWORD</Title>
                <Input
                  type="password"
                  onChange={(e: any): void =>
                    setState({ ...state, password: e.target.value })
                  }
                />

                <Line />
                <FlexContainer
                  style={{
                    flexDirection: "row",
                    marginTop: "15%",
                    width: "100%"
                  }}
                >
                  <DefaultButton
                    style={{
                      background: "transparent",
                      border: "1px solid #C34142",
                      color: "#C34142"
                    }}
                    onClick={deleteAccount}
                  >
                    Delete Account
                  </DefaultButton>
                  <DefaultButton
                    style={{
                      background: "transparent",
                      border: "1px solid #C34142",
                      color: "#C34142",
                      marginRight: "100px",
                      marginLeft: "10px"
                    }}
                    onClick={disableAccount}
                  >
                    Disable Account
                  </DefaultButton>
                  <DefaultButton
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#fff"
                    }}
                    onClick={cancelUpdate}
                  >
                    Cancel
                  </DefaultButton>
                  <DefaultButton
                    style={{ background: "#43B581" }}
                    onClick={updateAccount}
                  >
                    Save
                  </DefaultButton>
                </FlexContainer>
              </FlexContainer>
            </>
          ) : (
            <>
              <FlexContainer
                style={{ flexDirection: "column", marginLeft: "30px" }}
              >
                <Title style={{ marginBottom: "0px" }}>USERNAME</Title>
                <P>
                  {user.username}{" "}
                  <span style={{ color: "#5A5C60", fontSize: "12px" }}>
                    #3450
                  </span>
                </P>

                <Title style={{ marginBottom: "0px" }}>EMAIL</Title>
                <P>{user.email}</P>
              </FlexContainer>
              <DefaultButton
                style={{ marginBottom: "55px", marginRight: "20px" }}
                onClick={(): void => setEditButtonClicked(true)}
              >
                Edit
              </DefaultButton>
            </>
          )}
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
