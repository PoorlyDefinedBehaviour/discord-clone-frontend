import React from "react";

import {
  CreateServerPopUpContainer,
  CreateServerPopUpActionButton,
  CreateServerPopUpBackgroundContainer,
  CreateServerPopUpBackground,
  CreateServerPopUpActionName,
  CreateServerPopUpActionDescription,
  CreateServerPopUpActionImage,
  CreateServerPopUpAction
} from "./Styles";

import CreateServerActionIcon from "../../assets/create-server.svg";
import JoinServerActionIcon from "../../assets/join-server.png";

import CreateServerPopUpLeftBackground from "../../assets/left-background.png";
import CreateServerPopUpRightBackground from "../../assets/right-background.png";

export function CreateServerCardMain({
  closeButtonClickHandler,
  createButtonClickHandler,
  joinButtonClickHandler
}: any): any {
  return (
    <CreateServerPopUpContainer>
      <CreateServerPopUpActionButton
        style={{ width: "20%", marginLeft: "80%" }}
        color={"#E2E3E7"}
        onClick={closeButtonClickHandler}
      >
        Close
      </CreateServerPopUpActionButton>
      <CreateServerPopUpBackgroundContainer>
        <CreateServerPopUpBackground src={CreateServerPopUpLeftBackground} />
        <CreateServerPopUpBackground src={CreateServerPopUpRightBackground} />
        <CreateServerPopUpAction>
          <CreateServerPopUpActionName color={"#7289DA"}>
            Create
          </CreateServerPopUpActionName>
          <CreateServerPopUpActionDescription>
            Create a new server and invite your friends. It's free!
          </CreateServerPopUpActionDescription>
          <CreateServerPopUpActionImage src={CreateServerActionIcon} />
          <CreateServerPopUpActionButton
            color={"#7289DA"}
            onClick={createButtonClickHandler}
          >
            Create a server
          </CreateServerPopUpActionButton>
        </CreateServerPopUpAction>

        <CreateServerPopUpAction style={{ left: "60%" }}>
          <CreateServerPopUpActionName color={"#3CA374"}>
            Join
          </CreateServerPopUpActionName>
          <CreateServerPopUpActionDescription>
            Enter an instant invite and join your friend's server.
          </CreateServerPopUpActionDescription>
          <CreateServerPopUpActionImage
            src={JoinServerActionIcon}
            style={{ marginTop: "30px", marginBottom: "30px" }}
          />
          <CreateServerPopUpActionButton
            color={"#3CA374"}
            onClick={joinButtonClickHandler}
          >
            Join a server
          </CreateServerPopUpActionButton>
        </CreateServerPopUpAction>
      </CreateServerPopUpBackgroundContainer>
    </CreateServerPopUpContainer>
  );
}
