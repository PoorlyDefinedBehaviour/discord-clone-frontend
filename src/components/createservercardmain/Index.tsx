import React from "react";

import * as S from "./Styles";

import CreateServerActionIcon from "../../assets/create-server.svg";
import JoinServerActionIcon from "../../assets/join-server.png";

import CreateServerPopUpLeftBackground from "../../assets/left-background.png";
import CreateServerPopUpRightBackground from "../../assets/right-background.png";

export const CreateServerCardMain = ({
  closeButtonClickHandler,
  createButtonClickHandler,
  joinButtonClickHandler
}: any): JSX.Element => {
  return (
    <S.PopUpContainer>
      <S.Button
        style={{ width: "20%", marginLeft: "80%" }}
        color={"#E2E3E7"}
        onClick={closeButtonClickHandler}
      >
        Close
      </S.Button>
      <S.BackgroundContainer>
        <S.Background src={CreateServerPopUpLeftBackground} />
        <S.Background src={CreateServerPopUpRightBackground} />
        <S.Action>
          <S.Name color={"#7289DA"}>Create</S.Name>
          <S.Description>
            Create a new server and invite your friends. It's free!
          </S.Description>
          <S.Image src={CreateServerActionIcon} />
          <S.Button color={"#7289DA"} onClick={createButtonClickHandler}>
            Create a server
          </S.Button>
        </S.Action>

        <S.Action style={{ left: "60%" }}>
          <S.Name color={"#3CA374"}>Join</S.Name>
          <S.Description>
            Enter an instant invite and join your friend's server.
          </S.Description>
          <S.Image
            src={JoinServerActionIcon}
            style={{ marginTop: "30px", marginBottom: "30px" }}
          />
          <S.Button color={"#3CA374"} onClick={joinButtonClickHandler}>
            Join a server
          </S.Button>
        </S.Action>
      </S.BackgroundContainer>
    </S.PopUpContainer>
  );
};
