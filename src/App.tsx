import React from "react";

import Routes from "./Routes";

import { GlobalStyles } from "./GlobalStyles";
import { PersistGate } from "redux-persist/integration/react";

import { persistor } from "./store/Index";

const App = (): any => (
  <PersistGate loading={null} persistor={persistor}>
    <GlobalStyles />
    <Routes />
  </PersistGate>
);

export default App;
