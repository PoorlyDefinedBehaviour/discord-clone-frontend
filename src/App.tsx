import React from "react";
import "./App.css";
import Routes from "./Routes";

import { PersistGate } from "redux-persist/integration/react";

import { persistor } from "./store/Index";

const App = (): any => (
  <PersistGate loading={null} persistor={persistor}>
    <Routes />
  </PersistGate>
);

export default App;
