import axios from "axios";
import { isLoggedIn } from "./Authentication";
import { store } from "../store/Index";

export const ApiUrl = "http://localhost:8080";

/**
 * Change it to https:// on prod
 */
export const api = axios.create({
  baseURL: "http://localhost:8080/graphql"
});

api.interceptors.request.use(config => {
  if (isLoggedIn()) {
    const { user }: any = store.getState();
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});
