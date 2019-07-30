import React, { useState } from "react";

import { CreateServerCardMain } from "../createservercardmain/Index";
import { CreateServerCardCreate } from "../createservercardcreate/Index";
import { CreateServerCardJoin } from "../createservercardjoin/Index";

enum ECards {
  MAIN = 0,
  CREATE,
  JOIN
}

export const CreateServerCard = ({ setOnView }: any): JSX.Element => {
  const [state, setState] = useState({
    currentServerCard: ECards.MAIN,
    inviteLink: "",
    serverName: "",
    invalidInviteLink: false,
    invalidServerName: false,
    serverNameAlreadyInUse: false
  });

  const cards: Map<number, any> = new Map<number, any>();

  cards.set(
    ECards.MAIN,
    <CreateServerCardMain
      closeButtonClickHandler={(): void => setOnView(false)}
      createButtonClickHandler={(): void =>
        setState({ ...state, currentServerCard: ECards.CREATE })
      }
      joinButtonClickHandler={(): void =>
        setState({ ...state, currentServerCard: ECards.JOIN })
      }
    />
  );

  cards.set(
    ECards.CREATE,
    <CreateServerCardCreate
      backButtonClickHandler={(): void =>
        setState({ ...state, currentServerCard: ECards.MAIN })
      }
    />
  );

  cards.set(
    ECards.JOIN,
    <CreateServerCardJoin
      backButtonClickHandler={(): void =>
        setState({ ...state, currentServerCard: ECards.MAIN })
      }
    />
  );

  return cards.get(state.currentServerCard);
};
