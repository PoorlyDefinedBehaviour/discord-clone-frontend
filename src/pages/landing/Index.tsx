import React from "react";

import { Link } from "react-router-dom";

import * as S from "./Styles";

import DownArrow from "../../assets/down-arrow.svg";
import LanguagesIcon from "../../assets/languages-icon.svg";
import DiscordLogo from "../../assets/landing-discord-logo.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import ComputerImage from "../../assets/computer.svg";
import NotebookImage from "../../assets/notebook.svg";
import HeadphonesImage from "../../assets/headphones.svg";
import Phone1 from "../../assets/phone-1.svg";
import Phone2 from "../../assets/phone-2.svg";
import ControllerImage from "../../assets/controller.svg";
import CoinImage from "../../assets/coin.svg";
import BombImage from "../../assets/bomb.svg";
import BoxImage from "../../assets/box.svg";
import SquareImage from "../../assets/square.svg";
import CircleImage from "../../assets/circle.svg";
import TriangleImage from "../../assets/triangle.svg";
import XImage from "../../assets/x.svg";

import { Button } from "../../components/button/Index";

export function Landing(): any {
  return (
    <S.Container>
      <S.Navbar>
        <S.FlexContainer>
          <S.Image src={DiscordLogo} />
          <S.List>
            <S.ListItem>Download</S.ListItem>
            <S.ListItem>Nitro</S.ListItem>
            <S.ListItem>Jobs</S.ListItem>
            <S.ListItem>Developers </S.ListItem>
            <S.Image src={DownArrow} style={{ margin: "5px 20px 0px -15px" }} />
            <S.ListItem>Community</S.ListItem>
            <S.Image src={DownArrow} style={{ margin: "5px 20px 0px -15px" }} />
            <S.ListItem>Support</S.ListItem>
            <S.Image src={DownArrow} style={{ margin: "5px 20px 0px -15px" }} />
          </S.List>
        </S.FlexContainer>

        <S.FlexContainer style={{ marginRight: "30px" }}>
          <S.Image src={TwitterIcon} style={{ transform: "scale(0.5)" }} />
          <S.Image src={FacebookIcon} style={{ transform: "scale(0.5)" }} />
          <S.Image src={InstagramIcon} style={{ transform: "scale(0.5)" }} />
          <Link to="/login">
            <S.RoundButton style={{ marginLeft: "10px", marginRight: "20px" }}>
              Open
            </S.RoundButton>
          </Link>
          <S.VerticalBar />
          <S.Image src={LanguagesIcon} style={{ transform: "scale(0.5)" }} />
        </S.FlexContainer>
      </S.Navbar>

      <S.ContentContainer>
        <S.Headline>It's time to ditch Skype and TeamSpeak.</S.Headline>
        <S.Description>
          All-in-one voice and text chat for gamers that's free, secure, and
          works on both your desktop and phone.
          <br /> Stop paying for TeamSpeak server and hassling with Skype.
          Simplify your life.
        </S.Description>

        <S.FlexContainer
          style={{
            width: "80%",
            margin: "0 auto",
            justifyContent: "center"
          }}
        >
          <Button
            style={{
              color: "#57585A",
              width: "250px",
              height: "45px",
              background: "#fff",
              marginRight: "20px"
            }}
          >
            Download For Windows
          </Button>
          <Link to="/login">
            <Button
              style={{
                marginLeft: "20px",
                width: "250px",
                height: "45px",
                background: "#7289da"
              }}
            >
              Open Discord
            </Button>
          </Link>
        </S.FlexContainer>

        <S.AnimatedImage
          src={BoxImage}
          style={{
            position: "absolute",
            top: "55%",
            left: "64%",
            transform: "translate(-64%, -55%)"
          }}
        />
        <S.Image
          src={ComputerImage}
          style={{
            position: "absolute",
            height: "500px",
            width: "500px",
            left: "50%",
            top: "155%",
            transform: "translate(-50%, -155%)"
          }}
        />
        <S.FadedImage
          src={XImage}
          style={{
            position: "absolute",
            left: "86%",
            top: "90%",
            transform: "translate(-86%, -90%)"
          }}
        />
        <S.Image
          src={NotebookImage}
          style={{
            position: "absolute",
            height: "400px",
            width: "600px",
            left: "80%",
            top: "145%",
            transform: "translate(-80%, -145%)"
          }}
        />
        <S.Image
          src={HeadphonesImage}
          style={{
            position: "absolute",
            left: "80%",
            top: "100%",
            transform: "translate(-80%, -100%) scale(0.3)",
            marginTop: "269px"
          }}
        />
        <S.FlexContainer
          style={{
            position: "absolute",
            top: "165%",
            left: "22%",
            transform: "translate(-22%, -165%)"
          }}
        >
          <S.Image
            src={Phone1}
            style={{
              width: "110px",
              height: "210px"
            }}
          />
          <S.Image
            src={Phone2}
            style={{
              width: "120px",
              height: "200px"
            }}
          />
        </S.FlexContainer>
        <S.Image
          src={ControllerImage}
          style={{
            position: "absolute",
            top: "74%",
            left: "5%",
            transform: "scale(0.15) translate(-5%, -74%)"
          }}
        />
        <S.AnimatedImage
          src={BombImage}
          style={{
            position: "absolute",
            top: "71%",
            left: "23%",
            transform: "translate(-23%, -71%)"
          }}
        />
        <S.AnimatedImage
          src={CoinImage}
          style={{
            position: "absolute",
            top: "75%",
            left: "26%",
            transform: "translate(-26%, -75%)"
          }}
        />
        <S.AnimatedImage
          src={CoinImage}
          style={{
            position: "absolute",
            top: "45%",
            left: "55%",
            transform: "translate(-55%, -45%)"
          }}
        />
        <S.FadedImage
          src={SquareImage}
          style={{
            position: "absolute",
            left: "75%",
            top: "44%",
            transform: "translate(-75%, -44%)"
          }}
        />
        <S.FadedImage
          src={SquareImage}
          style={{
            position: "absolute",
            left: "80%",
            top: "65%",
            transform: "translate(-80%, -65%)"
          }}
        />
        <S.FadedImage
          src={CircleImage}
          style={{
            position: "absolute",
            left: "88%",
            top: "80%",
            transform: "translate(-88%, -80%)"
          }}
        />
        <S.FadedImage
          src={CircleImage}
          style={{
            position: "absolute",
            left: "28%",
            top: "50%",
            transform: "translate(-28%, -50%)"
          }}
        />
        <S.FadedImage
          src={TriangleImage}
          style={{
            position: "absolute",
            left: "53%",
            top: "50%",
            transform: "translate(-53%, -50%)"
          }}
        />
        <S.FadedImage
          src={TriangleImage}
          style={{
            position: "absolute",
            left: "19%",
            top: "90%",
            transform: "translate(-19%, -90%)"
          }}
        />

        <S.FadedImage
          src={XImage}
          style={{
            position: "absolute",
            left: "19%",
            top: "60%",
            transform: "translate(-19%, -60%)"
          }}
        />
      </S.ContentContainer>
    </S.Container>
  );
}
