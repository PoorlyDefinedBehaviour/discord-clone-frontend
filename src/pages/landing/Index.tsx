import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Navbar,
  FlexContainer,
  Image,
  List,
  ListItem,
  VerticalBar,
  RoundButton,
  Headline,
  ContentContainer,
  Description,
  Button,
  AnimatedImage,
  FadedImage
} from "./Styles";

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

export default function Landing(): any {
  return (
    <Container>
      <Navbar>
        <FlexContainer>
          <Image src={DiscordLogo} />
          <List>
            <ListItem>Download</ListItem>
            <ListItem>Nitro</ListItem>
            <ListItem>Jobs</ListItem>
            <ListItem>Developers </ListItem>
            <Image src={DownArrow} style={{ margin: "5px 20px 0px -15px" }} />
            <ListItem>Community</ListItem>
            <Image src={DownArrow} style={{ margin: "5px 20px 0px -15px" }} />
            <ListItem>Support</ListItem>
            <Image src={DownArrow} style={{ margin: "5px 20px 0px -15px" }} />
          </List>
        </FlexContainer>

        <FlexContainer style={{ marginRight: "30px" }}>
          <Image src={TwitterIcon} style={{ transform: "scale(0.5)" }} />
          <Image src={FacebookIcon} style={{ transform: "scale(0.5)" }} />
          <Image src={InstagramIcon} style={{ transform: "scale(0.5)" }} />
          <Link to="/login">
            <RoundButton style={{ marginLeft: "10px", marginRight: "20px" }}>
              Open
            </RoundButton>
          </Link>
          <VerticalBar />
          <Image src={LanguagesIcon} style={{ transform: "scale(0.5)" }} />
        </FlexContainer>
      </Navbar>

      <ContentContainer>
        <Headline>It's time to ditch Skype and TeamSpeak.</Headline>
        <Description>
          All-in-one voice and text chat for gamers that's free, secure, and
          works on both your desktop and phone.
          <br /> Stop paying for TeamSpeak server and hassling with Skype.
          Simplify your life.
        </Description>

        <FlexContainer
          style={{
            width: "80%",
            margin: "0 auto",
            justifyContent: "center"
          }}
        >
          <Button
            style={{
              color: "#57585A",
              background: "#fff",
              marginRight: "20px"
            }}
          >
            Download For Windows
          </Button>
          <Link to="/login">
            <Button style={{ marginLeft: "20px" }}>Open Discord</Button>
          </Link>
        </FlexContainer>

        <AnimatedImage
          src={BoxImage}
          style={{
            position: "absolute",
            top: "55%",
            left: "64%",
            transform: "translate(-64%, -55%)"
          }}
        />
        <Image
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
        <FadedImage
          src={XImage}
          style={{
            position: "absolute",
            left: "86%",
            top: "90%",
            transform: "translate(-86%, -90%)"
          }}
        />
        <Image
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
        <Image
          src={HeadphonesImage}
          style={{
            position: "absolute",
            left: "80%",
            top: "100%",
            transform: "translate(-80%, -100%) scale(0.3)",
            marginTop: "269px"
          }}
        />
        <FlexContainer
          style={{
            position: "absolute",
            top: "165%",
            left: "22%",
            transform: "translate(-22%, -165%)"
          }}
        >
          <Image
            src={Phone1}
            style={{
              width: "110px",
              height: "210px"
            }}
          />
          <Image
            src={Phone2}
            style={{
              width: "120px",
              height: "200px"
            }}
          />
        </FlexContainer>
        <Image
          src={ControllerImage}
          style={{
            position: "absolute",
            top: "74%",
            left: "5%",
            transform: "scale(0.15) translate(-5%, -74%)"
          }}
        />
        <AnimatedImage
          src={BombImage}
          style={{
            position: "absolute",
            top: "71%",
            left: "23%",
            transform: "translate(-23%, -71%)"
          }}
        />
        <AnimatedImage
          src={CoinImage}
          style={{
            position: "absolute",
            top: "75%",
            left: "26%",
            transform: "translate(-26%, -75%)"
          }}
        />
        <AnimatedImage
          src={CoinImage}
          style={{
            position: "absolute",
            top: "45%",
            left: "55%",
            transform: "translate(-55%, -45%)"
          }}
        />
        <FadedImage
          src={SquareImage}
          style={{
            position: "absolute",
            left: "75%",
            top: "44%",
            transform: "translate(-75%, -44%)"
          }}
        />
        <FadedImage
          src={SquareImage}
          style={{
            position: "absolute",
            left: "80%",
            top: "65%",
            transform: "translate(-80%, -65%)"
          }}
        />
        <FadedImage
          src={CircleImage}
          style={{
            position: "absolute",
            left: "88%",
            top: "80%",
            transform: "translate(-88%, -80%)"
          }}
        />
        <FadedImage
          src={CircleImage}
          style={{
            position: "absolute",
            left: "28%",
            top: "50%",
            transform: "translate(-28%, -50%)"
          }}
        />
        <FadedImage
          src={TriangleImage}
          style={{
            position: "absolute",
            left: "53%",
            top: "50%",
            transform: "translate(-53%, -50%)"
          }}
        />
        <FadedImage
          src={TriangleImage}
          style={{
            position: "absolute",
            left: "19%",
            top: "90%",
            transform: "translate(-19%, -90%)"
          }}
        />

        <FadedImage
          src={XImage}
          style={{
            position: "absolute",
            left: "19%",
            top: "60%",
            transform: "translate(-19%, -60%)"
          }}
        />
      </ContentContainer>
    </Container>
  );
}
