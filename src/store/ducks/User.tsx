import { saveToLocalStorage } from "../../services/Authentication";

const INITIAL_STATE: any = {
  push_to_talk_key: "t",
  microphone: true,
  headphones: true,
  friends: [],
  friend_requests: [],
  servers: []
};

const updateUser = (fields: any): any => {
  const oldUser: any = JSON.parse(
    (localStorage.getItem("@discord:user") as any).toString()
  );
  const newUser = { ...oldUser, ...fields };
  saveToLocalStorage({ user: newUser, token: oldUser.token });

  return { ...newUser, token: oldUser.token };
};

function reducer(state: any = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "SET_USER":
      saveToLocalStorage({
        user: action.user,
        token: action.token
      });
      return { ...action.user, token: action.token };
    case "UPDATE_USER":
      return updateUser(action.fields);
    default:
      return state;
  }
}

export default reducer;
