import React from "react";

import * as S from "./Styles";

import Image404 from "../../assets/404.png";
import ImageRobot from "../../assets/not-found-robot.png";
import DiscordLogoTransparent from "../../assets/discord-logo-transparent.svg";
import { SiteUrl } from "../../services/Authentication";

export const NotFound = (): JSX.Element => (
  <S.Container>
    <S.Div>
      <S.InfoContainer>
        <S.Image src={Image404} alt="404" />
        <S.Headline>WIZARDS BEHIND CURTAINS?</S.Headline>
        <S.Description>
          That's so 1939. Discord is secretly powered by quantum robot hamsters.
          Technology is wild, isn't it? Anyway, you look lost. Here are a few
          suggested pages.
        </S.Description>
        <S.UL>
          <S.LI>
            <S.Link href="https://status.discordapp.com">STATUS PAGE</S.Link>
          </S.LI>
          <S.LI>
            <S.Link href="https://twitter.com/discordapp">@DISCORD APP</S.Link>
          </S.LI>
          <S.LI>
            <S.Link href="https://support.discordapp.com/hc/en-us">
              SUPPORT
            </S.Link>
          </S.LI>
        </S.UL>
      </S.InfoContainer>
    </S.Div>
    <S.Div>
      <S.Image src={ImageRobot} style={{ marginTop: "15%" }} alt="Robot" />
    </S.Div>

    <S.Image
      src={DiscordLogoTransparent}
      alt="Discord logo"
      onClick={() => (window.location.href = SiteUrl)}
      style={{
        position: "absolute",
        bottom: "30px",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        transform: "scale(1.5)",
        cursor: "pointer"
      }}
    />
  </S.Container>
);
