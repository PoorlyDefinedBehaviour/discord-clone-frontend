export const StorageKeyPrefix: string = "@discord";

export const getToken = () =>
  (localStorage.getItem(`${StorageKeyPrefix}:user`) as any).token;

export const isLoggedIn = () =>
  !!localStorage.getItem(`${StorageKeyPrefix}:user`);
