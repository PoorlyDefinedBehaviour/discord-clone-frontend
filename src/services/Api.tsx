import axios from "axios";

/**
 * Change it to https:// on prod
 */
const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default api;
