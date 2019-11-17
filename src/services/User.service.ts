import Maybe from "../types/Maybe.d";

export default class UserService {
  public static isLoggedIn = (): boolean =>
    !!localStorage.getItem(`@discord:user`);

  public static getToken(): Maybe<string> {
    const user: Maybe<string> = localStorage.getItem("@discord:user");

    return user ? JSON.parse(user.toString()).token : null;
  }

  public static getUserId(): Maybe<string> {
    const user: Maybe<string> = localStorage.getItem("@discord:user");

    return user ? JSON.parse(user.toString())._id : null;
  }

  public static logout(): void {
    localStorage.removeItem("@discord:user");
    window.location.href = process.env.SITE_URL as string;
  }
}
