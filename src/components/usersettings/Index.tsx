import React, { useState } from "react";

import * as S from "./Styles";

import TwitterIcon from "../../assets/twitter-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import ChestImage from "../../assets/chest.svg";
import { logout } from "../../services/Authentication";
import { ESections } from "../lobbysection/Index";

import { api } from "../../services/Api";

import { DeleteAccount as DeleteAccountMutation } from "../../graphql/mutations/DeleteAccount";
import { DeactivateAccount as DeactivateAccountMutation } from "../../graphql/mutations/DeactivateAccount";
import { UpdateAccount as UpdateAccountMutation } from "../../graphql/mutations/UpdateAccount";
import { store } from "../../store/Index";
import { Avatar } from "../avatar/Index";
import { Icon } from "../icon/Index";
import { Button } from "../button/Index";
import { Input } from "../form/Index";

export const UserSettings = ({ setCurrentSection }): JSX.Element => {
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
    <S.Container>
      <S.FlexContainer
        style={{
          width: "200px",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100%",
          background: "#2f3136"
        }}
      >
        <S.Title>User Settings</S.Title>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          My Account
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Privacy & Safety
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Authorized Apps
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Connections
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Billing
        </Button>
        <Button
          style={{
            color: "#5A6AA2",
            background: "transparent",
            textAlign: "left"
          }}
        >
          Discord Nitro
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          HypeSquad
        </Button>
        <S.Title>App Settings</S.Title>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Voice & Video
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Notifications
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Activity Feed
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Text & Images
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Appereance
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Streamer Mode
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Language
        </Button>
        <Button
          style={{
            background: "transparent",
            color: "#696d74",
            textAlign: "left"
          }}
        >
          Change Log
        </Button>
        <Button
          style={{
            color: "#C34142",
            background: "transparent",
            textAlign: "left"
          }}
          onClick={logout}
        >
          Log Out
        </Button>
        <S.FlexContainer
          style={{
            justifyContent: "flex-start",
            height: "20px",
            padding: "20px 0px"
          }}
        >
          <Icon src={TwitterIcon} />
          <Icon src={FacebookIcon} />
          <Icon src={InstagramIcon} />
        </S.FlexContainer>
      </S.FlexContainer>

      <S.RightContainer>
        <S.FlexContainer style={{ justifyContent: "space-between" }}>
          <S.BigTitle>
            My Account{" "}
            <span
              style={{ marginLeft: "10px", fontSize: "12px", color: "#5A5C60" }}
            >
              #DiscordTag: {user._id}
            </span>
          </S.BigTitle>
          <S.XButton onClick={(): void => setCurrentSection(ESections.FRIENDS)}>
            X
          </S.XButton>
        </S.FlexContainer>

        <S.FlexContainer
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
              marginLeft: "30px",
              marginTop: editButtonClicked ? "-200px" : "0px"
            }}
          />
          {editButtonClicked ? (
            <>
              <S.FlexContainer
                style={{
                  flexDirection: "column",
                  width: "80%"
                }}
              >
                <S.Title style={{ marginBottom: "5px" }}>USERNAME</S.Title>
                <Input
                  onChange={(e: any): void =>
                    setState({ ...state, username: e.target.value })
                  }
                />

                <S.Title style={{ marginBottom: "5px" }}>EMAIL</S.Title>
                <Input
                  type="email"
                  onChange={(e: any): void =>
                    setState({ ...state, email: e.target.value })
                  }
                />

                <S.Title style={{ marginBottom: "5px" }}>PASSWORD</S.Title>
                <Input
                  type="password"
                  onChange={(e: any): void =>
                    setState({ ...state, password: e.target.value })
                  }
                />

                <S.FlexContainer
                  style={{
                    flexDirection: "row",
                    marginTop: "15%",
                    width: "100%"
                  }}
                >
                  <Button
                    style={{
                      background: "transparent",
                      border: "1px solid #C34142",
                      color: "#C34142"
                    }}
                    onClick={deleteAccount}
                  >
                    Delete Account
                  </Button>
                  <Button
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
                  </Button>
                  <Button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                      height: "35px"
                    }}
                    onClick={cancelUpdate}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{ background: "#43B581", height: "35px" }}
                    onClick={updateAccount}
                  >
                    Save
                  </Button>
                </S.FlexContainer>
              </S.FlexContainer>
            </>
          ) : (
            <>
              <S.FlexContainer
                style={{ flexDirection: "column", marginLeft: "30px" }}
              >
                <S.Title style={{ marginBottom: "0px" }}>USERNAME</S.Title>
                <S.P>
                  {user.username}{" "}
                  <span style={{ color: "#5A5C60", fontSize: "12px" }}>
                    #3450
                  </span>
                </S.P>

                <S.Title style={{ marginBottom: "0px" }}>EMAIL</S.Title>
                <S.P>{user.email}</S.P>
              </S.FlexContainer>
              <Button
                style={{
                  marginBottom: "55px",
                  marginRight: "20px",
                  width: "100px",
                  height: "40px",
                  background: "#7289da"
                }}
                onClick={(): void => setEditButtonClicked(true)}
              >
                Edit
              </Button>
            </>
          )}
        </S.FlexContainer>

        <S.BigTitle
          style={{
            marginTop: "60px",
            marginBottom: "20px"
          }}
        >
          TWO-FACTOR AUTHENTICATION
        </S.BigTitle>
        <S.FlexContainer>
          <S.P
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
          </S.P>
          <img
            src={ChestImage}
            alt="treasure chest"
            style={{ transform: "scale(0.6)" }}
          />
        </S.FlexContainer>
        <Button
          style={{
            fontSize: "12px",
            width: "auto",
            height: "40px",
            background: "#7289da"
          }}
        >
          Enable Two-Factor Auth
        </Button>
      </S.RightContainer>
    </S.Container>
  );
};
