import { store } from "../../store/Index";

const _default: Map<number, any> = new Map<number, any>();

_default.set(
  201,
  ({ user, token }: any, { history }: any): void => {
    store.dispatch({ type: "SET_USER", user, token });
    history.push("/lobby");
  }
);

_default.set(
  422,
  (_: any, { setEmailAlreadyInUse, setInvalidCredentials }: any): void => {
    setInvalidCredentials(false);
    setEmailAlreadyInUse(true);
    console.log("422");
  }
);

_default.set(
  404,
  (_: any, { setInternalServerError }): void => setInternalServerError(true)
);
_default.set(500, () => _default.get(404));

export default (status: number): any => _default.get(status);
