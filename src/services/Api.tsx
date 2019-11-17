import axios from "axios";
import store from "../store/Index";
import UserService from "./User.service";

/* export const API_URL = "http://localhost:8080";
export const SITE_URL: string = "http://localhost:3000";
 */
/**
 * Change it to https:// on prod
 */
const api = axios.create({
  baseURL: `${process.env.API_URL}/graphql`
});

api.interceptors.request.use((config) => {
  if (UserService.isLoggedIn()) {
    const { user } = store.getState();
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default api;
