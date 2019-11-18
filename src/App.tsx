import React from "react";
import Routes from "./Routes";
import GlobalStyles from "./GlobalStyles";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/Index";

export default function App(): JSX.Element {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <Routes />
    </PersistGate>
  );
}
