import Maybe from "../types/Maybe.d";
import { SITE_URL } from "./Api";

const PERSIST_ROOT = "persist:root";

export default class UserService {
  public static isLoggedIn = (): boolean =>
    !!localStorage.getItem(PERSIST_ROOT);

  public static getToken(): Maybe<string> {
    const user: Maybe<string> = localStorage.getItem(PERSIST_ROOT);

    return user ? JSON.parse(user.toString()).token : null;
  }

  public static getUserId(): Maybe<string> {
    const user: Maybe<string> = localStorage.getItem(PERSIST_ROOT);

    return user ? JSON.parse(user.toString())._id : null;
  }

  public static logout(): void {
    localStorage.removeItem(PERSIST_ROOT);
    window.location.href = SITE_URL;
  }
}
