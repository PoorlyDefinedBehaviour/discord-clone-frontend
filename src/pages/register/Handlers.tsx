const _default: Map<number, any> = new Map<number, any>();

_default.set(
  201,
  ({ user, token }: any, { history }: any): void => {
    localStorage.setItem("@discord:user", JSON.stringify({ ...user, token }));
    console.log(user, token);
    history.push("/lobby");
  }
);

_default.set(
  422,
  (_: any, { setEmailAlreadyInUse }: any): void => {
    setEmailAlreadyInUse(true);
  }
);

export default (status: number): any => _default.get(status);
