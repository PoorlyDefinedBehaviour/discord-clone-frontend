export const SiteUrl: string = "http://localhost:3001";

export const getToken = () =>
  (localStorage.getItem(`@discord:user`) as any).token;

export const isLoggedIn = () => !!localStorage.getItem(`@discord:user`);
