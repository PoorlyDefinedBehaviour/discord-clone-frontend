export const saveToLocalStorage = ({ user, token }): void => {
  user.servers = user.servers ? user.servers : [];
  user.friends = user.friends ? user.friends : [];
  user.friend_requests = user.friend_requests ? user.friend_requests : [];
  localStorage.setItem("@discord:user", JSON.stringify({ ...user, token }));
  localStorage.setItem("persist:root", JSON.stringify({ ...user, token }));
};
