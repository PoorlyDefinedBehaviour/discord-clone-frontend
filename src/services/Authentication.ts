import { Maybe } from "../types/Maybe.d";

export const SiteUrl: string = "http://localhost:3001";

export const saveToLocalStorage = ({ user, token }): void => {
  user.servers = user.servers ? user.servers : [];
  user.friends = user.friends ? user.friends : [];
  user.friend_requests = user.friend_requests ? user.friend_requests : [];
  localStorage.setItem("@discord:user", JSON.stringify({ ...user, token }));
};

export const isLoggedIn = (): boolean =>
  !!localStorage.getItem(`@discord:user`);

export const getToken = (): any => {
  const user: Maybe<string> = localStorage.getItem("@discord:user");

  return user ? JSON.parse(user.toString()).token : null;
};

export const getUserId = (): any => {
  const user: Maybe<string> = localStorage.getItem("@discord:user");

  return user ? JSON.parse(user.toString())._id : null;
};

export const logout = (): void => {
  localStorage.removeItem("@discord:user");
  window.location.href = SiteUrl;
};
