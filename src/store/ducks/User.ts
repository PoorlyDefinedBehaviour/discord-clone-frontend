import { saveToLocalStorage } from "../../services/Authentication";

const INITIAL_STATE: any = {
  push_to_talk_key: "t",
  microphone: true,
  headphones: true,
  friends: [],
  friend_requests: [],
  servers: []
};

const updateUser = (fields) => {
  const oldUser = JSON.parse(
    (localStorage.getItem("@discord:user") as any).toString()
  );
  const newUser = { ...oldUser, ...fields };
  saveToLocalStorage({ user: newUser, token: oldUser.token });

  return { ...newUser, token: oldUser.token };
};

interface Handler {
  [key: string]: <T>(state: T, action) => T;
}

const handlers: Handler = {
  SET_USER: <T>(state: T, action) => ({ ...action.user, token: action.token }),
  UPDATE_USER: <T>(state: T, action) => updateUser(action.fields)
};

function reducer(state = INITIAL_STATE, action) {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
}

export default reducer;
