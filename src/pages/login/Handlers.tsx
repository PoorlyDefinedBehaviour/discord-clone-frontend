import { store } from "../../store/Index";

const _default: Map<number, any> = new Map<number, any>();

_default.set(
  200,
  ({ user, token }: any, { history }: any): void => {
    store.dispatch({ type: "SET_USER", user, token });
    history.push("/lobby");
  }
);

_default.set(
  401,
  (_: any, { setFailedToLogin, setInvalidCredentials }: any): void => {
    setFailedToLogin(true);
    setInvalidCredentials(false);
  }
);

export default (status: number): any => _default.get(status);
