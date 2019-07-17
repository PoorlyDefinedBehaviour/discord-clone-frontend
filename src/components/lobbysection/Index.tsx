import React, { useState } from "react";

import FriendsSection from "../friendssection/Index";
import ActivitySection from "../activitysection/Index";
import LibrarySection from "../librarysection/Index";

import DirectMessages from "../directmessages/Index";

export enum ESections {
  ACTIVITY = 0,
  LIBRARY,
  NITRO,
  FRIENDS
}

export default function LobbySection(): any {
  const [currentSection, setCurrentSection] = useState(ESections.LIBRARY);

  const sections: Map<number, any> = new Map<number, any>();

  sections.set(ESections.FRIENDS, <FriendsSection />);
  sections.set(ESections.ACTIVITY, <ActivitySection />);
  sections.set(ESections.LIBRARY, <LibrarySection />);

  return (
    <>
      {DirectMessages({ setCurrentSection })}
      {sections.get(currentSection)}
    </>
  );
}
