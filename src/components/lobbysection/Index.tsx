import React, { useState } from "react";

import FriendsSection from "../friendssection/Index";
import ActivitySection from "../activitysection/Index";
import LibrarySection from "../librarysection/Index";
import NitroSection from "../nitrosection/Index";
import DirectMessages from "../directmessages/Index";
import UserSettings from "../usersettings/Index";

export enum ESections {
  ACTIVITY = 0,
  LIBRARY,
  NITRO,
  FRIENDS,
  SETTINGS
}

export default function LobbySection(): any {
  const [currentSection, setCurrentSection] = useState(ESections.SETTINGS);

  const sections: Map<number, any> = new Map<number, any>();

  sections.set(ESections.FRIENDS, <FriendsSection />);
  sections.set(ESections.ACTIVITY, <ActivitySection />);
  sections.set(ESections.LIBRARY, <LibrarySection />);
  sections.set(ESections.NITRO, <NitroSection />);
  sections.set(
    ESections.SETTINGS,
    <UserSettings setCurrentSection={setCurrentSection} />
  );

  return (
    <>
      {DirectMessages({ setCurrentSection })}
      {sections.get(currentSection)}
    </>
  );
}
