import { saveToLocalStorage } from "../../services/Authentication";

const INITIAL_STATE: any = {
  friends: [],
  friend_requests: [],
  servers: []
};

function reducer(state: any = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "SET_USER":
      saveToLocalStorage({ user: action.user, token: action.token });
      return { ...action.user, token: action.token };

    default:
      return state;
  }
}

export default reducer;
