import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./ducks/Index";

const persistConfig: any = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store: any = createStore(persistedReducer);
export const persistor: any = persistStore(store);
