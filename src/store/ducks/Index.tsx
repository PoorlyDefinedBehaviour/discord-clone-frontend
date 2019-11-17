import { combineReducers } from "redux";

import user from "./User";
import server from "./Server";

const reducers = combineReducers({
  user,
  server
});

export default reducers;
